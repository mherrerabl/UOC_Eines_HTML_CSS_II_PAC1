
<template>
    <ul v-if="recipes.length > 0" class="list__container">
        <li v-for="(recipe) in recipes" :key="recipe.id">
            <card :recipe="recipe"></card>
        </li>
    </ul>
    <p v-else>No hemos encontrado ninguna receta de esa categoría.</p>
</template>

<script>
//Functions Vue
import { ref, watch } from 'vue';


//Components
import Card from './../components/Card.vue';

//Variables
import { categorySelected, searcher, tabletScreens, mobileScreens, menuSelected } from './../../../assets/scripts/variables';

//Functions
import { filteredRecipes } from './../../../assets/scripts/functionsVue';

export default {
    components: { Card },
    setup() {
        let recipes = ref([]);

        recipes.value = filteredRecipes();

        watch(searcher, () => {
            recipes.value = filteredRecipes();
        });
        watch(categorySelected, () => {
            recipes.value = filteredRecipes();
        });

        watch(menuSelected, () => {
            recipes.value = filteredRecipes();
        });

  
        return { filteredRecipes, categorySelected, recipes, tabletScreens, mobileScreens }
    }
}
</script>