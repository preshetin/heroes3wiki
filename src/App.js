import React, { Component } from 'react';
import ArtifactsPage from './Artifacts/ArtifactsPage';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Heroes3 Wiki</h1>
        </header>
        <ArtifactsPage />
      </div>
    );
  }
}

export default App;
