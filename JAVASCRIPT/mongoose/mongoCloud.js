let mongoose = require('mongoose')

const log = console.log;

let url='mongodb+srv://prashant89964:prashant89964@newcluster.5pgdo.mongodb.net/uplatz?retryWrites=true&w=majority'
mongoose.connect(url)

let db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'))

db.once('open',()=>
{
    log('connection success')
    //db.close();
})
let employeeSchema = mongoose.Schema(
    {
        ename: String,
        ecity:String,
        esalary:Number
    }
)

let Employee = mongoose.model('Employee',employeeSchema,'employees')
//insert one data
let employee1 = new Employee({ename:'prashant',ecity:'pokhara',esalary:90000})
/*employee1.save((err,docs)=>
{
    if(err){log(err)}

    else{
        log(`Hello ${docs.ename},your document is submitted successfully`)
    }
})*/

//insert multiple data
let employees =[
    {ename:'Praveen',ecity:'siraha',esalary:20000,edoj:'10-10-2020'},
    {ename:'Ram',ecity:'kathmandu',esalary:30000,edoj:'12-10-2020'},
    {ename:'Shyam',ecity:'london',esalary:40000,edoj:'11-10-2020'},
    {ename:'Hari',ecity:'delhi',esalary:50000,edoj:'8-10-2020'},
    {ename:'Sitaram',ecity:'mumbai',esalary:60000}
]

Employee.collection.insertMany(employees,(err,result)=>
{
    if(err){log(err)}
    else{
        log(`${result.insertedCount} documents inserted`)
        db.close();
    }
})
