// Write your solution in this file!

const employee = {
  name: 'Grace',
  streetAddress: 'Main St'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let obj = {
    ...employee,
    [key]: undefined,
  }
  delete obj.key;
  return obj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
