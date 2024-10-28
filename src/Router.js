import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import CicloVida from "./components/CicloVida.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";
import PropiedadConmutada from "./components/PropiedadConmutada.vue";
// import NumeroParImpar from "./components/NumeroParImpar.vue";
import NumeroParImpar2 from "./components/NumeroParImpar2.vue";
import NumeroParImpar from "./components/NumeroParImpar.vue";
import NumeroParImpar3 from "./components/NumeroParImpar3.vue";

const myRoutes = [

    { path: "/", component: HomeComponent },
    { path: "/musica", component: MusicaComponent },
    { path: "/cine", component: CineComponent },
    { path: "/ciclovida", component: CicloVida},
    { path: "/directivas", component: DirectivasComponent},
    { path: "/conmutada", component: PropiedadConmutada},
    { path: "/parimpar1", component: NumeroParImpar},
    { path: "/parimpar2", component: NumeroParImpar2},
    { path: "/parimpar3", component: NumeroParImpar3}


]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;