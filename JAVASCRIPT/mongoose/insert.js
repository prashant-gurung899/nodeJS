const log =console.log;

let mongoose= require('mongoose')

let url = 'mongodb://localhost:27017/tutorial'
mongoose.connect(url)
let db = mongoose.connection;

//check connection
db.on('error',console.error.bind(console,'connection error'))

db.once('open',()=>
{
    log('connection success')
})

//create a schema
let bookSchema = mongoose.Schema({
        name: String,
        price: Number,
        author: String
})
//create a model
let Book = mongoose.model('Book',bookSchema, 'bookstore')

let book1= new Book({name:'java-14',price:400,author:'Raju'})

let books=
[
    {name:'java-14',price:400,author:'Raju'},
    {name:'java-15',price:500,author:'hari'},
    {name:'java-16',price:600,author:'shyam'}, 
    {name:'java-17',price:700,author:'krishna'},
    {name:'java-18',price:800,author:'dilip'}

]

Book.collection.insertMany(books,(err,docs)=>
{
    if(err){log(err)}
    else{
        log(`${docs.insertedCount} documents inserted`)
    }

})