const express = require('express')
app = express();

app.get("/", (req, res) => {
    res.send('<h1> Home Page </h1>')
});

app.get("/about", (req, res) => {
    res.send('<h1> About Page </h1>')
});

app.listen(5000, () => {
    console.log("Express Server Started");
})