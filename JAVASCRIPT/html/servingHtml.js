const log = console.log;
let http = require('http');
let fs = require('fs');
const PORT = 3000;
let server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.createReadStream('home.html').pipe(res);
 
    //res.end();
});
server.listen(PORT,()=>{
    log(`server listening on port ${PORT}`);
})