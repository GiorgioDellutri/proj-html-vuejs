<script>
import Typed from 'typed.js';

export default {
    name: 'Jumbotron',
    data() {
        return {
            showButton: false,
        }
    },
    mounted() {
        new Typed(this.$refs.typedHeading, {
            strings: ['Professional Development For <br> Coaches And Leaders'],
            typeSpeed: 40,
            cursorChar: '<span class="typed-cursor"></span>',
            onComplete: () => {
                this.showButton = true;
            },
        });
    },
}
</script>

<template>
    <div class="jumbotron-container  d-flex justify-content-center align-items-start">
        <div class="jumbo-content">
            <h1 ref="typedHeading"></h1>
            <div class="jumbo-button" v-if="showButton" v-bind:class="{ 'fade-in-bottom': showButton }">
                <h5 class="m-0">Learn more</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

div.jumbotron-container {
    height: 1000px;
    background-image: url(../assets/img/jumbotron_1.PNG);
    background-size: contain;
    background-repeat: no-repeat;

    div.jumbo-content {
        padding: 0 7rem;
        text-align: center;
        margin-top: 9rem;

        .fade-in-bottom {
            animation: fadeInBottom 0.5s ease-in-out;
        }

        @keyframes fadeInBottom {
            from {
                transform: translateY(100%);
            }

            to {
                transform: translateY(0%);
            }
        }

        h1 {
            font-size: 3.6rem;
        }

        div.jumbo-button {
            margin: 0 auto;
            border: 1px solid black;
            margin-top: 4rem;
            width: 200px;
            padding: 1rem 0;
        }
    }
}

.typed-cursor {
    visibility: hidden;
}
</style>
