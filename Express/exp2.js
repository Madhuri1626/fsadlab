const express = require('express')
const path = require('path')
app = express();

app.get("/", (req, res) => {
    // res.send('<h1> Home Page </h1>')
    res.sendFile(path.join(__dirname + '/home.html'))
});

// app.get("/about", (req, res) => {
//     res.send('<h1> About Page </h1>')
// });

app.listen(5050, () => {
    console.log("Express Server Started");
})