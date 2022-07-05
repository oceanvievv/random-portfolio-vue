<template>
  <div class="content-wrapper">
    <PersonProfile />
    <div class="person-additional-info">
      <div class="info__left-column">
        <HardSkills />
      </div>
      <div class="info__right-column"></div>
    </div>
  </div>
</template>

<script>
import PersonProfile from "@/components/PersonProfile/PersonProfile";
import HardSkills from "@/components/HardSkills/HardSkills";

export default {
  name: "HomeView",
  components: {
    PersonProfile,
    HardSkills,
  },
};
</script>
