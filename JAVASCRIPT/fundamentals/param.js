let log=console.log;

function add(a=100,b=90)
{
    log('the value of a is '+a);
    log('the value of b is '+b);
}
add(10);
add(10,100); //100 will overwrite 90 which is the default value of b
add(); // prints default value