
<script>
export default {
    name: 'AppFooterLinks',

    props: {
        card: {

        }
    },
}
</script>

<template>
    <div class="container ">
        <h5>{{ card.title }}</h5>
        <ul>
            <li v-if="card.address"><i class="fa-solid fa-map-pin"></i>{{ card.address }}</li>
            <li v-if="card.phone"><a href="#"><i class="fa-solid fa-square-phone"></i>{{ card.phone }}</a></li>
            <li v-if="card.email"><a href="#"><i class="fa-solid fa-envelope"></i>{{ card.email }}</a></li>
            <li v-if="card.link_1"><a href="#"><i class="fa-solid fa-chevron-right"></i>{{ card.link_1 }}</a></li>
            <li v-if="card.link_2"><a href="#"><i class="fa-solid fa-chevron-right"></i>{{ card.link_2 }}</a></li>
            <li v-if="card.link_3"><a href="#"><i class="fa-solid fa-chevron-right"></i>{{ card.link_3 }}</a></li>
            <li v-if="card.link_4"><a href="#"><i class="fa-solid fa-chevron-right"></i>{{ card.link_4 }}</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

div.container {
    padding: 2.5rem;


    h5 {
        font-weight: bold;
    }

    ul li {
        margin: .8rem 0 .8rem 0;
        color: $light-blue-gray-text-color;

        a {
            color: $light-blue-gray-text-color;

            &:hover {
                color: $dark-red-text-color;
            }

            i {
                padding: .3rem;
            }
        }
    }
}
</style>