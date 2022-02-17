const log = console.log;
let mysql = require('mysql')

let dbDetails=
{
    host:'localhost',
    user:'root',
    password:'root',
    database:''
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

        let databaseName='uplatz'
        let createDatabase = `create database ${databaseName}`

        connection.query(createDatabase,(err,result)=>
        {
            if(err){
                log('database creation failed')
            }
            else{
                log(`database ${databaseName} created successfully`)
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