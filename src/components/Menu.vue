<script setup>

import { ref } from 'vue';
import MenuItem from './MenuItem.vue';
import menuItems from './menuItems';


// booleano para contraer o expandir menú
let collapsed = ref(false);

</script>

<template>

<!-- clase menu, y si es verdadero collapsed va a aplicar clase collapsed, sino expanded -->
<aside :class="['menu', collapsed ? 'collapsed' : 'expanded']">

    <div class="header">
        <button class="menu-button" @click.prevent="collapsed = !collapsed">
            <font-awesome-icon icon="fa-solid fa-bars" size="2x"/>
        </button>
    </div>

    <div class="profile" v-if="!collapsed">
        <img class="profile__img" src="../assets/profile.svg" :alt=menuItems.profile.img>
        <!-- cuando este expandido (no collapsed) se va a mostrar name -->
        <div class="profile__name"> <a href="#" @click.prevent="menuItems.profile.onClick"> {{ menuItems.profile.name }} </a> </div>
    </div>

    <div class="menu__item" >

        <ul>
            <MenuItem v-for="item in menuItems.items" :key="item.id" :item="item" :collapsed="collapsed" />
        </ul>

    </div>

</aside>



</template>

<style scoped>

.menu {
    background-color: var(--colorNegro);
    height: 100vh;
    transition: width .3s;
    position: fixed;
    left: 0;
    top: 0;
}

.collapsed {
    width: 8rem;
    /* height: 4.4rem; */
}

.expanded {
    width: 35rem;
}

.header {
    margin: 0 auto;
    display: flex;
    justify-content: end;
}

.menu-button {
    width: 4.4rem;
    height: 4.4rem;
    border: none;
    background-color: transparent;
    margin: 0 auto;
    display: block;
}

.profile {
    display: flex;
    padding: var(--separacion);
    gap: var(--separacion);
    align-items: center;
}

.profile__img {
    width: 4.4rem;
}

.profile__name {
    text-align: center;
}

.profile__name a {
    text-decoration: none;
    text-transform: capitalize;
}

.menu__item {

}

.menu__item ul {
    padding: 0;
    list-style: none;
    margin: 0;
}

</style>
