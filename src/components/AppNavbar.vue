<script>
import { store } from '../store';

export default {
    name: 'AppNavbar',
    data() {
        return {
            store,
        }
    },
    methods: {
    }
}
</script>

<template>

    <nav>
        <div class="nav-content wrapper d-flex justify-content-between ">
            <div class="img-container">
                <img src="../assets/img/Logo.jpg" alt="Picwik logo">
            </div>
            <div class="nav-links">
                <ul class="d-flex justify-content-between align-items-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Academics</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">News</a></li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

nav {
    height: 60px;
    background-color: rebeccapurple;

    div.wrapper {
        height: 100%;

        div.img-container {
            height: 90px;

            img {
                height: 100%;
            }
        }

        div.nav-links ul {
            height: 100%;

            li {
                margin: 0 1rem;
                list-style-type: none;

                a {
                    text-decoration: none
                }
            }
        }
    }

}
</style>
