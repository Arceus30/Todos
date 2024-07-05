const mongoose = require("mongoose");
const { User, Todo } = require("../models");
const todoTitles = require("./TodoTitles");
const todoBody = require("./TodoBody");
const bcrypt = require("bcryptjs");

mongoose
    .connect("mongodb://localhost:27017/Todos")
    .then(() => {
        console.log(`Server-Database Connected`);
    })
    .catch((e) => {
        console.log(`Server-Database connection error: ${e}`);
    });

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await User.deleteMany({});
    await Todo.deleteMany({});
    const username = "keshav";
    const email = "keshavkhandelwal30@gmail.com";
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync("Keshav@123", salt);

    const user = new User({ email, username, password });

    for (let i = 0; i < 50; i++) {
        const todo = new Todo({
            title: `${sample(todoTitles)}`,
            description: `${sample(todoBody)}`,
            createdBy: user,
        });
        await todo.save();
        user.todos.push(todo);
    }
    await user.save();
};

seedDB()
    .then(() => {
        console.log(`Data Added Successfully`);
        mongoose.connection.close();
        console.log(`Connection Closed`);
    })
    .catch((e) => {
        console.log(`Data Failed: ${e}`);
        mongoose.connection.close();
        console.log(`Connection Closed`);
    });
