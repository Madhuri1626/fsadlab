const fs = require('fs');

fs.readdir("NODEJS", "utf-8", (err, files) => {
    if(err) throw err;
    console.log(files);
})