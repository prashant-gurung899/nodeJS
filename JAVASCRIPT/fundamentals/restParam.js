let log=console.log;

/* function displayEmployeeNames(title, employeNames)
{
    log(title);   
    log(employeNames);
}
const title = 'Displaying employee names';

displayEmployeeNames(title,'prashant');
displayEmployeeNames(title,'prashant','sagar'); */
 // passing two values wont work so we must use rest paramaters as follow
function displayEmployeeNames(title,... employeNames)
{
    log(title);   
   // log(typeof employeNames);
    //log(Array.isArray(employeNames));
    //using for loop
    for(let employeName of employeNames)
    {
        log(employeName);
    }
}
const title = 'Displaying employee names';

displayEmployeeNames(title,'prashant');
displayEmployeeNames(title,'prashant','sagar'); 