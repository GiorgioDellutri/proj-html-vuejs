<script>
import { store } from '../store';

export default {
    name: 'Jumbotron',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="jumbotron-container  d-flex justify-content-center align-items-start">
        <div class="jumbo-content">
            <h1>Professional Development For <br> Coaches And Leaders</h1>
            <div class="jumbo-button">
                <h5>Learn more</h5>
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
</style>
