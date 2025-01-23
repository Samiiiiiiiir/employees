import { useState, useContext } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';

import dataContext from '../Context';

import nextId from 'react-id-generator';

import './app.scss';

const { Provider } = dataContext;

const App = () => {
  const [data, setData] = useState([
    {
      name: 'John C.',
      salary: 800,
      increase: true,
      like: true,
      id: nextId(),
    },
    {
      name: 'Alex M.',
      salary: 3000,
      increase: false,
      like: false,
      id: nextId(),
    },
    {
      name: 'Carl W.',
      salary: 15000,
      increase: false,
      like: false,
      id: nextId(),
    },
  ]);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const deleteItem = (id) => {
    const filtered = data.filter((item) => item.id !== id);
    setData(filtered);
  };

  const addItem = (name, salary) => {
    setData((old) => [
      ...old,
      { name, salary, id: nextId(), increase: false, like: false },
    ]);
  };

  const onToggleProp = (id, prop) => {
    setData((old) => {
      return old.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
    });
  };

  const searchEmp = (items, term) => {
    if (term.length === 0) return items;

    return items.filter((item) => item.name.toLowerCase().includes(term));
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.like);
      case 'salary':
        return items.filter((item) => item.salary >= 1000);
      default:
        return items;
    }
  };

  const onFilterChange = (filter) => {
    setFilter(filter);
  };

  const onSalaryChange = (id, salary) => {
    setData((old) => {
      let newArr = [...old].map((item) => {
        if (item.id === id) {
          return { ...item, salary };
        }
        return item;
      });
      return newArr;
    });
  };

  const visibleData = filterPost(searchEmp(data, term), filter);

  return (
    <Provider
      value={{
        data,
        visibleData,
        deleteItem,
        addItem,
        onToggleProp,
        onUpdateSearch,
        onFilterChange,
        onSalaryChange,
      }}
    >
      <AppInfo />
      <div className="search-panel">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter onFilterChange={onFilterChange} activeBtn={filter} />
      </div>
      <EmployeesList
        onDelete={deleteItem}
        onToggleProp={onToggleProp}
        onSalaryChange={onSalaryChange}
      />
      <EmployeesAddForm />
    </Provider>
  );
};

export default App;
