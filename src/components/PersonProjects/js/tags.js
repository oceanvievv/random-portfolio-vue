export function getUniqueTags(projects) {
  const allTags = getAllTags(projects);

  return allTags.filter((v, i, a) => a.indexOf(v) === i);
}

export function addLaticeToTag(tags) {
  const splittedTags = tags.split(", ");

  return splittedTags.map((tag) => "#" + tag);
}

function getAllTags(projects) {
  const allTags = [];

  for (let i = 0; i < projects.length; i++) {
    allTags.push(...projects[i].tags.replaceAll(" ", "").split(","));
  }

  return allTags;
}
