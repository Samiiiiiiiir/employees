import { Component } from 'react';

import './employees-item.scss';

class EmployeesItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salaryInp: this.props.salary,
    };
  }

  onInputChange = (e) => {
    const { onSalaryChange, id } = this.props;

    const newValue = e.target.value.slice(0, -1);

    this.setState({
      salaryInp: newValue,
    });

    onSalaryChange(id, newValue);
  };

  render() {
    const { name, salary, onDelete, onToggleProp, increase, like } = this.props;

    const { salaryInp } = this.state;

    let classes = 'list-group-item d-flex justify-content-between';

    if (increase) {
      classes += ' increase';
    }

    if (like) {
      classes += ' like';
    }

    return (
      <li className={classes}>
        <span
          onClick={() => onToggleProp('like')}
          className="list-group-item-label"
        >
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          value={salaryInp + '$'}
          onChange={this.onInputChange}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={() => onToggleProp('increase')}
            type="button"
            className="btn-cookie btn-sm "
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button
            onClick={onDelete}
            type="button"
            className="btn-trash btn-sm "
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesItem;
