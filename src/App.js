import React, { Component } from 'react';
import FilteredArtifactsBlock from './Artifacts/FilteredArtifactsBlock';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Heroes 3 Wiki</h1>
        </header>
        <FilteredArtifactsBlock />
      </div>
    );
  }
}

export default App;
