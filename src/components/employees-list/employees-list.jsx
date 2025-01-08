import EmployeesItem from '../employees-item/employees-item';

import './employees-list.scss';

const EmployeesList = ({ data, onDelete, onToggleProp, onSalaryChange }) => {
  const elementsArray = data.map((element) => {
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
