const fs = require('fs');
fs.writeFile('asy1.txt' , 'async content', ()=>{
    console.log("File Created");
})
console.log("Outside");