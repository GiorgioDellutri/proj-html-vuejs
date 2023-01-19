<script>
import { store } from '../store';

export default {
    name: 'AppFooterTop',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="footer-top-container p-5">
        <div class="wrapper">
            <div class="subscribe-section d-flex justify-content-between align-items-center">
                <div class="input-container d-flex mb-3">
                    <input class="mail p-3" type="text" placeholder="Subscribe to our newletter" />
                    <a class="bg-danger d-flex align-items-center" href="#">Register</a>
                </div>
                <div class="subscribe-info">
                    <p><span class="underline-red">Insights is Picwik</span> University's thought leadership
                        publication for sharing knowledge on management, technology and innovation</p>
                    <span><a href="">Take me there</a><i class="fa-solid fa-chevron-right"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

div.footer-top-container {
    color: $white-color;
    background-color: $deep-blue-background-color;
    height: 1000px;



    div.subscribe-section {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        width: 100%;
        padding: 2rem;

        input.mail {
            border: 0px;
            height: 50px;

            &:focus {
                outline: none;
            }

            &::placeholder {
                font-size: .8rem;
                color: $black-color;
            }
        }

        a {
            color: $white-color;
        }

        div.subscribe-info span i {
            font-size: .8rem;
            margin: .3rem;
        }

        div.input-container a {
            margin: 0 auto;
            padding: .6rem;
            margin-right: 5rem;
        }
    }

    p {
        color: $light-blue-gray-text-color;
        padding-right: 2rem;

    }

    span.underline-red {
        color: $dark-red-text-color;
        text-decoration: underline $white-color;
        font-weight: bolder;
    }
}
</style>