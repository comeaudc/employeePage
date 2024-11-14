import EmployeeListItem from '../EmployeeListItem/EmployeeListItem';
import { useEmployee } from '../../contexts/employeeContext';

function EmployeeList() {
  const { setCurrent, employeeList } = useEmployee();

  let list = employeeList.map((emp, i) => {
    return (
      <li
        onClick={() => {
          setCurrent(emp);
        }}
        key={i}
      >
        <EmployeeListItem age={31} employee={emp} />
      </li>
    );
  });

  return <ul>{employeeList.length > 0 ? list : <h3>Nothing to Load</h3>}</ul>;
}

export default EmployeeList;
