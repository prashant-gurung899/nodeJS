const log = console.log

let employee= {
    eid:1,
    ename:'prashant',
    ecity:'pokhara',
    emails:['prashant@gmail.com','anushka@gmail.com'],
     /* isSenior : function(experience)
    {
        return experience>=5;
    } */
    isSenior : (experience) => experience>=5,
    address:{
        tole:'gharipatan',
        wardno:7,
    }
  
}
//log(employee)
log(`Employee id : ${employee.eid}`)
log(`Employee name : ${employee.ename}`)
log(`Employee city : ${employee.ecity}`)
log(`Employee emails : ${employee.emails}`)
log(`Is Employee senior : ${employee.isSenior(6)}`)

log(`employee address`)

log(`employee tole : ${employee.address.tole}`)
log(`employee wardno : ${employee.address.wardno}`)