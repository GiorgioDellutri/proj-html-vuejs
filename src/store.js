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
    ]
});