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
        // (ecity:0 value 0 means to print everything except ecity from the collection)
        dbo.collection('employees').find({},{projection:{ecity:0} }).toArray((err,result)=>
        {
            if(err){log(err)}
            else{
                //log(result)
                for(employee of result)
                {
                    log(`employee ID: ${employee._id}`);
                    log(`employee Name: ${employee.ename}`);
                   // log(`employee city: ${employee.ecity}`);
                    log(`**************************************`)
                }
                db.close();
            }
        })
       
    }
})