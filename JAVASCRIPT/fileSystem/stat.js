const log = console.log
let fs = require('fs')

fs.stat('sample1.txt',(err,stats)=>{
    if(err){
        log(err)
    }
    else{
        //log(stats)
        log(`is file? : ${stats.isFile()}`)
        log(`is directory? : ${stats.isDirectory()}`)
    }
})