//example 1
const log = console.log
 //instead of hardcoding the variables we can :
/* let person = {
    fname: 'prashant',
    lname : 'gurung'
} */
let fname = 'prashant' ;
let lname = 'gurung'

 let person = {
    fname,
    lname 
} 
log(`first name is : ${person.fname}`)
log(`last name is : ${person.lname}`)


