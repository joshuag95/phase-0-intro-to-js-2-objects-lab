const employee = {
   name: "Josh",
    address: "Nightingale"}

    function updateEmployeeWithKeyAndValue(obj, key, value){
       const newEmployee = {...employee}; 
       newEmployee[key] = value;
       return newEmployee
    }
    const newEmployee = updateEmployeeWithKeyAndValue(
        employee,
        "name",
        "Sam"
    );
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee[key] = value;

    return employee;}
function deleteFromEmployeeByKey(obj, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    delete employee[key]
    return employee
}