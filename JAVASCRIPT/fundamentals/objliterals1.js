const log = console.log


function createPerson(fname,lname){
    let fullname = fname+' '+lname;
    return {
        fname,
        lname,
        fullname,

        isSenior : function(age)
        {
            return age>55;
        }
    }
}
let p1= createPerson('prashant','gurung');
log(p1)

log(`is senior? ${p1.isSenior(20)}`)