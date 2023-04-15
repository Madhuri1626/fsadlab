const fs = require('fs');

fs.mkdir("NODEJS", (err) => {
    if(err) throw err;
    console.log("Directory Created")
})