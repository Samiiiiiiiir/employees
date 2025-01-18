import { useState } from 'react';

import './search-panel.scss';

const SearchPanel = ({ onUpdateSearch }) => {
  const [term, setTerm] = useState('');

  const onValueChange = (e) => {
    setTerm(e.target.value);
    onUpdateSearch(e.target.value);
  };

  return (
    <input
      className="form-control search-input"
      type="text"
      placeholder="Найти сотрудника"
      name="test"
      id="test"
      value={term}
      onChange={onValueChange}
    />
  );
};

export default SearchPanel;
