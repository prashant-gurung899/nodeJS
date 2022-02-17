const log = console.log;
let mysql = require('mysql')

let dbDetails=
{
    host:'localhost',
    user:'root',
    password:'root',
    database:'uplatz'
}

let connection = mysql.createConnection(dbDetails);
//log(connection)
connection.connect((err)=>
{
    if(err){
        log(err)
    }
    else{
        log('connection successful')

        let tableName='trainees'
        //insert
        let insertQuery = `insert into ${tableName} (fname,lname,course,email) values('akash','regmi','pst','akash@gmail.com')`;
        //update
        let updateQuery =`update ${tableName} set course ='UML' where id=1`;
        //select
        let selectQuery =`select * from ${tableName}`
        //let selectQuery =`select * from ${tableName} where id = 1`

        connection.query(selectQuery,(err,results,fields)=>
        {
            if(err){
                log('failed')
            }
            else{
               // log(`first name: ${results.fname}`)   ===undefined???
               log('Displaying trainee details')

               for(let trainee of results)
               {
                log(`Traine ID: ${trainee.id}`)
                log(`First name: ${trainee.fname}`)   
                log(`Last name: ${trainee.lname}`)
                log(`Course: ${trainee.course}`)
                log(`Email: ${trainee.email}`)
                log(`************************`)
               }
            }
        })
    }
    connection.end((err)=>
    {
        if(err)
        {
            log('connection end unsuccessful')
        }
        else{
            log('connection ended successfully')
        }
    })
})