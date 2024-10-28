<template>
    <div>
        <h1>Hola Mundo!</h1>
        <div>
            <h3>Nombre: {{ nombre }}</h3>
            <h4>Numero: {{ numero }}</h4>
        </div>

    </div>
</template>

<script>
export default {
    name: 'HolaMundo',
    data() {
        return {
            nombre: "Alumno",
            numero: 14,
            miArray: [],
            objeto: {}
        }
    }
}
</script>

<style>
    @import './../assets/css/estilos.css';
</style>