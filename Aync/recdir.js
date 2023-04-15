const fs = require('fs');

function recursion(data, n){
    if(n>0){
        fs.readFile('NODEJS/'+ data[n-1], 'utf-8', (err, content)=>{
            if(err){ 
                console.log(`Eroor ${data[n-1]}`)
            }
            else{
            console.log(content);
            }
            recursion(data,n-1);
        });
    }
}

fs.readdir('NODEJS',"utf-8", (err, data) => {
    if(err){console.log("error")}
    else{
    recursion(data, data.length);}
})