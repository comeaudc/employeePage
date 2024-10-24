import EmployeeListItem from '../EmployeeListItem/EmployeeListItem';
import employeeList from '../../utilities/data.mjs';

function EmployeeList() {
    
  let list = employeeList.map((emp) => {
    return <EmployeeListItem employee={emp} />;
  });

  return (
    <ul>
      {list}
    </ul>
  );
}

export default EmployeeList;
