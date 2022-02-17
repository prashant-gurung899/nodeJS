const log = console.log
let fs= require('fs')

//blocking method
/*fs.unlinkSync('randomfile.txt')

log('randomFile is deleted successfully')*/

//non blocking method
fs.unlink('randomfile.txt',()=>{
    log('randomfile is deleted successfully')
})