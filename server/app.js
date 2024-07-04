require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ExpressError = require("./ExpressError");
const { userRoutes, todoRoutes } = require("./routes");

// const dbURL = process.env.DB_URL;
// mongoose
//     .connect(dbURL)
//     .then(() => {
//         console.log(`Server is connected to database`);
//     })
//     .catch((e) => {
//         console.log(`Server Database connection error: ${e}`);
//     });

const app = express();

// app.use(
//     cors({
//         origin: [process.env.ALLOWED_URL_1],
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         optionsSuccessStatus: 200,
//     })
// );

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/", (req, res, next) => {
//     res.status(200).json({ message: "GOOD" });
// });

// app.use(process.env.USER, userRoutes);
// app.use(process.env.TODOS, todoRoutes);

// app.all("*", (req, res, next) => {
//     return next(new ExpressError(404, "NOT FOUND"));
// });

// app.use((err, req, res, next) => {
//     err.message = err.message || "Internal Server Error";
//     err.status = err.status || 500;
//     return res.status(err.status).json(err);
// });

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
