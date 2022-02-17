const log = console.log
let mongodb = require('mongodb');

let mongoClient = mongodb.MongoClient; //it is responsible to get the mongo client
let url='mongodb://127.0.0.1:27017';

mongoClient.connect(url,{useUnifiedTopology:true},(err,db)=>
{
    if(err){log(err)}
    else{
        log('connection established')
        let dbo=db.db('prashant'); //if the db doesnot exist in the server then this code will create it
        
        //deleting document with _id:4 from employees using deleteOne
        //ude deleteMany to delete more documents that match the query
        dbo.collection('employees').deleteOne({_id:4},(err,result)=>{
            if(err){log(err)}
            else{
                log(`${result.deletedCount} document deleted`);
                db.close();
            }
        })
    }
})