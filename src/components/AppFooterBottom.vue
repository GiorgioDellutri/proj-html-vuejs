<script>
export default {
    name: "AppFooterBottom",

}
</script>

<template>
    <div class="no-wrapped-container">
        <div class="wrapper footer-bottom-content d-flex justify-content-between">
            <p><i class="fa-solid fa-copyright"></i>Copyright 2020 tophive. All Rights Reserved.</p>
            <div class="links">
                <ul class="d-flex justify-content-between">
                    <li><a href="#">Privacy</a> </li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;


div.no-wrapped-container {
    background-color: $dark-blue-background-color;

    div.footer-bottom-content {

        color: $light-blue-gray-text-color;

        p,
        li {
            font-size: .8rem;
        }

        ul li {
            padding: 0 .5rem 0 .5rem;

            a {
                color: $light-blue-gray-text-color
            }
        }
    }

}
</style>