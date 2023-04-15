const fs = require('fs');
fs.writeFile('asy.txt', 'asyncc cont', (error) => {

    if(error){
        console.log("Something went Wrong" + error);
    }
    console.log("FIle Cretaed");
})