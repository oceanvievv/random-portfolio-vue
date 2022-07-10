<template>
  <div class="experiences-section-wrapper bottom-middle-shadow">
    <div class="experiences-section__title">Experiences</div>
    <div class="experiences-wrapper">
      <div class="experience-wrapper" v-for="(exp, idx) in exps" :key="idx">
        <div class="experience__image-wrapper">
          <img v-bind:src="exp.imgLink" v-bind:alt="exp.companyName" />
        </div>
        <div class="experience__info">
          <div class="experience__date">
            {{ exp.dateFrom + " " + exp.dateTo }}
          </div>
          <div class="experience__position">
            {{ exp.position }}
          </div>
          <div class="experience__descr">
            {{ exp.descr }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdidasLogo from "@/assets/images/Adidas_Logo.svg";
import HMLogo from "@/assets/images/H&M-Logo.svg";

export default {
  name: "PersonExperiences",
  data() {
    return {
      exps: [
        {
          dateFrom: "Feb 2017",
          dateTo: "Current",
          position: "Front-end developer",
          companyName: "Adidas",
          descr:
            "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
          imgLink: AdidasLogo,
        },
        {
          dateFrom: "Aug 2016",
          dateTo: "Feb 2018",
          position: "Full-stack developer",
          companyName: "H&M",
          descr:
            "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
          imgLink: HMLogo,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "css/person-experiences";
</style>
