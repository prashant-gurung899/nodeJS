let log = console.log;

function displayEmployeeNames(title,...employeNames)
{
    log(title);

    for(let employeName of employeNames)
    {
        log(employeName);
    }
}

const title = 'Displaying employee names';

let employeNames=['prashant','anushka','sagar','sujan'];

displayEmployeeNames(title,... employeNames);