import {
    createApp
} from 'vue';

import App from './App.vue';

import './assets/main.css';



/* import the fontawesome core */
import {
    library
} from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

/* import specific icons */
// definir iconos que voy a usar
import {
    faUserSecret,
    faBars,
    faHouseUser,
    faScrewdriverWrench,
    faFire,
    faInfo

} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faBars, faHouseUser, faScrewdriverWrench, faFire, faInfo);



createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');