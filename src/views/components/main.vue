<template>
    <router-view :recipes="recipes"></router-view>
</template>

<script>
import recipesJson from './../../assets/json/recipes.json';
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'mainContainer',   
    setup() {
        let recipes = recipesJson;
        const sortRecipes = () => {
            return recipes.sort((a,b) => {
                let dateB = `${b.publication_date.slice(3,5)}/${b.publication_date.slice(0,2)}/${b.publication_date.slice(6,10)}`;
                let dateA = `${a.publication_date.slice(3,5)}/${a.publication_date.slice(0,2)}/${a.publication_date.slice(6,10)}`;
                return new Date(dateB).getTime() - new Date(dateA).getTime();
            });
        }
        return { sortRecipes, recipes }
    }
})


</script>
