import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'


var app = createApp(App);

app.use(router).mount('#app')

app.config.globalProperties.$filters = {
        mayuscula(cadena){
            return cadena.toUpperCase();
        },
        getNumeroDoble(numero){
            return numero * 2;
        }
}