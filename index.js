const employee = {name: 'Sam'};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}

const streetAddress = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}

    newEmployee[key] = undefined

    return newEmployee
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {

    employee[key] = undefined

    return employee
}



