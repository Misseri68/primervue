<template>
    <div>
      
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/cine">Cine</router-link>
            </li>
            <li>
                <router-link to="/musica">Musica</router-link>
            </li>
            <li>
                <router-link to="/ciclovida">Ciclo Vida</router-link>
            </li>
            <li>
                <router-link to="/directivas">Directivas</router-link>
            </li>
            <li>
                <router-link to="/conmutada">Conmutada</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: "MenuComponent",
    data() {
        return {
            key: "hola"
        }
    },
}
</script>

<style>
ul#menu li {
    display: inline;
    padding-left: 5px;
    padding-right: 5px;

}
</style>