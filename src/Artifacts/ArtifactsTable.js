import React, { Component } from 'react';
import Artifact from './Artifact.js';
import getSlotsFromAtrifactsList, { filterArtifacts } from './util.js';



class SlotRow extends Component {
  render() {
    return <h2>{this.props.name}</h2>;
  }
}

class AtrifactsList extends Component {
  render() {
    return (
      <div>
        {this.props.artifacts.map(art => <Artifact artifact={art} key={art.id} /> )}
      </div>
    );
  }
}

class ArtifactsTable extends Component {
  render() {

    const rows = [];
    const filteredArtifacts = filterArtifacts(this.props.artifacts, this.props.filterText);
    const slotsList = getSlotsFromAtrifactsList(filteredArtifacts);

    slotsList.forEach((slot, key) => {

      let artifacts = filteredArtifacts.filter(art => art.slot === slot);

      rows.push(
        <div key={key} >
          <SlotRow name={slot} />
          <AtrifactsList artifacts={artifacts} />
        </div>
      );
    });

    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default ArtifactsTable;
