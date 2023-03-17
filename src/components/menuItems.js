/* Esto sería una solicitud, un json, etc */

export default {
    profile: {
        name: 'cosme fulanito',
        img: '../assets/profile.svg',
        onClick() {
            console.log('Hola desde onClick() de profile');
        }
    },
    items: [{
            id: 0,
            title: 'Home',
            // <font-awesome-icon icon="fa-solid fa-house-user" />
            icon: 'fa-house-user',
            onClick() {
                console.log('Home');
            }
        },
        {
            id: 1,
            title: 'Reports',
            // <font-awesome-icon icon="fa-regular fa-screwdriver-wrench" />
            icon: 'fa-screwdriver-wrench',
            onClick() {
                console.log('Reports');
            }
        },
        {
            id: 2,
            title: 'About',
            // <font-awesome-icon icon="fa-solid fa-fire" />
            icon: 'fa-fire',
            onClick() {
                console.log('About');
            }
        },
        {
            id: 3,
            title: 'Terms of service',
            // <font-awesome-icon icon="fa-solid fa-info" />
            icon: 'fa-info',
            onClick() {
                console.log('Terms of service');
            }
        }
    ]
}