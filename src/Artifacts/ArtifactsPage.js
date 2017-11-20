import React, { Component } from 'react';
import ARTIFACTS from './artifacts_list.json';
import ArtifactsList from './ArtifactsList';

class SearchBar extends Component {
  render() {
    return (
      <input type="text" value="" />
    );
  }
}

class ArtifactsPage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ArtifactsList artifacts={ARTIFACTS} />
      </div>
    );
  }
}

export default ArtifactsPage;
