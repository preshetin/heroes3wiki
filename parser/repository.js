const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function getArtifactFromRow(row, id) {

  const name       = getName(row.Artifact);
  const image_path = getImagePath(row.Artifact);
  const cost       = getCost(row.Cost);
  const slot       = htmlToVisualText(row.Slot);
  const class_type = htmlToVisualText(row.Class);
  const effect     = htmlToVisualText(row.Effect);

  return { id, name, image_path, slot, class_type, cost, effect }
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

module.exports = {
    getArtifactFromRow
};
