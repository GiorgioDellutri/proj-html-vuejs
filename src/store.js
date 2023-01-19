import { reactive } from 'vue'

export const store = reactive({
    cardsPartnership: [
        {
            imgUrl: "svg-0.svg",
            title: 'Online Coaching',
            text: 'Lorem ipsum is simply dummy text of the print ing and typesetting has been the industries.'
        },
        {
            imgUrl: "svg-1.svg",
            title: 'Consultation',
            text: 'Lorem ipsum is simply dummy text of the print ing and typesetting has been the industries.'
        },
        {
            imgUrl: "svg-2.svg",
            title: 'Life Programs',
            text: 'Lorem ipsum is simply dummy text of the print ing and typesetting has been the industries.'
        },
    ],
    courses: [
        {
            imgUrl: 'bruce-mars-FWVMhUa_wbY-unsplash.jpg',
            price: 'Free',
            title: 'UI Animation using Sketch 3, Principle App, and Flinto',
            text: 'This online photography course will teach you how to take amazing images and even sell...',
            by: 'Coursed by: University'
        },
        {
            imgUrl: 'course-1-2.jpg',
            price: 'Free',
            title: 'The Ultimate Drawing Course-Beginner to Advanced',
            text: 'This online photography course will teach you how to take amazing images and even sell...',
            by: 'Coursed by: University'
        },
        {
            imgUrl: 'william-thomas-ny6tO4ItOEY-unsplash.jpg',
            price: 'Free',
            title: 'Your Complete Guide to Photography',
            text: 'This online photography course will teach you how to take amazing images and even sell...',
            by: 'Coursed by: University'
        },
    ],
    feddback: [
        {
            imgUrl: 'news-3-2.jpg',
            role: ' Admin',
            type: 'University',
            title: 'Peer pressure changes how teens tackle inequality',
            marker: '',
            more: 'Read more'
        },
        {
            imgUrl: 'news-2-2.jpg',
            role: 'Admin',
            type: 'Education',
            title: "Lewisham Live Mixtape celebrates borough's",
            marker: '',
            more: 'Read more'
        },
        {
            imgUrl: 'news-1-2.jpg',
            role: 'Admin',
            type: 'Education',
            title: "Turner Prize winner's work to open Gold on Film festival",
            marker: '',
            more: 'Read more'
        },
    ],
    campusImages: [
        {
            imgUrl: 'gallery-3-3.jpg',
        },
        {
            imgUrl: 'news-3-2 -resized.jpg',
        },
        {
            imgUrl: 'gallery-1-3.jpg',
        },
        {
            imgUrl: 'gallery-2-3.jpg',
        },
    ]
});