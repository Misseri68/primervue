import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import CicloVida from "./components/CicloVida.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";
import PropiedadConmutada from "./components/PropiedadConmutada.vue";

const myRoutes = [

    { path: "/", component: HomeComponent },
    { path: "/musica", component: MusicaComponent },
    { path: "/cine", component: CineComponent },
    { path: "/ciclovida", component: CicloVida},
    { path: "/directivas", component: DirectivasComponent},
    { path: "/conmutada", component: PropiedadConmutada}


]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;