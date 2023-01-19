<script>
import { store } from '../store';
import AppNavbar from '../components/AppNavbar.vue';
import AppJumbotron from '../components/AppJumbotron.vue';


export default {
    name: 'AppHeader',

    components: {
        AppNavbar,
        AppJumbotron,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <AppNavbar />
    <AppJumbotron />
</template>

<style lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>
