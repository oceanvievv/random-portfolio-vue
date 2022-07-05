<template>
  <div class="hard-skills__skill">
    <div class="skill__title">{{ progressBarTitle }}</div>
    <div class="skill__progress-bar-wrapper">
      <div
        class="skill__progress-bar"
        v-bind:style="{ width: progressBarValue }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillItem",
  props: {
    progressBarTitle: String,
    progressBarValue: String,
  },
};
</script>

<style lang="scss" scoped>
@import "skill-item";
</style>
