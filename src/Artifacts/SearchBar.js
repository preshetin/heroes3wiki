import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <input type="text" value={this.props.filterText} onChange={this.handleFilterTextChange} />
    );
  }
}

export default SearchBar;
