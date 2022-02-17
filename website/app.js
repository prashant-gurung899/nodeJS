const log = console.log

let http = require('http')
let fs= require('fs')
let querystring = require('querystring')
let mongodb=require('mongodb')
let mongoClient=mongodb.MongoClient

let url='mongodb://localhost:27017'

const PORT = 4000;

let server = http.createServer((req,res)=>
{
    if(req.url=='/')
    {
        fs.createReadStream('public/home.html').pipe(res)
    }
    else if(req.url=='/training')
    {
        fs.createReadStream('public/training.html').pipe(res)   
    }
    else if(req.url=='/contact' && req.method=='GET')
    {
        fs.createReadStream('public/contact.html').pipe(res)  
        //log(req.method) 
    }
    else if(req.url=='/contact' && req.method=='POST')
    {
        res.writeHead(200,"OK",{'content-type':'text/html'})  
        log('form submitted')

        req.on('data',(chunk)=>
        {
           let form= querystring.parse(chunk.toString());
           mongoClient.connect(url,(err,db)=>
           {
               if(err){log(err)}
               else{
                  let dbo = db.db('mongoSite')
                  dbo.collection('enquiries').insertOne(form,(err,result)=>
                  {
                      if(err)log(err)
                      else{
                          log(`${result.insertedCount} Enquiry recieved`)
                      }
                  })
                  
               }
           })
           //log(form)
           
        })
        fs.createReadStream('public/contact.html').pipe(res)  

    }
    else if(req.url=='/login' && req.method=='GET')
    {
        fs.createReadStream('public/login.html').pipe(res)   
    }
    else if(req.url=='/login' && req.method=='POST')
    {
        res.writeHead(200,"OK",{'content-type':'text/html'})
        req.on('data',(chunk)=>
        {
           let form= querystring.parse(chunk.toString());
           mongoClient.connect(url,(err,db)=>
           {
               if(err){log(err)}
               else{
                  let dbo = db.db('mongoSite')
                  let loginAuthentication={
                     $and:[{email:form.email},{password:form.password}]
                  }
                  dbo.collection('registration').findOne(loginAuthentication,(err,result)=>
                  {
                      if(err){log(err)}
                      else
                      {
                          if(result!=null){
                            res.end('<h2>log in success</h2>') 
                          }
                          else{
                            res.end('<h2>log in failed</h2>')  
                            log(result)
                          }
                
                      // log(result) 
                      }
                  })
                  
               }
           })
           
           
        })
        
    }
    else if(req.url=='/signup' && req.method=='GET')
    {
        
        fs.createReadStream('public/signup.html').pipe(res)   
    }
    else if(req.url=='/signup' && req.method=='POST')
    {
        res.writeHead(200,"OK",{'content-type':'text/html'})
        req.on('data',(chunk)=>
        {
           let form= querystring.parse(chunk.toString());
           mongoClient.connect(url,(err,db)=>
           {
               if(err){log(err)}
               else{
                  let dbo = db.db('mongoSite')
                  dbo.collection('registration').insertOne(form,(err,result)=>
                  {
                      if(err)log(err)
                      else{
                          log(`${result.insertedCount} User Registered`)
                      }
                  })
                  
               }
           })
           //log(form)
           
        })
        fs.createReadStream('public/login.html').pipe(res)   
    }
    else if(req.url=='/about')
    {
        fs.createReadStream('public/about.html').pipe(res)   
    }
})
server.listen(PORT,()=>
{
    log(`server listening on ${PORT}`)
})