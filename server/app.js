require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

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
app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
