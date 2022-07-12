<template>
  <div class="projects-section-wrapper">
    <div class="projects-nav">
      <div class="projects-nav__title">Projects ({{ projectsCount }})</div>
      <div class="projects-nav__filters-wrapper">
        <div
          :class="{ active: currFilters.includes(tag) }"
          class="projects-nav__filter"
          v-for="(tag, idx) in uniqueTags"
          :key="idx"
          @click="handleFilterAction(tag)"
        >
          {{ tag }}
        </div>
      </div>
    </div>
    <div class="projects-wrapper">
      <div
        class="project-wrapper bottom-middle-shadow"
        v-for="(project, idx) in currItems"
        :key="idx"
      >
        <div class="project__image-wrapper">
          <img v-bind:src="project.imgLink" v-bind:alt="project.title" />
        </div>
        <div class="project__info">
          <!-- TODO: Bring back project's tags -->
          <div class="project__title">{{ project.title }}</div>
          <div class="project__descr">{{ project.descr }}</div>
          <div class="project__links">
            <a
              :href="project.demoLink"
              target="_blank"
              class="project__link-button colored"
              >Demo</a
            >
            <a
              :href="project.codeLink"
              target="_blank"
              class="project__link-button not-colored"
              >Code</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="projects-pagination" v-if="projectsCount > 3">
      <div class="projects-pagination__controls">
        <div
          :class="{ disabled: this.currPage === 1 }"
          class="projects-pagination__page-control-wrapper projects-pagination__page-control-wrapper_left"
          @click="handleArrowControls('prev')"
        >
          <PersonProjectsPaginationArrow />
        </div>
        <div
          class="projects-pagination__page-control-wrapper"
          v-for="idx in pagesCount"
          :key="idx"
          :class="{ active: colorPageButton(idx) }"
          @click="updateCurrItems(idx)"
        >
          {{ idx }}
        </div>
        <div
          :class="{ disabled: this.currPage === this.pagesCount }"
          class="projects-pagination__page-control-wrapper"
          @click="handleArrowControls('next')"
        >
          <PersonProjectsPaginationArrow />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// API
import { fetchProjects } from "@/api";

// Helpers
import Paginator from "@/components/PersonProjects/js/pagination";
import Filterator, {
  getUniqueTags,
} from "@/components/PersonProjects/js/filter";

// Components
import PersonProjectsPaginationArrow from "@/components/PersonProjects/elements/PersonProjectsPaginationArrow";

export default {
  name: "PersonProjects",
  components: { PersonProjectsPaginationArrow },
  data() {
    return {
      allProjects: [],
      projectsCount: 0,
      currPage: 1,
      currItems: [],
      currFilters: [],
      uniqueTags: [],
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      let response;

      try {
        response = await fetchProjects();
      } catch (e) {
        console.error(e);
      }

      this.allProjects = response.projects;
      this.uniqueTags = getUniqueTags(response.projects);
      this.uniqueTags.push("React");
      this.filterator = new Filterator(this.uniqueTags, response.projects);
      this.hashedTags = this.filterator.hashedTags;
      this.pagination = new Paginator(response.projects);
      this.projectsCount = this.pagination.projectsCount;
      this.pagesCount = Math.ceil(this.projectsCount / 3);
      this.currPage = this.pagination.currPage;
      this.currItems = this.pagination.currItems;
    },
    updateCurrItems(page) {
      this.currPage = page;
      this.pagination.currPage = page;
      this.currItems = this.pagination.currItems;
    },
    handleArrowControls(action) {
      const currPage = this.currPage;

      if (action === "prev" && currPage !== 1) {
        this.currPage--;
        this.pagination.currPage--;
        this.currItems = this.pagination.currItems;
      } else if (action === "next" && currPage !== this.pagesCount) {
        this.currPage++;
        this.pagination.currPage++;
        this.currItems = this.pagination.currItems;
      }
    },
    colorPageButton(page) {
      return page === this.pagination.currPage;
    },
    // filterProjects(filter) {
    //   this.handleFilterAction(filter);
    //
    //   console.log("Currently applied filters: ", this.currFilters);
    //
    //   const filteredProjects = [];
    //
    //   for (let i = 0; i < this.allProjects.length; i++) {
    //     if (this.allProjects[i].tags.includes(filter))
    //       filteredProjects.push(this.allProjects[i]);
    //   }
    //
    //   console.log("Filtered projects: ", filteredProjects);
    //
    //   this.pagination.updateAllProjects(filteredProjects);
    //   this.projectsCount = this.pagination.projectsCount;
    //   this.currItems = this.pagination.currItems;
    // },
    handleFilterAction(filter) {
      if (!this.currFilters.includes(filter)) {
        this.currFilters.push(filter);
      } else {
        const idx = this.currFilters.indexOf(filter);
        this.currFilters.splice(idx, 1);
      }

      console.log("Currently applied filters: ", this.currFilters);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "css/projects";
</style>
