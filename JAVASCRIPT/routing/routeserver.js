let http = require('http')
let fs = require('fs');
let url=require('url')
const log = console.log
const Port = 3000;

let server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    let u = url.parse(req.url);
    if(u.pathname=='/home'){
        fs.createReadStream('home.html').pipe(res);
    }
    else if(u.pathname=='/about'){
        fs.createReadStream('about.html').pipe(res);
    }
    else if(u.pathname=='/contact'){
        fs.createReadStream('contact.html').pipe(res);
    }
    
    else if(u.pathname=='/service'){
        fs.createReadStream('service.html').pipe(res);
    }
    else{
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h2>invalid request</h2>')
    }
    //log(u.pathname)
    //res.end();

    //log(req.url);
    //res.write('<h1>hello world</h1>')
})

server.listen(Port,()=>
{
    log(`server listening at port ${Port}`)
})