<template>
  <NavbarComp/>
  <main>
    <router-view />
  </main>
  <FooterComp/>
</template>
<script>
import NavbarComp from './components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
export default {
  components: {
    NavbarComp,
    FooterComp
  }
}
</script>
<style scoped>

</style>