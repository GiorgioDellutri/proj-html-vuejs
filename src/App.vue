<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooterBottom from './components/AppFooterBottom.vue';
import AppFooterTop from './components/AppFooterTop.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooterTop,
    AppFooterBottom
  }
}

</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <AppMain />
  </main>
  <footer>
    <AppFooterTop />
    <AppFooterBottom />
  </footer>
</template>

<style lang="scss" >
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@import 'bootstrap/scss/bootstrap.scss';
</style>
