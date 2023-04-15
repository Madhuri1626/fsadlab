const fs = require('fs');

fs.copyFile('copy.js', 'myFile.txt', (err,data) => {
    if(err) throw err;
    console.log("FIle Copied!!");
})