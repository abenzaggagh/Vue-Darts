import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/view/HomeView.vue";
import GamesView from "@/view/GamesView.vue";
import PlayersView from "@/view/PlayersView.vue";
import X01View from "@/view/X01View.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/games',
            name: 'games',
            component: GamesView
        },
        {
            path: '/players',
            name: 'players',
            component: PlayersView
        },
        {
            path: '/x01',
            name: 'x01',
            component: X01View
        },
    ]
})

export default router
