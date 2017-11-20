export default function getSlotsFromAtrifactsList(artifacts) {

  const slots = [];

  artifacts.forEach(art => slots.push(art.slot));

  return slots.filter((el, i, a) => i === a.indexOf(el))
}

export function filterArtifacts(artifacts = [], filterText = "") {
  let text = filterText.toLowerCase();

  return artifacts.filter(art => {
    if (art.name.toLowerCase().includes(text)) {
      return  true;
    }

    // add true statements

    return false;
  });
}
