const fs = require('fs');
 
fs.watch("myFile.txt", (eventType, filename) => {
  console.log("The file ", filename, " was modified!");
  console.log("It was a ", eventType, " event type.");
});

fs.appendFileSync("myFile.txt","Welcome to Geeks for Geeks, The file is modified")