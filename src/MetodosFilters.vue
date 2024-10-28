<template>
    <div>
        <h1>Filters</h1>
        <ul >
            <li v-for="num in numeros" :key="num">
                Num: {{ num }}, <br>
                Doble: {{ $filters.getNumeroDoble(num) }}
            </li>
        </ul>
        <ul >
            <li v-for="name in nombres" :key="name">
                Nombre: {{ name }} <br>
                Mayus: {{ $filters.mayuscula(name)}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MetodosFilters",
        data() {
            return {
                nombres: ["Ari", "Sofi", "Dragos", "Paco"],
                numeros: [2 ,50 ,33 ,26]
            }
        },
    }
</script>

