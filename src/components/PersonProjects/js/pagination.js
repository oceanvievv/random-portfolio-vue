class Paginator {
  constructor(allProjects) {
    this.allProjects = allProjects;
    this.projectsCount = this.allProjects.length;
    this.pages = this.generatePages(this.allProjects);
    this.state = {
      currPage: 1,
    };
    this.state.currItems = this.currItems;
  }

  get currPage() {
    return this.state.currPage;
  }

  set currPage(page) {
    this.state.currPage = page;
  }

  generatePages(projects) {
    const pages = [];
    const pagesCount = Math.ceil(projects.length / 3);
    const itemsPerPage = 3;

    for (let i = 0; i < pagesCount; i++) {
      const start = i * itemsPerPage;
      const end = start + itemsPerPage;

      pages.push(projects.slice(start, end));
    }

    return pages;
  }

  get currItems() {
    return this.pages[this.currPage - 1];
  }

  updateAllProjects(newProjects) {
    this.projectsCount = newProjects.length;
    this.pages = this.generatePages(newProjects);
    this.state.currPage = 1;
  }
}

export default Paginator;
