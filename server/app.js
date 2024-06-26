require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const corsConfig = {
    origin: [process.env.BASE_URL_1],
};

app.use(cors(corsConfig));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    const random = Math.floor(Math.random() * 50) + 100;
    res.status(200).json({ count: random });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
