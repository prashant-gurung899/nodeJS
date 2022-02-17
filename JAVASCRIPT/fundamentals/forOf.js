const log = console.log
let employeeNames =['prashant', 'anushka' ,'pratik', 'swapnil'] //array
log(`Displaying array values using For..of loop`)
for(let e of employeeNames)
{
    //log(e)
}

/*const types = [ 'object', 'array', 'string', 'integer', 'float', 'boolean' ]

for (const type of types) {  
  console.log(`A JavaScript type is: ${type}`)
}*/
//it cant be used with objects 
//using it with array like objects.

let employees = [
    {eid:1,ename:'prashant',ecity:'pokhara'},
    {eid:2,ename:'ram',ecity:'htd'},
    {eid:3,ename:'sushant',ecity:'bihar'},
    {eid:4,ename:'sumit',ecity:'btwl'},
    {eid:5,ename:'hari',ecity:'ktm'},

]
for(let employee of employees){
    for(let a in employee)
    {
        log(employee[a])
    }
}