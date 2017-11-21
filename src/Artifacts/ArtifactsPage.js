import React, { Component } from 'react';
import ARTIFACTS from './artifacts_list.json';
import ArtifactsTable from './ArtifactsTable';
import SearchBar from './SearchBar';



class ArtifactsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange} />
        <ArtifactsTable artifacts={ARTIFACTS} filterText={this.state.filterText} />
      </div>
    );
  }
}

export default ArtifactsPage;
