let zlib = require('zlib')
let fs= require('fs')

let unzip = zlib.createUnzip()

let inp = fs.createReadStream('output.txt.gz')
let out = fs.createWriteStream('decompressed.txt')

inp.pipe(unzip).pipe(out)

