const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const request = require('sync-request');

function getArtifactFromRow(row, id) {

  const name       = getName(row.Artifact);
  const image_path = getImagePath(row.Artifact);
  const cost       = htmlToInt(row.Cost);
  const slot       = htmlToVisualText(row.Slot);
  const class_type = htmlToVisualText(row.Class);
  const effect     = htmlToVisualText(row.Effect);

  return { id, name, image_path, slot, class_type, cost, effect };
}

function getSpellFromRow(row, id) {

  const name       = getName(row.Name);
  const image_path = getImagePath(row.Name);
  const level      = htmlToInt(row.Level);
  const class_type = htmlToVisualText(row.Class);
  const effect     = htmlToVisualText(row.Effect);

  return { id, name, image_path, level, class_type, effect }
}

function getCreatureFromRow(row, id) {

  const name       = getName(row.Name);
  const image_path = getCreatureImagePath(row.Name);
  const town       = htmlToVisualText(row.Town);
  const level      = htmlToInt(row.Lvl);
  const attack     = htmlToInt(row.Att);
  const defence    = htmlToInt(row.Def);
  const damage_min = htmlToInt(row.Dmin);
  const damage_max = htmlToInt(row.Dmax);
  const hp         = htmlToInt(row.HP);
  const speed      = htmlToInt(row.Spd);
  const special    = htmlToVisualText(row.Special);

  return { id, name, image_path, town, level, attack, defence, damage_min, damage_max, hp, speed, special };
}


function getName(html = '') {
  const jsDom = new JSDOM(html);
  return jsDom.window.document.getElementsByTagName('img')[0].getAttribute('alt');
}

function getImagePath(artHtml = '') {
  const domForArt = new JSDOM(artHtml);
  return domForArt.window.document.getElementsByTagName('img')[0].getAttribute('src');
}

function getCreatureImagePath(html = '') {

  let creatureName = getName(html);

  switch (creatureName) {
    case 'Diamond Golem':
      creatureName = 'Diamondgolem';
      break;
    case 'Crystal Dragon':
      creatureName = 'Crystaldragon';
      break;
    default:
      break;
  }

  const imageUrl = `http://heroes.thelazy.net/wiki/File:Creature_${creatureName}.gif`;

  const res = request('GET', imageUrl);

  let creatureHtml =  res.getBody();
  let jsDom = new JSDOM(creatureHtml);

  const creaturePath = jsDom.window.document.getElementById("file").getElementsByTagName("a")[0].getAttribute('href');
  console.log(creaturePath);

  return creaturePath;
}

function htmlToInt(costHtml = '') {
  const domForCost = new JSDOM(costHtml, { pretendToBeVisual: true });
  return parseInt(domForCost.window.document.body.textContent);
}

function htmlToVisualText(html = '') {
  const domForCost = new JSDOM(html, { pretendToBeVisual: true });
  return domForCost.window.document.body.textContent.trim();
}

module.exports = {
  artifactsUrl: 'http://heroes.thelazy.net/wiki/List_of_artifacts',
  getArtifactFromRow,
  spellsUrl: 'http://heroes.thelazy.net/wiki/List_of_spells',
  getSpellFromRow,
  creaturesUrl: 'http://heroes.thelazy.net/wiki/List_of_creatures',
  getCreatureFromRow
};
