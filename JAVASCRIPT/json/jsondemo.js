const log = console.log;
let http = require('http');
let fs = require('fs');
const PORT = 5000;
let server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    let employee = {
        eid:1,
        ename:'prashant',
        ecity:'pokhara'
    }
    res.write(JSON.stringify(employee));
    res.end();
    log(http.METHODS)
});

server.listen(PORT,()=>{
    log(`server listening on port ${PORT}`);
})