let fs= require('fs')
let http = require('http')
let formidable= require('formidable')

const log = console.log;
const PORT = 3000;

let server= http.createServer((req,res)=>
{
    if(req.url=='/form' && req.method=='GET'){
        fs.createReadStream('form.html').pipe(res);
    }
    else if(req.url=='/form' && req.method=='POST'){

        let form = new formidable.IncomingForm();
        //log(form.uploadDir)
        form.uploadDir="D:\\JAVASCRIPT\\file upload" //giving a path where it saved the uploaded files
        log(form.uploadDir)
        form.parse(req,(err,fields , files)=>
        {
            if(err){log(err)}
            else{
                let oldPath = files.filetoUpload.filepath;
                let newPath= "D:\\JAVASCRIPT\\file upload\\saved\\" +files.filetoUpload.originalFilename;

                fs.rename(oldPath,newPath,()=>{
                    log(files.filetoUpload.filepath);  //file path with saved file name
                    log(files.filetoUpload.originalFilename); //name of original file name in the form
                    res.writeHead(200,'OK',{'content-type':'text/html'})
                    res.write('<h2 style="color:green">File uploaded successfully</h2>')
                    res.write(`<h2 style="color:pink">File name: ${files.filetoUpload.originalFilename} has been uploaded</h2>`)
                    res.write(`<h2 style="color:pink">File path: ${files.filetoUpload.filepath}</h2>`)
                    res.end() 
                })
              
            }
        })
        
    }
    else{
        res.writeHead(200,'OK',{'content-type':'text/html'})
        res.write('<h2 style="color:red">Invalid request</h2>')
        res.end()
    }
    
});
server.listen(PORT,()=>{
    log(`server started at port: ${PORT}`)
})