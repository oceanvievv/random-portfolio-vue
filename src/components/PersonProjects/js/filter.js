export function getUniqueTags(projects) {
  const allTags = getAllTags(projects);

  return allTags.filter((v, i, a) => a.indexOf(v) === i);
}

export function getAllTags(projects) {
  const allTags = [];

  for (let i = 0; i < projects.length; i++) {
    allTags.push(...projects[i].tags.replaceAll(" ", "").split(","));
  }

  return allTags;
}

class Filterator {
  constructor(uniqueTags, allProjects) {
    this.uniqueTags = uniqueTags;
    this.hashedTags = this.addHashToTag(uniqueTags);
    this.allProjects = allProjects;
  }

  addHashToTag(tags) {
    return tags.map((tag) => "#" + tag);
  }

  filterProjects(filter) {
    console.log(this.allProjects);
    console.log(filter);
  }
}

export default Filterator;
