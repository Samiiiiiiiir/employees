import { useContext } from 'react';

import EmployeesItem from '../employees-item/employees-item';

import dataContext from '../Context';

import './employees-list.scss';

const EmployeesList = () => {
  const { visibleData } = useContext(dataContext);

  const elementsArray = visibleData.map((element) => {
    const { id, salary, name, increase, like } = element;
    return (
      <EmployeesItem
        key={id}
        name={name}
        salary={salary}
        increase={increase}
        like={like}
        id={id}
      />
    );
  });

  return <ul className="app-list list-group">{elementsArray}</ul>;
};

export default EmployeesList;
