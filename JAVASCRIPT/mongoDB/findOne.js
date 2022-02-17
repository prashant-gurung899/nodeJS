const log = console.log

let mongodb = require('mongodb');

let mongoClient= mongodb.MongoClient;
let url='mongodb://127.0.0.1:27017'


mongoClient.connect(url,{useUnifiedTopology:true},(err,db)=>
{
    if(err){log(err)}
    else
    {
        log('connection established successfully')
        dbo=db.db('manyPrashant');
        dbo.collection('employees').findOne({},(err,result)=>
        {
            if(err){log(err)}
            else{
                log(result)
                db.close();
            }
        })
       
    }
})