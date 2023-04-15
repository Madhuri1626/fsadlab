var fs = require('fs');

fs.rename("asy1.txt", "myFile.txt", (err) => {
    if(err) throw err;
    console.log("Successfully renamed!");
  });