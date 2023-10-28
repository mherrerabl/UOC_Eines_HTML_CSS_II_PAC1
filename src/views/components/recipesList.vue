
<template>
    <div>
        <h2 class="title--level-secundary">{{ title }}</h2>
        <Searcher/>
        <categoriesList/>
        <ul class="wrapper-card" v-if="recipes.length > 0">
            <li class="card" v-for="(recipe) in recipes" :key="recipe.id">
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
import Card from './card.vue';
import CategoriesList from './categoriesList.vue';
import Searcher from './Searcher.vue';

//Variables
import { categorySelected, searcher } from '../../assets/scripts/variables';

//Functions
import { filteredRecipes } from '../../assets/scripts/functions';

export default {
    components: { Card, CategoriesList, Searcher },
    setup() {
        let route = useRoute();
        let title = ref();
        let recipes = ref([]);

        title.value = (route.params.name !== undefined) ? capitalize(route.params.name) : 'Recetario';
        const changeTitle = () => {
            if (searcher.value === undefined) {                
                title.value = (route.params.name !== undefined) ? capitalize(route.params.name) : 'Recetario';
            } else if (searcher.value === '') {
                searcher.value = undefined;
            } else {
                title.value = searcher.value;
            }
        }

        categorySelected.value = undefined;
        recipes.value = filteredRecipes(route, categorySelected);

        watch(searcher, changeTitle);
        watch(searcher, () => {            
            recipes.value = filteredRecipes(route);
        });
        watch(categorySelected, () => {
            recipes.value = filteredRecipes(route);
        });
  
        return { filteredRecipes, title, categorySelected, recipes }
    }
}
</script>