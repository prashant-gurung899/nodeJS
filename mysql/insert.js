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

        connection.query(updateQuery,(err,result)=>
        {
            if(err){
                log('failed')
            }
            else{
                log(`data updated successfully`)
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