<template>
  <div class="content-wrapper">
    <PersonProfile />
    <div class="person-additional-info">
      <div class="info__left-column">
        <PersonHardSkills />
        <PersonHobbies />
      </div>
      <div class="info__right-column">
        <PersonArticles />
        <PersonExperiences />
      </div>
    </div>
    <PersonProjects />
  </div>
</template>

<script>
import PersonProfile from "@/components/PersonProfile/PersonProfile";
import PersonHardSkills from "@/components/PersonHardSkills/PersonHardSkills";
import PersonHobbies from "@/components/PersonHobbies/PersonHobbies";
import PersonArticles from "@/components/PersonArticle/PersonArticles";
import PersonExperiences from "@/components/PersonExperiences/PersonExperiences";
import PersonProjects from "@/components/PersonProjects/PersonProjects";

export default {
  name: "HomeView",
  components: {
    PersonArticles,
    PersonProfile,
    PersonHardSkills,
    PersonHobbies,
    PersonExperiences,
    PersonProjects,
  },
};
</script>
