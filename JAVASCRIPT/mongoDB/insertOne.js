const log = console.log
let mongodb = require('mongodb');

let mongoClient=mongodb.MongoClient;
let url='mongodb://127.0.0.1:27017';

mongoClient.connect(url,{useUnifiedTopology:true},(err,db)=>
{
    if(err){log(err)}
    else{
        log('connection is sucessful')

        let dbo = db.db('prashant');
        let employee1={
            //eid:1,
            _id:4, //using this manually,mongodb wont give an unique object id
            ename:'ramu',
            ecity:'dharan'
        }
        dbo.collection('employees').insertOne(employee1,(err,result)=>
        {
            if(err){log(err)}
            else{
                log(result)
             //  log(result.insertedCount)
                db.close(); 
            }
        })
        
    }
})