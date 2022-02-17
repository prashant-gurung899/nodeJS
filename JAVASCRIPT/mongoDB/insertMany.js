const log = console.log
let mongodb = require('mongodb');

let mongoClient=mongodb.MongoClient;
let url='mongodb://127.0.0.1:27017';

mongoClient.connect(url,{useUnifiedTopology:true},(err,db)=>
{
    if(err){log(err)}
    else{
        log('connection is sucessful')

        let dbo = db.db('manyPrashant');
        let employeesArray=[
            {_id:1,ename:'raju',ecity:'dharan'},
            {_id:2,ename:'ram',ecity:'ktm'},
            {_id:3,ename:'hari',ecity:'pokhara'}]
        dbo.collection('employees').insertMany(employeesArray,(err,result)=>
        {
            if(err){log(err)}
            else{
                //log('hello')
                log(result)
             //  log(result.insertedCount)
                db.close(); 
            }
        })
        
    }
}) 