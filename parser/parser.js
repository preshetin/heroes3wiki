const tabletojson = require("tabletojson");
const fs = require('fs');
const repository = require('./repository.js');

const items = ['Artifacts', 'Spells', 'Creatures'];

items.forEach(item => {

  let url = '';
  let getRow;

  switch (item) {
    case 'Artifacts':
      url    = repository.artifactsUrl;
      getRow = repository.getArtifactFromRow;
      break;
    case 'Spells':
      url    = repository.spellsUrl;
      getRow = repository.getSpellFromRow;
      break;
    case 'Creatures':
      url    = repository.creaturesUrl;
      getRow = repository.getCreatureFromRow;
      break;
    default:
      break;
  }

  tabletojson.convertUrl(
    url,
    { useFirstRowForHeadings: false, stripHtmlFromCells: false },
    function(tablesAsJson) {

      let resultObjects = [];
      tablesAsJson[0].forEach( (row, index) => {

        let resultObject = getRow(row, index + 1);
        resultObjects.push(resultObject);
      });

      fs.writeFile(`src/${item}/${item.toLowerCase()}_list.json`, JSON.stringify(resultObjects), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    }
  );
});
