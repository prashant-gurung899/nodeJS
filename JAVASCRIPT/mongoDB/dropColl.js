const log = console.log
let mongodb = require('mongodb');

let mongoClient = mongodb.MongoClient; //it is responsible to get the mongo client
let url='mongodb://127.0.0.1:27017';

mongoClient.connect(url,{useUnifiedTopology:true},(err,db)=>
{
    if(err){log(err)}
    else{
        log('connection established')
        let dbo=db.db('NewPrashant'); //if the db doesnot exist in the server then this code will create it
        dbo.collection('trainees').drop(()=>
        {
            log('trainees collection dropped')
            db.close();
        })
    }
})