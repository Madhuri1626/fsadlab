const express = require('express')
const path = require('path')
app = express();
app.use(express.static('public'))
app.listen(5050, () => {
    console.log("Express Server Started");
})