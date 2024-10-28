<template>
    <div>
        <h1>Par o impar con Propiedad Conmutada</h1>
        <label>Introduzca un numero</label>
        <input type="number" v-model="numero" />
        <div v-html="dibujoEsPar"></div>
    </div>
</template>

<script>
export default {
    name: "NumeroParImpar",
    computed: {
        dibujoEsPar() {
            if (this.numero % 2 == 0) {
                return "<h3 style='color:blueviolet'>Es Par</h3>"
            }
            else {
                return "<h3 style='color: orange'>Es Impar</h3>"
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