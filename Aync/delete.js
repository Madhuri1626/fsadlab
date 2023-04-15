const fs = require('fs');

fs.unlink('asy.txt', (err) => {
    if(err) throw err;
    console.log("File Deleted")
})