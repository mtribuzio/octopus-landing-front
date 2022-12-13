<template>
  <hero-section />
  <lead-form />
  <info-section />
  <a class="whatsapp" href="https://wa.link/b90mjl" target="_blank">
    <img src="../assets/img/wp.svg" alt="whatsapp">
  </a>
</template>

<script>
import '../assets/tailwind.css';
import HeroSection from './Hero.vue';
import InfoSection from './Info.vue';
import LeadForm from './LeadForm.vue';

export default {
  name: 'LandingMain',
  components: {
    HeroSection,
    InfoSection,
    LeadForm,
  },
};

</script>

<style scoped>
.whatsapp {
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  right: 20px;
  position: fixed;
  box-shadow: 3px 3px 65px 0px rgba(0,0,0,0.44);
  -webkit-box-shadow: 3px 3px 65px 0px rgba(0,0,0,0.44);
  -moz-box-shadow: 3px 3px 65px 0px rgba(0,0,0,0.44);
  z-index: 1000 !important;
  width: 80px;
  height: 80px;
  background-color: #0B6BFF;
  border-radius: 50%;
}
</style>
