<template>
  <div>
    <SpinnerComp v-if="showSpinner" />
    <div v-else>
      <NavbarComp />
      <main>
        <router-view />
      </main>
      <FooterComp />
    </div>
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import SpinnerComp from './components/SpinnerComp.vue';

export default {
  components: {
    NavbarComp,
    FooterComp,
    SpinnerComp
  },
  data() {
    return {
      showSpinner: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000); // 2 seconds delay before hiding the spinner
  }
};
</script>

<style scoped>
/* Add any necessary scoped styles here */
</style>
