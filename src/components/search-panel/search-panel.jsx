import { Component } from 'react';

import './search-panel.scss';

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  onValueChange = (e) => {
    const term = e.target.value;
    this.setState({
      term,
    });

    this.props.onUpdate(term);
  };

  render() {
    const { term } = this.state;

    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Найти сотрудника"
        name="test"
        id="test"
        value={term}
        onChange={this.onValueChange}
      />
    );
  }
}

export default SearchPanel;
