<template>
  <div class="projects-section-wrapper">
    <div class="projects-nav">
      <div class="projects-nav__title">Projects</div>
    </div>
  </div>
</template>

<script>
import { fetchProjects } from "@/api";

export default {
  name: "PersonProjects",
  data() {
    return {
      projects: fetchProjects(),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "css/projects";
</style>
