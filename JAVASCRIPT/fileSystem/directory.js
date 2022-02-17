const log = console.log
let fs= require('fs')

//blocking
//fs.mkdirSync('directory')

//non blocking
/*fs.mkdir('directory111',()=>{
    log('new directory created successfully')
})*/

//creat directory and a file

fs.mkdir('new folder',()=>{
    log('new folder is created')
    fs.writeFile('new folder/hello.txt','new file is written',()=>
    {
        log('new file is created inside the new folder')
    })
})