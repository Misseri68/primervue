<template>
    <div>
        <h1>Propiedad Conmutada</h1>
        <button @click="getJuegosAzules()">Juegos azules</button>
        <div v-html="html"></div>
        <!-- <ul>
            <li v-for="element in juegosRojos" :key="element" v-html="element">
                
            </li>
        </ul> -->
    </div>
</template>

<script>
    export default {
        name: "PropiedadConmutada",
        methods: {
            getJuegosAzules() {
                this.html= "";
                for(var element of this.miarray){
                    this.html += "<h4 style='color: blue'>" + element + "</h4>";
                }
            }
        },
        computed: {
            juegosRojos() {
                var datos = this.miarray;
                for(var i = 0; i < datos.length; i++){
                    var juego = datos[i];
                    juego = "<span style='color: green'>" + juego + "</span>"
                    datos[i] = juego;
                }
                return datos;
            }
        },
        data() {
            return {
                html: "",
                miarray: [1,2,3,4,5]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>