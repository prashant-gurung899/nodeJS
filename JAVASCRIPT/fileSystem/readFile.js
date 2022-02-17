const log = console.log
let fs = require('fs')

//blocking/synchronous form
//let data= fs.readFileSync('sample.txt','utf-8')

//non-blocking/asynchronous form
fs.readFile('sample.txt','utf-8',(err,data)=>
{
    if(err){log(err)}
    else{log(data)}
})
//log(data)
log('hello world')
log('hello world222')