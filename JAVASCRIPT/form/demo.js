const log = console.log

let fs= require('fs')
let querystring = require('querystring')
let http = require('http')
let mysql=require('mysql');
const PORT = 3000;

let dbDetails = {
    host:'Localhost',
    user:'root',
    password:'root',
    database:'prashant'
}
let server = http.createServer((req,res)=>
{
    if(req.url=='/contact' && req.method=='GET'){
        fs.createReadStream('contact.html').pipe(res)
    }
    else if(req.url=='/contact' && req.method =='POST'){

        let connection = mysql.createConnection(dbDetails);
        connection.connect(err=>{
            if(err){
                log(err)
            }
            else{
                log('connection is established')
            }
        })
        req.on('data',(data)=>{
            let form= querystring.parse(data.toString())
            let {name,email,mobile,subject,message} = form; //destructuring object
            log(`Name : ${name}`)
            log(`Email : ${email}`)
            log(`Mobile : ${mobile}`)
            log(`Subject : ${subject}`)
            log(`Message : ${message}`)

            res.writeHead(200,'Ok',{'content-type':'text/html'})
        res.end(`<h2 style='color:green;text-align:center'>Dear ${name},Thank you for  contacting us,Our team will get back shortly</h2>`)
            //log(form)
         })
        
    }
})


server.listen(PORT,()=>log(`server started at ${PORT}`))