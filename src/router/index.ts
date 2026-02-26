import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Pallete from "../components/Pallete.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/pallete",
            name: "Pallete",
            component: Pallete,
        },
    ],
});

export default router;