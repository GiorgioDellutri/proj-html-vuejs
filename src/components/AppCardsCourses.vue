
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
                'background-repeat': 'no-repeat',
                'transition': 'transform 0.3s ease-in-out'
            }
        }
    }
}
</script>

<template>
    <div class="card-container">
        <div class="single-card zoom m-3 ">
            <div class="img-container" :style="imgContainerStyle"></div>
            <div class="wrapper-text">
                <span class="role" v-if="card.role"><a href="#"><i class="fas fa-user"></i> {{
                    card.role
                }}</a></span>
                <span class="type" v-if="card.type"><a href="#"><i class="fas fa-folder"></i> {{
                    card.type
                }}</a></span>
                <p class="price" v-if="card.price">
                    {{ card.price }}
                <div class="underline-price"></div>
                </p>
                <p class="title"><a href="#">{{ card.title }}</a></p>
                <p class="text mb-4">{{ card.text }}</p>
                <p class="by">{{ card.by }}</p>
                <div class="marker" v-if="card.more"></div>
                <span id="more" v-if="card.more"><a href="#">{{ card.more }}<i
                            class="fa-solid fa-chevron-right"></i></a></span>
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
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translate(0, -20px);
    }

    div.wrapper-text {
        padding: 1.5rem;

        span#more a {
            color: $dark-light-blue-background-color;
        }

        a {
            color: $dark-blue-background-color;
        }

        p.title {
            margin-top: 1rem;

            a {
                // INSERIRE font-weight

                font-size: 1.3rem;
                transition: color 0.3s ease-in-out;

                &:hover {
                    color: $dark-red-text-color;
                }
            }
        }


        p.text {
            font-size: 1.1rem;
        }

        p.price {
            font-size: 1.3rem;
            position: relative;

            div.underline-price {
                position: absolute;
                height: 10px;
                width: 55px;
                background-color: #d74d5251;
                top: 14px;
                left: 14px;

            }
        }

        p.by {
            color: $dark-light-blue-background-color;
            margin: 0;
        }

        span.role,
        span.type {
            margin-right: 2rem;

            i {
                font-size: .8rem;
            }
        }

        div.marker {
            height: 3px;
            width: 50px;
            background-color: $dark-light-blue-background-color;
            margin: 1.5rem 0 3rem 0;
        }

        .zoom {
            transition: transform 0.3s ease-in-out;

            &:hover {
                transform: scale(1.2);
            }
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