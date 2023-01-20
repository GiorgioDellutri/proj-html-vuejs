
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
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

div.container {
    padding: 3rem;

    h5 {
        font-weight: bold;
    }
}
</style>