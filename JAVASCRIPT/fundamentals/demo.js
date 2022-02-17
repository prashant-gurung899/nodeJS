function greet(name)
{
    if(name=='prashant')
    {
        msg='welcome ' +name;
    }
    else{
        msg='hello guest';
    }
    console.log(msg);
    var msg; // hoisted
}
greet('prashant1');