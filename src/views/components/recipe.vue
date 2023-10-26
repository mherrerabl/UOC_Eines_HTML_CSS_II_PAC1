<template>
    <h2 class="title--level-secundary">{{ name }}</h2>
</template>

<script>
    import { recipesJson } from "./../../assets/json/recipes.json";
    import { measuresJson } from "./../../assets/json/measures.json";

    export default {
        components: {},
        data() {
            return {
                name: "prueba"
            }
        }
    }
</script>
