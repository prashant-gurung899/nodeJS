const log = console.log
let fs = require('fs')

//blocking mode
//fs.writeFileSync('sample1.txt','new file overwritten')
//remaining codes will be blocked until fs.writeFileSync method finishes

//log('code executed after completing writeFileSync')

//non blocking mode
fs.writeFile('sample1.txt','new file',()=>{
    log('data written to file successfully')
})

log('This is not blocked')