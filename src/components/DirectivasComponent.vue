<template>
    <div>
        <h1>Ejemplo directivas</h1>
        <h1>{{ $data }}</h1>
        <label>Introduzca un numero</label>
        <input type="number" v-model="numero"/>
        <h2 v-if="numero > 0 ">POSITIVO</h2>
        <h2 v-else-if="numero < 0 ">NEGATIVO</h2>
        <h2 v-else>Neutral</h2>
        <ul v-if="array.length > 0">
            <li v-for="serie in array" :key="serie">
                {{ serie }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "DirectivasComponent",
        data() {
            return {
                numero: 0,
                array: [1,2,3,4,5,6]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>