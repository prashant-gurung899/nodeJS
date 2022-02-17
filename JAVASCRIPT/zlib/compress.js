let zlib = require('zlib')
let fs= require('fs')

let gzip = zlib.createGzip()

let inp = fs.createReadStream('input1.txt')
let out = fs.createWriteStream('output.txt.gz')

inp.pipe(gzip).pipe(out)

