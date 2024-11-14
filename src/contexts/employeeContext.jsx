import { createContext, useState, useContext, useReducer } from 'react';
import data from '../utilities/data.mjs';

const EmployeeContext = createContext();

export default function EmployeeProvider({ children }) {
    const [current, setCurrent] = useState(null)
    const [employeeList, setEmployeeList] = useState(data)

    let value = {
        current,
        setCurrent,

        employeeList,
        setEmployeeList
    }

  return <EmployeeContext.Provider value={value}>{children}</EmployeeContext.Provider>;
}

export function useEmployee(){
  return useContext(EmployeeContext)
}