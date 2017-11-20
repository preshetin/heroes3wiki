import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
      <input type="text" value={this.props.filterText} />
    );
  }
}

export default SearchBar;
