const log = console.log

/*let student = {
    'First Name' : 'prashant',
    lname : 'gurung'
}
log(`first name is ${student["First Name"]}`) */

let fn = 'first name';
let ln= 'last name'

let student = {
    [fn] : 'prashant',
    [ln] : 'gurung'
}

log(`first name is ${student["first name"]}`)
log(`last name is ${student['last name']}`)