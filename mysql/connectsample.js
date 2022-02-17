const log = console.log;

let mysql = require('mysql');
//log(mysql); gives an object

let dbDetails=
{
    host:'localhost',
    user:'root',
    password:'root'
}

let connection = mysql.createConnection(dbDetails)

connection.connect((err)=>
{
    if(err){log(err)}
    else{
        log('connection success')
        
    }
    connection.end((err)=>
    {
        if(err){log('problem with closing connection')}
        else{
             log('connection closed successfully')
        }
    })
})

