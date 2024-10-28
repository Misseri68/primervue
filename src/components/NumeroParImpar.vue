<template>
    <div>
        <h1>Par o impar con Directivas If</h1>
        <label>Introduzca un numero</label>
        <input type="number"  v-model="numero"/>
        <h4 v-if="numero % 2 == 0" style="color: blueviolet"> Es par</h4>
        <h4 v-if="numero % 2 != 0" style="color: orange"> Es impar</h4>
    </div>
</template>

<script>
    export default {
        name: "NumeroParImpar",
        data() {
            return {
                numero: 0,

            }
        },
    }
</script>

<style >

</style>