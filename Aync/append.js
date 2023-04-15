var fs = require('fs');
new_data = "\nThis data will be appended at the end of the file.";
fs.appendFile('asy1.txt', new_data , (err) => {
	if(err) throw err;
	console.log('The new_content was appended successfully');
});

upload(req, res, function(err){
	if(err){
		res.send(err)
	}
	else{
		res.send("Suceese, image uploaded!")
	}
})