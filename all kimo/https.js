let http = require('http');

let server = http.createServer((req,res)=>{
    res.write("hii from nodejs code server app")
    res.end()
})

server.listen(8766)