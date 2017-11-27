import React, { Component } from 'react';
import getSlotsFromAtrifactsList, { filterArtifacts } from './util.js';
import TitleRow from '../TitleRow'
import ArtifactsList from './ArtifactsList'

class ArtifactsBlock extends Component {
  render() {

    const rows = [];
    const filteredArtifacts = filterArtifacts(this.props.artifacts, this.props.filterText);
    const slotsList = getSlotsFromAtrifactsList(filteredArtifacts);

    slotsList.forEach((slot, key) => {

      let artifacts = filteredArtifacts.filter(art => art.slot === slot);

      rows.push(
        <div key={key} >
          <TitleRow name={slot} />
          <ArtifactsList artifacts={artifacts} />
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

export default ArtifactsBlock;
