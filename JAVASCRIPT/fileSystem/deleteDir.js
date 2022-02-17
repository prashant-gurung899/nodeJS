const log = console.log
let fs= require('fs')

//blocking
//fs.rmdirSync('directory')


//non-blocking
//fs.rmdir('directory111',()=>log('directory111 is deleted'))

//deleting a folder with a file.all files must me deleted

fs.unlink('new folder/hello.txt',()=>log('hello.txt is deleted'))
fs.rmdir('new folder',()=>log('new folder is deleted'))