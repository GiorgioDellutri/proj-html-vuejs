<script>
import { store } from '../store';
import AppCards from '../components/AppCards.vue';


export default {
    name: 'AppMain',

    components: {
        AppCards,
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
    <div class="container-fluid">
        <div class="wrapper">
            <p class="partners-title">Since 2000, weve been partnering with education leaders to <span>increase equity
                    and achievement</span>
                for all students.</p>
            <div class="d-flex">
                <AppCards v-for="(singlecard) in store.cardsPartnership" :card="singlecard" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped >
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;


div.container-fluid {
    background-color: $white-smoke-color;

    div.wrapper {
        text-align: center;

        p.partners-title {
            padding: 0 6rem;
            font-size: 2rem;
            font-weight: bold;

            span {
                color: $red-text-color
            }
        }
    }
}
</style>
