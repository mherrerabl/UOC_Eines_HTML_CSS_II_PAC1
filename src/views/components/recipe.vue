<template>
    <div class="recipe-book">
        <div class="recipe-content">
            <h2 class="title--level-secundary">{{ recipe.name }}</h2>
            <h3 class="title--level-third">{{ searchMenu(recipe.menu) }}</h3>
            <h4 class="title--level-fourth">Receta {{ searchCategory(recipe.category) }}</h4>

            <p>Para {{ recipe.diners }} comensales</p>
            <p>Tiempo de elaboración: {{ recipe.elaboration_time }}</p>

            <div>
                <h4 class="title--level-fourth">Ingredientes</h4>
                <ul>
                    <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient.quantity }} {{ (ingredient.quantity <= 1) ? searchMeasure(ingredient.measure, "longName", "singular") : searchMeasure(ingredient.measure, "longName", "plural") }} {{ ingredient.name }} </li>
                </ul>
            </div>
            <div>
                <h4 class="title--level-fourth">Descripción</h4>
                <p v-for="(paragraph, index) in recipe.description" :key="index" v-html="paragraph"></p>
            </div>

            <picture>                 
                <source :srcset="urlImages+recipe.img.url+'?as=webp'" type="image/webp">
                <img :src="urlImages+recipe.img.url" :alt="recipe.img.alt">
            </picture>
        </div>
    </div>
</template>

<script>
//Functions Vue
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

//Variables
import { urlImages } from "../../assets/scripts/variables";

//Functions
import { searchCategory, searchMeasure, searchMenu, searchRecipe } from '../../assets/scripts/functions';

export default {
    setup() {
        let route = useRoute();
        let recipe = ref(searchRecipe(route.params.id));

        watch(route, () => {
            recipe.value = searchRecipe(route.params.id);
        });

        return { recipe, searchMenu, searchCategory, urlImages, searchMeasure }
    }
}
</script>
