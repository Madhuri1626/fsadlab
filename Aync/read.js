const fs = require('fs');
fs.readFile('asy1.txt', 'utf-8', (err, data) => {
    if(err){console.log("File doesn't Exist" + err)}
    console.log(data)
})