require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const { User, Todo } = require("./models");
const session = require("express-session");
const mongoSanitize = require("express-mongo-sanitize");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const ExpressError = require("./utils/ExpressError.js");
const MongoStore = require("connect-mongo");

mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        console.log(`Server-Database Connection Successful`);
    })
    .catch((e) => {
        console.log(`Server-Database Connection error: ${e}`);
    });

app.use(
    cors({
        origin: [process.env.BASE_URL_1],
        methods: ["GET", "POST", "PUT", "DELETE"],
        optionSuccessStatus: 200,
    })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    mongoSanitize({
        replaceWith: "_",
    })
);

const secret = process.env.SECRET;

const store = MongoStore.create({
    mongoUrl: process.env.DB_URL,
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret,
    },
});

const sessionConfig = {
    store,
    name: "session",
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    },
};

app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
    res.send("home");
});

// unique username
app.get(process.env.UNIQUE_URL, async (req, res, next) => {
    try {
        const { username, signup } = req.query;
        const user = await User.findOne({ username });
        if (signup) {
            if (user) {
                return res
                    .status(409)
                    .json({ message: "Please enter a unique username" });
            }
        } else {
            if (user === null) {
                return res.status(404).json({ message: "User not found" });
            }
        }
        return res.status(200).json({ message: "Okay" });
    } catch (e) {
        next(e);
    }
});

// create user
app.post(process.env.REGISTER, async (req, res, next) => {
    try {
        const { user } = req.body;
        const { username, email, password } = user;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        res.status(200).json({
            message: "User created Successfully",
            registeredUser,
        });
    } catch (e) {
        next(e);
    }
});
// Login user
app.post(
    process.env.LOGIN,
    (req, res, next) => {
        if (req.body && req.body.user) {
            const { username, password } = req.body.user;
            req.body = { username, password };
        }
        next();
    },
    (req, res, next) => {
        passport.authenticate("local", (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                const err = { message: "Incorrect Username or password" };
                return res.status(401).json({ err });
            }
            req.logIn(user, async (err) => {
                if (err) {
                    return next(err);
                }
                const { username } = user;
                const loggedInUser = await User.find({ username });
                return res.status(200).json({
                    message: "User Login Successfully",
                    loggedInUser,
                });
            });
        })(req, res, next);
    }
);

// fetch user-todos data
app.get(process.env.ALL_TODOS, async (req, res, next) => {
    try {
        const { id } = req.query;
        const user = await User.findById(id).populate("todos");
        if (user === null) {
            return res.status(404).json("User not found");
        }
        const todos = user.todos;
        res.status(200).json({ todos: todos });
    } catch (e) {
        next(e);
    }
});

//todo completed
app.get(process.env.TODO_COMPLETED, async (req, res, next) => {
    try {
        const { id } = req.query;
        const todo = await Todo.findById(id);
        if (todo === null) {
            return res.status(404).json("User not found");
        }
        todo.isCompleted = true;
        todo.dateCompleted = Date.now();
        await todo.save();
        res.status(200).json({
            message: "todo completed",
            completedTodo: todo,
        });
    } catch (e) {
        next(e);
    }
});

//todo deleted
app.delete(process.env.TODO, async (req, res, next) => {
    try {
        const { todo, userId } = req.query;
        const user = await User.findById(userId);
        if (user === null) {
            return res.status(404).json("User not found");
        }
        const deletedTodo = await Todo.findByIdAndDelete(todo._id);
        if (!deletedTodo) {
            return res.status(404).json("Todo not found");
        }
        user.todos = user.todos.filter((todoId) => !todoId.equals(todo._id));
        await user.save();
        res.status(200).json({
            message: "todo deleted",
            deletedTodo,
        });
    } catch (e) {
        next(e);
    }
});

// undefined page error handling
app.all("*", (req, res, next) => {
    return next(new ExpressError(404, "Page not found"));
});

// error middleware
app.use((err, req, res, next) => {
    err.message = err.message || "Something is not right";
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).json({ err });
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
