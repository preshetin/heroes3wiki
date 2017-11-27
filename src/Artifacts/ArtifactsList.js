import React from 'react'
import Artifact from './Artifact'

class ArtifactsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.artifacts.map(art => <Artifact artifact={art} key={art.id} /> )}
      </div>
    );
  }
}


export default ArtifactsList
