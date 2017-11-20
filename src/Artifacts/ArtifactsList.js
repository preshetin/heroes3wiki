import React, { Component } from 'react';
import Artifact from './Artifact.js';

class ArtifactsList extends Component {
  render() {
    return (
        <div>
          {this.props.artifacts.map(artifact => <Artifact artifact={artifact} /> )}
        </div>
    );
  }
}

export default ArtifactsList;
