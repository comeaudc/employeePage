import Header from '../Header/Header';
import { useEmployee } from '../../contexts/employeeContext';

function EmployeePage() {
  const { current } = useEmployee();

  return (
    <div>
      <Header />
      {current ? (
        <h1>
          {current.firstName} {current.lastName}
        </h1>
      ) : (
        <h2>No Employee Selected</h2>
      )}
    </div>
  );
}

export default EmployeePage;
