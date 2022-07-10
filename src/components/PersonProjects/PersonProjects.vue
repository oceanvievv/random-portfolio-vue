<template>
  <div class="projects-section-wrapper">
    <div class="projects-nav">
      <div class="projects-nav__title">Projects ({{ projects.length }})</div>
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
        v-for="(project, idx) in projects"
        :key="idx"
      >
        <div class="project__image-wrapper">
          <img v-bind:src="project.imgLink" v-bind:alt="project.title" />
        </div>
        <div class="project__info">
          <div class="project__tags">
            <div
              class="project__tag"
              v-for="(tag, idx) in addLaticeToTag(project.tags)"
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
  </div>
</template>

<script>
import { fetchProjects } from "@/api";
import { getUniqueTags } from "@/components/PersonProjects/js/tags";
import { addLaticeToTag } from "@/components/PersonProjects/js/tags";

export default {
  name: "PersonProjects",
  data() {
    return {
      projects: [],
      uniqueTags: null,
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

      this.projects = response.projects;
      // TODO: remove this line
      this.projects.splice(3);
      this.uniqueTags = getUniqueTags(this.projects);
    },
    addLaticeToTag,
  },
};
</script>

<style lang="scss" scoped>
@import "css/projects";
</style>
