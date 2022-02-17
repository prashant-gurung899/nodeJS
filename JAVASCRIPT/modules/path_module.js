const log = console.log
let path = require('path')

let p1 ='/mycomputer/disk1/nodejs/tutorial.js';  //first slash denotes it is an absolute path

log(`base or file name : ${path.basename(p1)}`) //last part of the path i.e. a file
log(`directory name : ${path.dirname(p1)}`)
log(`extension : ${path.extname(p1)}`)
log(`Is absolute? : ${path.isAbsolute(p1)}`)
//log(path.delimiter)  //property


let p2='/contact'
let p3='form.html'

log(`joint path is : ${path.join(p2,p3)}`)