const express = require('express')
const path = require('path')
app = express();

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render('index', {college:'shri'})
});

app.listen(5050, () => {
    console.log("Express Server Started");
})