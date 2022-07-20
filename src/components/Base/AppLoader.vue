<template>
  <div class="container">
    <svg
      id="L4"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      xml:space="preserve"
    >
      <circle fill="#828282" stroke="none" cx="6" cy="50" r="5">
        <animate
          attributeName="opacity"
          dur="1.5s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle fill="#828282" stroke="none" cx="26" cy="50" r="5">
        <animate
          attributeName="opacity"
          dur="1.5s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle fill="#828282" stroke="none" cx="46" cy="50" r="5">
        <animate
          attributeName="opacity"
          dur="1.5s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: "AppLoader",
};
</script>

<style lang="scss" scoped>
@import "css/app-loader";
</style>
