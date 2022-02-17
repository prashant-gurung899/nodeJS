const log = console.log
let mongodb = require('mongodb')

let mongoClient= mongodb.MongoClient;

let url ='mongodb://127.0.0.1:27017';

mongoClient.connect(url,{useUnifiedTopology:true},(err,db)=>
{
    if(err){log(err)}
    else{
        log('connection established')
        let dbo=db.db('prashant');
        
        //updating ectity to mumbai from ktm
        //it only updates the first document even if it matches other documents
        //to update all the documents that mateches the query
        //updateMany()
        dbo.collection('employees').updateOne({ecity:'ktm'},{$set:{ecity:'mumbai'}},(err,result)=>
        {
            if(err){log(err)}
            else{
                log(`${result.modifiedCount} document updated`)
                db.close();
            }
        })
       
        }
})