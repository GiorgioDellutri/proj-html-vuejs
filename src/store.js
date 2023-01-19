import { reactive } from 'vue'

export const store = reactive({
    cardsPartnership: [
        {
            imgUrl: "/src/assets/svg/svg-0.svg",
            title: 'Online Coaching',
            text: 'Lorem ipsum is simply dummy text of the print ing and typesetting has been the industries.'
        },
        {
            imgUrl: "/src/assets/svg/svg-1.svg",
            title: 'Consultation',
            text: 'Lorem ipsum is simply dummy text of the print ing and typesetting has been the industries.'
        },
        {
            imgUrl: "/src/assets/svg/svg-2.svg",
            title: 'Life Programs',
            text: 'Lorem ipsum is simply dummy text of the print ing and typesetting has been the industries.'
        },
    ],
    prova: [
        {
            img: '/src/assets/img/course-1-2.jpg',
            title: 'dasdasdas',
            text: 'Lorem ipsum is simply dummy text of the print ing and typesetting has been the industries'
        },
        {
            imgUrl: './assets/svg/svg-2.svg',
            title: 'dasdasdas',
            text: 'Lorem ipsum is simply dummy text of the print ing and typesetting has been the industries'
        },
        {
            imgUrl: './assets/svg/svg-3.svg',
            title: 'Life asdasd',
            text: 'Lorem ipsum is simply dummy text of the print ing and typesetting has been the industries'
        },
    ]
});