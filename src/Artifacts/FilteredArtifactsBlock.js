import React, { Component } from 'react';
import ARTIFACTS from './artifacts_list.json';
import ArtifactsBlock from './ArtifactsBlock';
import FilterBar from './FilterBar';

class FilteredArtifactsBlock extends Component {

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
        <FilterBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange} />
        <ArtifactsBlock artifacts={ARTIFACTS} filterText={this.state.filterText} />
      </div>
    );
  }
}

export default FilteredArtifactsBlock;
