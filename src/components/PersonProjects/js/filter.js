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
    this.allProjects = allProjects;
  }

  checkAvailability(arr, val) {
    return arr.some((arrVal) => val === arrVal);
  }

  getFilteredProjects(filters = []) {
    const filteredProjects = this.allProjects.filter((item) => {
      const itemTags = getAllTags([item]);

      for (let i = 0; i < filters.length; i++) {
        if (this.checkAvailability(itemTags, filters[i])) return true;
      }
    });

    return filteredProjects.length > 0 ? filteredProjects : [];
  }
}

export default Filterator;
