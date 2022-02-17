const log = console.log
let fs= require('fs')

fs.readFile('sample.txt','utf-8',(err,data)=>{
    log('read operation is completed')
    fs.writeFile('sample3.txt',data,()=>{
        log('write operation is completed')
    })
})