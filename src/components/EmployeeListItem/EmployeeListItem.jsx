function EmployeeListItem({ employee, age }) {

  return (
    <>
      <h3>{employee.firstName + ' ' + employee.lastName}</h3>
      <p>{employee.jobTitle}</p>
      <p>{age}</p>
    </>
  );
}

export default EmployeeListItem;
