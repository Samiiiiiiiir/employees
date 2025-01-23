import { useState, useContext } from 'react';
import dataContext from '../Context';

import './employees-item.scss';

const EmployeesItem = ({ name, salary, increase, like, id }) => {
  const [salaryInp, setSalaryInp] = useState(salary);

  const { onSalaryChange, deleteItem, onToggleProp } = useContext(dataContext);

  const onInputChange = (e) => {
    const newValue = e.target.value.slice(0, -1);
    setSalaryInp(newValue);
    onSalaryChange(id, newValue);
  };

  let classes = 'list-group-item d-flex justify-content-between';

  classes += increase ? ' increase' : '';
  classes += like ? ' like' : '';

  return (
    <li className={classes}>
      <span
        onClick={() => onToggleProp(id, 'like')}
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        value={salaryInp + '$'}
        onChange={onInputChange}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => onToggleProp(id, 'increase')}
          type="button"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button
          onClick={() => deleteItem(id)}
          type="button"
          className="btn-trash btn-sm "
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesItem;
