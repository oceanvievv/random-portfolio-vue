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
    <div class="projects-wrapper" v-if="projectsCount > 0">
      <div
        class="project-wrapper bottom-middle-shadow"
        v-for="(project, idx) in currItems"
        :ref="idx === 0 ? 'first' : null"
        :key="idx"
      >
        <div class="project__image-wrapper">
          <img v-bind:src="project.imgLink" v-bind:alt="project.title" />
        </div>
        <div class="project__info">
          <div class="project__tags">
            <div
              class="project__tag"
              v-for="(tag, idx) in addHashToTags(project.tags)"
              :key="idx"
            >
              {{ tag }}
            </div>
          </div>
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
    <div
      class="projects-wrapper_empty"
      v-if="(projectsCount === 0) & (isLoading === false)"
    >
      Nothing found :(
    </div>
    <div
      class="projects-wrapper_loading"
      v-if="(projectsCount === 0) & (isLoading === true)"
    >
      <AppLoader />
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
import AppLoader from "@/components/Base/AppLoader";

export default {
  name: "PersonProjects",
  components: { AppLoader, PersonProjectsPaginationArrow },
  data() {
    return {
      isLoading: true,
      allProjects: [],
      projectsCount: 0,
      currPage: 1,
      currItems: [],
      currFilters: [],
      uniqueTags: [],
    };
  },
  created() {
    setTimeout(() => {
      this.getProjects().then(() => (this.isLoading = false));
    }, 1000);
  },
  methods: {
    async getProjects() {
      this.isLoading = true;
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
    resetAll() {
      this.currPage = 1;
      this.pagination.currPage = 1;
      this.pagination.updateAllProjects(this.allProjects);
      this.currItems = this.pagination.currItems;
      this.updateProjectsCount();
    },
    handleArrowControls(action) {
      const currPage = this.currPage;

      if (action === "prev" && currPage !== 1) {
        this.currPage--;
        this.pagination.currPage--;
        this.currItems = this.pagination.currItems;
        this.scrollToElement();
      } else if (action === "next" && currPage !== this.pagesCount) {
        this.currPage++;
        this.pagination.currPage++;
        this.currItems = this.pagination.currItems;
        this.scrollToElement();
      }
    },
    colorPageButton(page) {
      return page === this.pagination.currPage;
    },
    handleFilterAction(filter) {
      if (!this.currFilters.includes(filter)) {
        this.currFilters.push(filter);
      } else {
        const idx = this.currFilters.indexOf(filter);
        this.currFilters.splice(idx, 1);

        if (this.currFilters.length === 0) {
          this.updateCurrItems(this.pagination.currPage);
          this.resetAll();
          return;
        }
      }

      this.pagination.updateAllProjects(
        this.filterator.getFilteredProjects(this.currFilters)
      );
      this.updateCurrItems(this.pagination.currPage);
      this.updateProjectsCount();
    },
    updateProjectsCount() {
      this.projectsCount = this.pagination.projectsCount;
    },
    addHashToTags(tags) {
      return tags.split(", ").map((tag) => "#" + tag);
    },
    scrollToElement() {
      const [el] = this.$refs.first;
      console.log(el);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "css/projects";
</style>
