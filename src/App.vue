<template>
  <div id="app" class="container">
    <div class="content-wrapper">
      <PersonProfile />
    </div>
  </div>
</template>

<style lang="scss">
// CSS optimizers
@import "~normalize.css";
@import "~modern-css-reset";

// Fonts
@import "@/styles/fonts/montserrat";
@import "@/styles/fonts/roboto";

// Consts
@import "@/styles/consts/consts";

// Containers
@import "@/styles/base/container";

body {
  font-family: "MontserratMedium", sans-serif;

  color: $base-text-color;

  background-color: $background-color-light-gray;

  margin-top: 70px;

  @media screen and (max-width: 1110px) {
    margin-top: 40px;

    @media screen and (max-width: 375px) {
      margin-top: 20px;
    }
  }
}
</style>
<script>
import PersonProfile from "@/components/PersonProfile/PersonProfile";
export default {
  components: { PersonProfile },
};
</script>
