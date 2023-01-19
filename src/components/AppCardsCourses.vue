
<script>

export default {
    name: 'AppCardsCourses',

    props: {
        card: {

        }
    },

    methods: {
        getImagePath(imgPath) {
            return new URL(`../assets/img/${imgPath}`, import.meta.url).href
        }
    },
    computed: {
        imgContainerStyle() {
            return {
                'background-image': `url(${this.getImagePath(this.card.imgUrl)})`,
                'background-size': 'cover',
                'background-repeat': 'no-repeat'
            }
        }
    }
}
</script>

<template>
    <div class="card-container">
        <div class="single-card  m-3 ">
            <div class="img-container" :style="imgContainerStyle"></div>
            <div class="wrapper-text">
                <span class="role" v-if="card.role"><i class="fas fa-user"></i> {{ card.role }}</span>
                <span class="type" v-if="card.type"><i class="fas fa-folder"></i> {{ card.type }}</span>
                <p class="price">{{ card.price }}</p>
                <p class="title">{{ card.title }}</p>
                <p class="text mb-4">{{ card.text }}</p>
                <p class="by">{{ card.by }}</p>
                <div class="marker" v-if="card.more"></div>
                <span v-if="card.more">{{ card.more }}<i class="fa-solid fa-chevron-right"></i></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

div.single-card {
    text-align: left;

    background-color: $white-color ;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    div.wrapper-text {
        padding: 1.5rem;

        p.title {
            // INSERIRE font-weight
            font-size: 1.3rem;
        }

        p.text {
            font-size: 1.1rem;
        }

        p.by {
            color: $dark-red-text-color;
            margin: 0;
        }

        span.role,
        span.type {
            margin-right: 2rem;
        }

        div.marker {
            height: 3px;
            width: 50px;
            background-color: $dark-red-text-color;
            margin: 1.5rem 0 3rem 0;
        }
    }

    div.img-container {
        width: 334.667px;
        height: 193px;

        img {
            width: 100%;
            height: 200px;
        }
    }
}
</style>