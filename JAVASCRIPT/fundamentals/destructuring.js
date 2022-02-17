const log = console.log
//for array
let cities=['pokkhara','delhi','ktm'] 

let [c1,c2,c3,c4='bihar'] = cities; //destructuring array

//log(c1)
//log(c2)
//log(c3)
//log(c4)

//for object

let person ={
    fname: 'prashant',
    lname:'gurung',
    email:'prashant@gmail.com',
    age:24
    //gender:'male'
}
//traditional way
/*let firstname = person.fname;
let lastname = person.lname;
let gender = person.gender; */
let {fname,lname:ln,gender='male',...data} = person; //the property names should match (lname as ln)

log(fname)
log(ln) //lname as ln
log(gender)
log(data)