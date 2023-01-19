
<script>

export default {
    name: 'AppCardsCourses',

    props: {
        card: {

        }
    },
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
        imgContainerStyle() {
            console.log(this.card.imgUrl);
            return {
                'background-image': `url(${this.card.imgUrl})`,
                'background-size': 'cover',
                'background-repet': 'no-repet'
            }
        }
    }
}
</script>

<template>
    <div class="card-container">
        <div class="single-card  m-3 ">
            <div class="img-container" :style="imgContainerStyle">
            </div>
            <div class="wrapper-text">
                <p class="price">{{ card.price }}</p>
                <div class="marker"></div>
                <p class="title">{{ card.title }}</p>
                <p class="text mb-4">{{ card.text }}</p>
                <p class="by">{{ card.by }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

div.single-card {
    text-align: left;
    width: 338px;
    height: 490px;
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
    }



    div.img-container {
        width: 100%;
        height: 193px;

        img {
            width: 100%;
            height: 200px;
        }
    }
}
</style>