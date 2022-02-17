let fs= require('fs')
const log = console.log

let rs=fs.createReadStream('sample.txt','utf-8')
let ws= fs.createWriteStream('write.txt','utf-8')



rs.on('open',()=>
{
    log('file is opened')
})
rs.on('data',(chunk)=>
{
    log('new chunk arrived')
    ws.write(chunk);
    //or
    rs.pipe(ws); //it is same operation as above line(using pipe)
})