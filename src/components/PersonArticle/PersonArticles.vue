<template>
  <div class="articles-wrapper bottom-middle-shadow">
    <div class="articles__type">Blog</div>
    <div class="articles__content">
      <div class="articles__title">
        <p>How to organize your CSS</p>
      </div>
      <div class="articles__image-wrapper">
        <img
          :src="require('/src/assets/images/A_small_cup_of_coffee.jpg')"
          alt="Article preview"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonArticle",
};
</script>

<style lang="scss" scoped>
@import "@/components/PersonArticle/person-articles.scss";
</style>
