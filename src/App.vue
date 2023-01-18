<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppNavbar,
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
</template>

<style lang="scss" >
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@import 'bootstrap/scss/bootstrap.scss';
</style>
