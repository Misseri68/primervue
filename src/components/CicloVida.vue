<template>

    <div>
        <h3>{{ saludo }}</h3>
        <button @click="cambiarSaludo()">Cambiar saludo</button>
    </div>
</template>

<script>
export default {
    name: "CicloVida",
    data() {
        return {
            saludo: "Hoy es lunes... :("
        }
    },
    methods: {
        cambiarSaludo() {
            this.saludo = "Y mañana martes :/"
        }
    },
    mounted() { console.log("mounted") },
    unmounted() { console.log("unmounted") },
    created() { console.log("created") },
    updated() { console.log("updated") },

}


</script>
