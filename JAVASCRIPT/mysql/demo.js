const log = console.log

let fs= require('fs')
let querystring = require('querystring')
let http = require('http')
let mysql=require('mysql');
const PORT = 3000;

let dbDetails = {
    host:'localhost',
    user:'root',
    password:'root',
    database:'prashant'
}
let server = http.createServer((req,res)=>
{
    if(req.url=='/contact' && req.method=='GET'){ //to get the contact page
        fs.createReadStream('contact.html').pipe(res)
    }
    else if(req.url=='/contact' && req.method =='POST'){ //to submit the form

        let connection = mysql.createConnection(dbDetails); //establishing connection with database
        
        connection.connect(err=>{
            if(err){
                log(err)
            }
            else{
                log('connection is established')
            }
        })
        req.on('data',(data)=>{
            let form= querystring.parse(data.toString()) //parse the data into string
            let {name,email,mobile,subject,message} = form; //destructuring object
            let insertQuery = `INSERT INTO enquiry (name,email,mobile,subject,message) VALUES ('${name}','${email}','${mobile}','${subject}','${message}')`;
            connection.query(insertQuery,(err,result)=>{  //insert query condition
                if(err){log(err)}
                else{
                    res.writeHead(200,'Ok',{'content-type':'text/html'})
                    res.end(`<h2 style='color:green;text-align:center'>Dear ${name},Thank you for  contacting us,Our team will get back shortly</h2>`)
                }
            })
            connection.end();
            /* log(`Name : ${name}`)
            log(`Email : ${email}`)
            log(`Mobile : ${mobile}`)
            log(`Subject : ${subject}`)
            log(`Message : ${message}`)*/
            //log(form)
         });
    }
})
server.listen(PORT,()=>log(`server started at ${PORT}`))