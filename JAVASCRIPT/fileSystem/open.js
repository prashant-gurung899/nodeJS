const log = console.log
let fs= require('fs')

fs.open('sample.txt','r',(err,fd)=>{
    if(err){log(err)}
    else{
        log('file is opened')
        fs.readFile(fd,(err,data)=>{
            if(err){log(err)}
            else{
                log(data.toString()) //instead of utf-8 in the argument of readFile
            }
        })
    }
})