<template>
  <div class="hard-skills-wrapper bottom-middle-shadow">
    <div class="hard-skills__title">FRONT END</div>
    <div class="hard-skills-list-wrapper">
      <SkillItem
        v-for="(skill, idx) in skills"
        :key="idx"
        v-bind:progress-bar-title="skill.title"
        v-bind:progress-bar-value="skill.value"
      ></SkillItem>
    </div>
  </div>
</template>

<script>
import SkillItem from "@/components/PersonHardSkills/SkillItem";

export default {
  name: "PersonHardSkills",
  components: {
    SkillItem,
  },

  data() {
    return {
      skills: [
        { title: "React", value: "60%" },
        { title: "Javascript", value: "80%" },
        { title: "CSS", value: "90%" },
        { title: "Vue", value: "60%" },
        { title: "Redux", value: "80%" },
        { title: "React Native", value: "90%" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// Container shadow
@import "@/styles/base/bottom-middle-shadow.scss";

@import "@/components/PersonHardSkills/person-hard-skills";
</style>
