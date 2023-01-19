<script >
import AppFooterTop from './components/AppFooterTop.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooterTop
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
  </footer>
</template>

<style lang="scss" >
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@import 'bootstrap/scss/bootstrap.scss';
</style>
