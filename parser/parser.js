const tabletojson = require("tabletojson");
const fs = require('fs');
const repository = require('./repository.js');

const items = ['Artifacts', 'Spells'];

tabletojson.convertUrl(
  'http://heroes.thelazy.net/wiki/List_of_artifacts',
  { useFirstRowForHeadings: false, stripHtmlFromCells: false },
  function(tablesAsJson) {

    const artifacts = [];
    tablesAsJson[0].forEach( (row, index) => {

      let artifact = repository.getArtifactFromRow(row, index + 1);

      artifacts.push(artifact);
    });

    fs.writeFileSync('../src/Artifacts/artifacts_list.json', JSON.stringify(artifacts));
    console.log('Write to file successful!');
  }
);
