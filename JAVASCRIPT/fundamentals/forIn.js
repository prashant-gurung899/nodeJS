const log = console.log
let employeeNames =['prashant', 'anushka' ,'pratik', 'swapnil'] //array
log(`Displaying array values using For..in loop`)
for(let e in employeeNames)
{
    log(`${e} : ${employeeNames[e]}`)
}
//object
let employee = {
    eid:1,
    ename:'prashant',
    ecity:'pokhara'
}
log(`Displaying object values using For..in loop`)
for(let a in employee)
{
    log(`${a} : ${employee[a]}`)
}