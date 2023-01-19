<script>


export default {
    name: 'AppUpcomingEvents',
}
</script>

<template >
    <div class="wrapper">
        <div class="video d-flex justify-content-center align-items-center">
            <div class="player-video ">
                <i class="fa-solid fa-play"></i>
            </div>
            <div class="banner-event d-flex justify-content-start flex-column">
                <div class="banner-title">
                    <h3>Upcoming Event</h3>
                </div>
                <div class="info-container">
                    <p>Princeton offers admission information sessions and student-led tours to campus visitors</p>
                    <span class="learn-more">Learn more</span><span><i class="fa-solid fa-chevron-right"></i></span>
                    <p>Admission information sessions and student-led tours to campus visitors</p>
                    <span class="learn-more">Learn more</span><span><i class="fa-solid fa-chevron-right"></i></span>
                </div>
                <div class="maps-location text-center">
                    <span class="maps"><i class="fa-regular fa-map"></i> Event Location</span>
                    <span><i class="fa-solid fa-chevron-right"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

div.video {
    background-image: url('../assets/img/video-bg-3.jpg');
    background-repeat: no-repeat;
    height: 500px;
    width: 600px;
    position: relative;
    margin-bottom: 10rem;

    div.player-video {
        position: relative;
        height: 100px;
        width: 100px;
        border-radius: 100%;
        background-color: $white-color;

        i {
            color: $dark-red-background-color;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-45%, -50%);
            font-size: 2.5rem;
            margin-bottom: 10rem;
        }
    }
}

div.banner-event {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-align: left;
    position: absolute;
    height: 500px;
    width: 600px;
    background-color: $white-color;
    top: 20%;
    left: 82%;

    div.banner-title {
        padding: 1.5rem 2rem;
        margin: 0 auto;
        height: 90px;
        background-color: $dark-red-background-color;

        h3 {
            margin: 0;
            color: $white-color;
        }
    }

    div.info-container {
        padding: 2rem 9rem 2rem 2.8rem;
        font-weight: bold;

        p {
            font-size: 1.1rem;
        }

        span {
            display: inline-block;
            font-size: .9rem;
            margin-right: .2rem;

            i {
                font-size: .7rem;
                margin-bottom: 2.5rem;
            }

        }

        span:nth(2) {
            margin-bottom: 2rem;
        }

    }

    div.maps-location {

        span.maps i.fa-map {
            margin-right: .2rem;
        }

        span i.fa-chevron-right {
            font-size: .8rem;
            margin-left: .2rem;
        }
    }
}
</style>