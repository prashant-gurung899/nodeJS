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
book1.save((err,book)=>
{
    if(err){log(err)}
    else{
        log(`${book.name} inserted successfully`)
        db.close();
    }
})