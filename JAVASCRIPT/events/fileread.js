let fs = require('fs');

let rs = fs.createReadStream('demo.txt')

rs.on('open',()=>{
    console.log('the file is opened')
})
rs.on('close',()=>{
    console.log('the file is closed')
})

rs.close();
