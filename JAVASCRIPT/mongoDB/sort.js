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
        dbo=db.db('prashant');

        //sorting in ascending order(1) according to the names
        //for descending use -1 
        dbo.collection('employees').find({}).sort({ename:1}).toArray((err,result)=>
        {
            if(err){log(err)}
            else{
                //log(result)
                for(employee of result)
                {
                    log(`employee ID: ${employee._id}`);
                    log(`employee Name: ${employee.ename}`);
                    log(`employee city: ${employee.ecity}`);
                    log(`**************************************`)
                }
                db.close();
            }
        
        })
       
    }
})