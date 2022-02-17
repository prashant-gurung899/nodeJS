let data = require('./node1');
console.log(data.a)
console.log(data.add(10,20))
console.log(data.employee.eid)
console.log(data.employee.ename)

//empoyee object property after modification
data.employee.eid=2;
data.employee.ename='ram'
console.log('after modification')
console.log(data.employee.eid)
console.log(data.employee.ename)