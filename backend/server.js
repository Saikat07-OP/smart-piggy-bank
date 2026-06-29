const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Smart Piggy Bank Backend Running 😎");
});

app.get("/goal", (req, res) => {

    res.json({
        goal: "Buy Laptop",
        target: 50000,
        saved: 12000
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});