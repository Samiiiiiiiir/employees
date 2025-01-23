import { useContext } from 'react';
import dataContext from '../Context';

import './app-filter.scss';

const AppFilter = ({ activeBtn }) => {
  const btnsData = [
    { label: 'Все сотрудники', name: 'all' },
    { label: 'На повышение', name: 'rise' },
    { label: 'ЗП выше 1000$', name: 'salary' },
  ];

  const { onFilterChange } = useContext(dataContext);

  const buttons = btnsData.map(({ label, name }) => {
    return (
      <button
        className={
          name === activeBtn ? 'btn btn-light' : 'btn btn-outline-light'
        }
        type="button"
        key={name}
        onClick={() => onFilterChange(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
