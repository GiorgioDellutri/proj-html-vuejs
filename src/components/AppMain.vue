<script>
import { store } from '../store';
import AppCards from '../components/AppCards.vue';
import AppCardsCourses from '../components/AppCardsCourses.vue';
import AppUpcomingEvents from './AppUpcomingEvents.vue';
import AppCampusImages from './AppCampusImages.vue';

export default {
    name: 'AppMain',

    components: {
        AppCards,
        AppCardsCourses,
        AppUpcomingEvents,
        AppCampusImages
    },

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
    <div class="container-fluid">
        <div class="wrapper">
            <p class="partners-title title mb-5">Since 2000, weve been partnering with education leaders to <span
                    id="red-text">increase equity
                    and achievement</span>
                for all students.</p>
            <section class="d-flex">
                <AppCards v-for="(singlecard) in store.cardsPartnership" :card="singlecard" />
            </section>
            <section class="company-numbers-container d-flex justify-content-around mt-5">
                <div class="students company-numbers-text">
                    <p class="number-students">6500 + </p> <span>Students</span>
                </div>
                <div class="courses company-numbers-text">
                    <p class="number-courses">200 + </p> <span>Online Courses</span>
                </div>
                <div class="happy-clients company-numbers-text">
                    <p class="number-clients">100% + </p> <span>Happy Clients</span>
                </div>
            </section>
            <section class="recent-courses title-cards ">
                <h2 class="partners-title mt-5 mb-4 ">Recent Courses</h2>
                <p>Whether you're considering a foundation course or an undergraduate degree master's or a PhD,
                    academics is a place where students thrive.</p>
            </section>
            <div class="d-flex justify-content-center">
                <AppCardsCourses v-for="(singlecard) in store.courses" :card="singlecard" />
            </div>
            <div class="feedback-container  ">
                <p class="feedback-text"> Academics was committed to my success from the moment Iattended an Open House.
                    With the support of caring <span class="underline-red">advisor,professor, and staff</span> i was
                    able to
                    thrive in courses,
                    gain recognition through scholarships, and finish <span class="bold-text">with confidence in
                        my </span> <span class="underline-red">@academics</span> <span
                        class="bold-text">abilities</span>""
                </p>
            </div>
            <AppUpcomingEvents />
            <section class="blogs title-cards">
                <h2 class="partners-title mt-5 mb-4 ">Latest From Our Blogs</h2>
                <p>Whether you're considering a foundation course or an undergraduate degree master's or a PhD,
                    academics is a place where students thrive.</p>
            </section>
            <div class="d-flex justify-content-center">
                <AppCardsCourses v-for="(singlecard) in store.feddback" :card="singlecard" />
            </div>
        </div>
        <div class="d-flex campus-images-container">
            <AppCampusImages v-for="(singlecard) in store.campusImages" :card="singlecard" />
        </div>
    </div>
</template>

<style lang="scss" scoped >
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;


div.container-fluid {
    background-color: $white-smoke-color;

    div.wrapper {
        text-align: center;
        color: $blue-text-color;

        p.title {
            padding: 0 6rem;
            font-size: 2rem;
            font-weight: bold;

            span#red-text {
                color: $red-text-color;
            }
        }

        p.number-students,
        p.number-courses,
        p.number-clients {
            font-weight: bold;
        }

        div.students p.number-students {
            display: inline-block;
            height: 70px;
            color: $orange-text-color;
            background-image: url(../assets/img/counter-shape-1-1-1.png);
            background-repeat: no-repeat;
            background-size: 65%;
            background-position: top left;
        }



        div.courses p.number-courses {

            display: inline-block;
            color: $dark-red-text-color;
            background-image: url(../assets/img/counter-shape-2-1-1.png);
            background-repeat: no-repeat;
            background-size: 80%;
            background-position: left;
        }

        div.happy-clients p.number-clients {
            display: inline-block;
            color: $light-green-text-color;
            background-image: url(../assets/img/counter-shape-3-1-1.png);
            background-repeat: no-repeat;
            background-size: 60% 100%;
        }

        section.company-numbers-container {
            p {
                font-size: 2.5rem;
                margin: 0 1rem;
            }

            span {
                font-size: 1.2rem;
            }
        }

        section.title-cards {
            padding: 0 11rem;
            margin: 4rem 0;

            h2 {
                font-weight: bold;
            }

            p {
                font-size: 1.2rem;
            }
        }

        div.feedback-container {
            margin: 6rem 0;
            text-align: center;
            padding: 0 2rem;

            background-image: url('../assets/img/quote.png');
            background-position: center;
            background-repeat: no-repeat;

            p.feedback-text {
                font-size: 1.8rem;

                span.bold-text {
                    font-weight: bolder;
                }

                span.underline-red {
                    color: $dark-blue-text-color;
                    text-decoration: underline;
                    font-weight: bolder;
                }
            }
        }
    }

    div.campus-images-container {
        margin-top: 6rem;
    }
}
</style>
