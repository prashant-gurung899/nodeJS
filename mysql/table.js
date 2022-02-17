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
        let createTable = `create table ${tableName} (id int primary key auto_increment,fname varchar(30),lname varchar(30),course varchar(50),email varchar(50))`;

        connection.query(createTable,(err,result)=>
        {
            if(err){
                log('database creation failed')
            }
            else{
                log(`table : ${tableName} created successfully`)
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