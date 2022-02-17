let querystring = require('querystring')
const log = console.log

//using parse to convert query into json
let q='name=prashant&city=pokhara&number=25';
let json =querystring.parse(q);
log(json)

//using stringy to convert json into query
let employee= {
    ename:'prashant',
    ecity:'pokhara',
    age:25
}
log(employee)
log('-------------------')
let qs=querystring.stringify(employee)
log(qs)
