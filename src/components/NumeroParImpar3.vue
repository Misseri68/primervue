<template>
    <div>
        <h1>Par o impar con Método y Botón</h1>
        <label>Introduzca un numero</label>
        <input type="number" v-model="numero" />
        <button v-on:click="esPar">Es par o Impar?</button>
        <div v-html="html"></div>
    </div>
</template>

<script>
export default {
    name: "NumeroParImpar",
    methods: {
        esPar(){
            if(this.numero % 2 == 0 ){
                this.html = "<h3 style='color: blueviolet'>Es par</h3>";
            }
            else{
                this.html = "<h3 style='color: orange'>Es impar</h3>"
            }
        }
    },
    data() {
        return {
            numero: 0,
            html: "",

        }
    },
}
</script>

<style></style>