import { useState } from 'react';

import './employees-add-form.scss';

const EmployeesAddForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const onValueChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'salary') {
      setSalary(e.target.value);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim().length >= 3 &&
      salary.trim().length > 0 &&
      typeof +salary === 'number' &&
      !Number.isNaN(salary)
    ) {
      onAdd(name, salary);
      setName('');
      setSalary('');
    } else {
      console.log('Enter data');
    }
  };

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form onSubmit={onFormSubmit} className="add-form d-flex">
        <input
          onChange={onValueChange}
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          name="name"
          value={name}
        />
        <input
          onChange={onValueChange}
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          name="salary"
          value={salary}
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
