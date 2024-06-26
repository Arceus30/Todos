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
console.log(process.env.BASE_URL_1);
app.get("/count", (req, res) => {
    const random = Math.floor(Math.random() * 50) + 100;
    console.log(random);
    res.status(200).json({ count: random });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
