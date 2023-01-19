<script>

export default {
    name: 'AppCards',

    props: {
        card: {

        }
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<template>
    <div class="card-container">
        <div class="single-card m-3 py-5 px-4 ">
            <div class="img-container mb-4">
                <img :src="card.imgUrl" alt="svg card">
            </div>
            <p class="title">{{ card.title }}</p>
            <p class="text mb-5">{{ card.text }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;


div.single-card {

    background-color: $white-color ;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    div.img-container {
        margin: 0 auto;
        height: 55px;
        width: 55px;
    }

    p.title {
        font-size: 1.4rem;
        font-weight: bold;
    }

    p.text {
        font-size: 1.1rem;
    }
}
</style>
