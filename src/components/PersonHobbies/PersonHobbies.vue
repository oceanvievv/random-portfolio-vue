<template>
  <div class="hobbies-section-wrapper bottom-middle-shadow">
    <div class="hobbies-section__title">Hobbies</div>
    <div class="hobbies-wrapper">
      <div class="hobby-wrapper" v-for="(hobby, idx) in hobbies" :key="idx">
        <div class="hobby__image-wrapper">
          <img
            v-bind:src="hobby.imgLink"
            v-bind:alt="hobby.title + ' ' + 'preview'"
          />
        </div>
        <div class="hobby__info-wrapper">
          <div class="hobby__title">{{ hobby.title }}</div>
          <div class="hobby__descr">{{ hobby.descr }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gamingPreview from "@/assets/images/gaming.png";
import cookingPreview from "@/assets/images/cooking.jpg";
import bikingPreview from "@/assets/images/biking.jpeg";

export default {
  name: "PersonHobbies",
  data() {
    return {
      hobbies: [
        {
          title: "Gaming",
          descr: "Quisque feugiat malesuada molestie.",
          imgLink: gamingPreview,
        },
        {
          title: "Cooking",
          descr: "Quisque feugiat malesuada molestie.",
          imgLink: cookingPreview,
        },
        {
          title: "Biking",
          descr: "Quisque feugiat malesuada molestie.",
          imgLink: bikingPreview,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/PersonHobbies/person-hobbies";
</style>
