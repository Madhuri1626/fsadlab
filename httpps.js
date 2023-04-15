const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/html'})
    fs.readFile('index.html', function(err, data){
        if(err) {
            req.writeHead(404)
            res.write("file not found")
        }
        else{
            res.write(data)
        }
    })
})

server.listen(5000, function(error){
    if(error){
        console.log("something went wrong")
    }
    else{
        console.log("server lsiten")
    }
})