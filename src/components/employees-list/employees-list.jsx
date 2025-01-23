import { useContext } from 'react';

import EmployeesItem from '../employees-item/employees-item';

import dataContext from '../Context';

import './employees-list.scss';

const EmployeesList = ({ onDelete, onToggleProp, onSalaryChange }) => {
  const { visibleData } = useContext(dataContext);
  /* .filter() */
  const elementsArray = visibleData.map((element) => {
    const { id, salary, name, increase, like } = element;
    return (
      <EmployeesItem
        key={id}
        name={name}
        salary={salary}
        onDelete={() => onDelete(id)}
        onToggleProp={(prop) => onToggleProp(id, prop)}
        increase={increase}
        like={like}
        id={id}
        onSalaryChange={onSalaryChange}
      />
    );
  });

  return <ul className="app-list list-group">{elementsArray}</ul>;
};

export default EmployeesList;
