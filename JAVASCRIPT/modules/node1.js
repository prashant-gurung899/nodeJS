let a=50;
let add=(a,b)=>a+b;
let eid=1;
let ename="prashant"

let employee={
    eid,
    ename
}
module.exports={
    a:a,
    add:add,
    employee:employee
}

/*module.exports.a=50;
module.exports.add=(a,b)=>a+b;

module.exports.employee={
     eid:1,
     ename:'prashant'
 }*/

// individual exporting method 
/*module.exports.a=a;
module.exports.add=add;
module.exports.employee=employee;*/