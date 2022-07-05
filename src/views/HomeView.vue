<template>
  <div class="home">
    <PersonProfile />
  </div>
</template>

<script>
import PersonProfile from "@/components/PersonProfile/PersonProfile";

export default {
  name: "HomeView",
  components: {
    PersonProfile,
  },
};
</script>
