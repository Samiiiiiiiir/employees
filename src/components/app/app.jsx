import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';

import nextId from 'react-id-generator';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
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
      ],
      term: '',
      filter: 'all',
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    this.setState(({ data }) => {
      const newArr = [...data];
      newArr.push({ name, salary, id: nextId(), increase: false, like: false });

      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) return items;

    return items.filter((item) => item.name.toLowerCase().includes(term));
  };

  onUpdateSearch = (term) => {
    this.setState({
      term,
    });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.like);
      case 'salary':
        return items.filter((item) => item.salary >= 1000);
      default:
        return items;
    }
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  onSalaryChange = (id, salary) => {
    this.setState((state) => {
      let newArr = [...state.data].map((item) => {
        if (item.id === id) {
          return { ...item, salary };
        }
        return item;
      });

      return {
        data: newArr,
      };
    });
  };

  render() {
    const { data, term, filter } = this.state;

    const employees = data.length,
      increasedEmployees = data.filter(({ increase }) => increase).length;

    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <>
        <AppInfo total={employees} increased={increasedEmployees} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onFilterChange={this.onFilterChange} activeBtn={filter} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onSalaryChange={this.onSalaryChange}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </>
    );
  }
}

export default App;
