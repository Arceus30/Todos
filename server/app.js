require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
    cors({
        origin: [process.env.BASE_URL_1],
        methods: ["GET", "POST", "PUT", "DELETE"],
        optionSuccessStatus: 200,
    })
);
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
