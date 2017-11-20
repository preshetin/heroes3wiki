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
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} />
        <ArtifactsTable artifacts={ARTIFACTS} filterText={this.state.filterText}/>
      </div>
    );
  }
}

export default ArtifactsPage;
