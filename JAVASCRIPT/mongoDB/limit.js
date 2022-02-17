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

        //empty query will print everything...find({}) 
        //using limit(value) to limit the number of output result
        dbo.collection('employees').find({}).limit(2).toArray((err,result)=>
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