<script>

export default {
    name: 'AppCampusImages.vue',

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
                'background-size': 'contain',
                'background-repeat': 'no-repeat'
            }
        }
    }
}
</script>

<template>
    <div class="img-container" :style="imgContainerStyle"></div>
</template>

<style lang="scss" scoped>
div.img-container {
    width: 100%;
    height: 329px;
}
</style>