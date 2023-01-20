
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
    <div class="container">
        <h5>{{ card.title }}</h5>
        <ul>
            <li v-if="card.address"><i class="fa-solid fa-map-pin"></i>{{ card.address }}</li>
            <li v-if="card.phone"><i class="fa-solid fa-square-phone"></i>{{ card.phone }}</li>
            <li v-if="card.email"><i class="fa-solid fa-envelope"></i>{{ card.email }}</li>
            <li v-if="card.link_1"><i class="fa-solid fa-chevron-right"></i>{{ card.link_1 }}</li>
            <li v-if="card.link_2"><i class="fa-solid fa-chevron-right"></i>{{ card.link_2 }}</li>
            <li v-if="card.link_3"><i class="fa-solid fa-chevron-right"></i>{{ card.link_3 }}</li>
            <li v-if="card.link_4"><i class="fa-solid fa-chevron-right"></i>{{ card.link_4 }}</li>
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

        i {
            padding: .3rem;
        }
    }
}
</style>