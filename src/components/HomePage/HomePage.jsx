import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import EmployeeList from '../EmployeeList/EmployeeList';

function HomePage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default HomePage;
