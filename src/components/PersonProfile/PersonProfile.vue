<template>
  <div class="person-profile-wrapper bottom-middle-shadow">
    <div class="person-profile__img">
      <img src="@/assets/images/person_pfp.jpg" alt="Person photo" />
    </div>
    <div class="person-profile__info">
      <div class="person-profile__personal">
        <div class="person-profile__fullname-and-position">
          <div class="person-profile__fullname">{{ name }}</div>
          <div class="person-profile__position">{{ position }}</div>
        </div>
        <div class="person-profile__contacts">
          <div class="person-profile__contact-type-wrapper">
            <div class="person-profile__contact-icon">
              <img src="@/assets/icons/mail.svg" alt="Mail address" />
            </div>
            <div class="person-profile__contact-value">{{ mailAddress }}</div>
          </div>
          <div class="person-profile__contact-type-wrapper">
            <div class="person-profile__contact-icon">
              <img src="@/assets/icons/phone.svg" alt="Phone number" />
            </div>
            <div class="person-profile__contact-value">{{ phoneNumber }}</div>
          </div>
        </div>
      </div>
      <div class="person-profile__about">
        <p v-for="descr in descrArr" :key="descr">
          {{ descr }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonProfile",
  data() {
    const firstName = "Kendrick";
    const lastName = "Lamar";
    const descrArr = [
      "Self-motivated developer, who is willing to learn and create outstanding UI applications.",
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    ];

    return {
      name: firstName + " " + lastName,
      position: "Front-end developer",
      mailAddress: "kendrick@oklama.com",
      phoneNumber: "(+603) 546 624 342",
      descrArr,
    };
  },
};
</script>

<style lang="scss" scoped>
// Container shadow
@import "@/styles/base/bottom-middle-shadow.scss";

@import "css/person-profile";
</style>
