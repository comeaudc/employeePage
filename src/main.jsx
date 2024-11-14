import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import EmployeeProvider from './contexts/employeeContext.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </StrictMode>
);
