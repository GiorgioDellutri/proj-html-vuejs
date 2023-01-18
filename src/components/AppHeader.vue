<script>
import { store } from '../store';
import AppNavbar from '../components/AppNavbar.vue';

export default {
    name: 'AppHeader',

    components: {
        AppNavbar
    },

    data() {
        return {
            store,
        }
    },

    methods: {
    }
}
</script>

<template>
    <AppNavbar />
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>
