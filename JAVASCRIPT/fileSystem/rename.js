//rename a file or a directory

const log = console.log
let fs= require('fs')

fs.rename('oldfile.txt','newfile.txt',()=>log('oldfile renamed to newfile'))