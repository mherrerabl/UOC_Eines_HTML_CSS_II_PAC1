
<template>
    <div class="center-content--padding-25-50">
        <h2 class="title--level-secundary blank-space--bottom-15">{{ title }}</h2>
        <CategoriesList/>

        <ul v-if="recipes.length > 0" class="list__container">
            <li v-for="(recipe) in recipes" :key="recipe.id">
                <card :recipe="recipe"></card>
            </li>
        </ul>
        <p v-else>No hemos encontrado ninguna receta de esa categoría.</p>
    </div>
</template>

<script>
//Functions Vue
import { capitalize, ref, watch } from 'vue';
import { useRoute } from 'vue-router';


//Components
import Card from './../components/Card.vue';
import CategoriesList from './../components/CategoriesList.vue';

//Variables
import { categorySelected, searcher, tabletScreens, mobileScreens, menuSelected } from './../../../assets/scripts/variables';

//Functions
import { filteredRecipes } from './../../../assets/scripts/functions';

export default {
    components: { Card, CategoriesList },
    setup() {
        let route = useRoute();
        let title = ref();
        let recipes = ref([]);

        title.value = (menuSelected.value !== undefined) ? capitalize(menuSelected.value) : 'Recetario';
        const changeTitle = () => {
            if (searcher.value === undefined) {                
                title.value = (menuSelected.value !== undefined) ? capitalize(menuSelected.value) : 'Recetario';
            } else if (searcher.value === '') {
                searcher.value = undefined;
            } else {
                title.value = searcher.value;
            }
        }

        categorySelected.value = undefined;
        recipes.value = filteredRecipes();

        watch(searcher, changeTitle);
        watch(searcher, () => {
            recipes.value = filteredRecipes();
        });
        watch(categorySelected, () => {
            recipes.value = filteredRecipes();
        });

        watch(menuSelected, changeTitle);
        watch(menuSelected, () => {
            recipes.value = filteredRecipes();
        });

  
        return { filteredRecipes, title, categorySelected, recipes, tabletScreens, mobileScreens }
    }
}
</script>