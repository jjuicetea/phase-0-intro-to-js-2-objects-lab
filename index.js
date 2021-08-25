const employee = {

};

function updateEmployeeWithKeyAndValue(employee, k, v) {
    const inlineE = {...employee};
    inlineE[k] = v;
    return inlineE;
}


function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function  deleteFromEmployeeByKey(employee, key) {
    const inlineE = {...employee};
    delete inlineE[key];
    return inlineE;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;

}