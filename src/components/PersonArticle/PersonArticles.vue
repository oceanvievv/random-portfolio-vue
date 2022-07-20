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
      <div class="articles__brief">
        <p>
          In this article I tell the story about Proin eu justo sit amet lacus
          bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
        </p>
        <p>
          Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
          feugiat malesuada molestie.
        </p>
      </div>
      <div class="articles__article-link">
        <a href="#">dev.to</a>
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
@import "@/components/PersonArticle/css/person-articles.scss";
</style>
