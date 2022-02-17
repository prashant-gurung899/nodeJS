let log=console.log;

let mul = function multiplication(n1,n2){ //named function expression
    let result=n1*n2; 
    log('result is '+result);
}
mul(10,10) 
//multiplication(10,10)  
// this gives error because the scope is within the function itself and cant be accessed anywhere
//mul should be used to call the function