let log=console.log
// add(10,10);
// this gives error because function expressions are not hoisted
let add = function(n1,n2){ //function expression
    result = n1+n2;
    log('result is '+result);
}
add(10,3000); //function calling using add variable