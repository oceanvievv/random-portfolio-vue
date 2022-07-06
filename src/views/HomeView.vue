<template>
  <div class="content-wrapper">
    <PersonProfile />
    <div class="person-additional-info">
      <div class="info__left-column">
        <HardSkills />
        <PersonHobbies />
      </div>
      <div class="info__right-column"></div>
    </div>
  </div>
</template>

<script>
import PersonProfile from "@/components/PersonProfile/PersonProfile";
import HardSkills from "@/components/PersonHardSkills/PersonHardSkills";
import PersonHobbies from "@/components/PersonHobbies/PersonHobbies";

export default {
  name: "HomeView",
  components: {
    PersonProfile,
    HardSkills,
    PersonHobbies,
  },
};
</script>
