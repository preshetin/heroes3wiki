const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const tabletojson = require("tabletojson");
const fs = require('fs');

tabletojson.convertUrl(
  'http://heroes.thelazy.net/wiki/List_of_artifacts',
  { useFirstRowForHeadings: false, stripHtmlFromCells: false },
  function(tablesAsJson) {

    const artifacts = [];
    tablesAsJson[0].forEach( (row, index) => {
      let artifact = getArtifactFromRow(row, index + 1);
      artifacts.push(artifact);
    });

    fs.writeFileSync('../src/Artifacts/artifacts_list.json', JSON.stringify(artifacts));
    console.log('write to file successful');
  }
);

function getArtifactFromRow(row, id) {

  const name       = getName(row.Artifact);
  const image_path = getImagePath(row.Artifact);
  const cost       = getCost(row.Cost);
  const slot       = htmlToVisualText(row.Slot);
  const effect     = htmlToVisualText(row.Effect);

  return { id, name, image_path, slot, cost, effect }
}

function getName(artHtml) {
  const domForArt = new JSDOM(artHtml);
  return domForArt.window.document.getElementsByTagName('img')[0].getAttribute('alt');
}

function getImagePath(artHtml = '') {
  const domForArt = new JSDOM(artHtml);
  return domForArt.window.document.getElementsByTagName('img')[0].getAttribute('src');
}

function getCost(costHtml = '') {
  const domForCost = new JSDOM(costHtml, { pretendToBeVisual: true });
  return parseInt(domForCost.window.document.body.textContent);
}

function htmlToVisualText(html = '') {
  const domForCost = new JSDOM(html, { pretendToBeVisual: true });
  return domForCost.window.document.body.textContent;
}
