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
    this.setState({ filterText });
  }

  render() {
    return (
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-one-quarter">
              <FilterBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange} />
            </div>
            <div class="column">
              <ArtifactsBlock artifacts={ARTIFACTS} filterText={this.state.filterText} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FilteredArtifactsBlock;
