<template>
  <div class="projects-section-wrapper">
    <div class="projects-nav">
      <div class="projects-nav__title">Projects ({{ projectsCount }})</div>
      <div class="projects-nav__filters-wrapper">
        <div
          class="projects-nav__filter"
          v-for="(tag, idx) in uniqueTags"
          :key="idx"
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
          <div class="project__tags">
            <div
              class="project__tag"
              v-for="(tag, idx) in addHashToTag(project.tags)"
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
    <div class="projects-pagination" v-if="projectsCount > 3">
      <div class="projects-pagination__controls">
        <div
          class="projects-pagination__page-control-wrapper projects-pagination__page-control-wrapper_left"
        >
          <PersonProjectsPaginationArrow
            @click="updateCurrItems(this.pagination.currPage - 1)"
          />
        </div>
        <div
          class="projects-pagination__page-control-wrapper"
          v-for="idx in Math.ceil(projectsCount / 3)"
          :key="idx"
          :class="{ active: colorPageButton(idx) }"
          @click="updateCurrItems(idx)"
        >
          {{ idx }}
        </div>
        <div class="projects-pagination__page-control-wrapper">
          <PersonProjectsPaginationArrow />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProjects } from "@/api";
import {
  addHashToTag,
  getUniqueTags,
} from "@/components/PersonProjects/js/filter";
import PersonProjectsPaginationArrow from "@/components/PersonProjects/elements/PersonProjectsPaginationArrow";
import Paginator from "@/components/PersonProjects/js/pagination";

export default {
  name: "PersonProjects1",
  components: { PersonProjectsPaginationArrow },
  data() {
    return {
      pagination: {},
      projectsCount: 0,
      uniqueTags: [],
      currItems: [],
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

      this.uniqueTags = getUniqueTags(response.projects);
      this.pagination = new Paginator(response.projects);
      this.projectsCount = this.pagination.projectsCount;
      this.currItems = this.pagination.currItems;
    },
    addHashToTag,
    updateCurrItems(page) {
      this.pagination.currPage = page;
      this.currItems = this.pagination.getCurrItems();
    },
    colorPageButton(page) {
      return page === this.pagination.currPage;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "css/projects";
</style>
