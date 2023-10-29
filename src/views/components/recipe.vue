<template>
    <div class="recipe__container">
        <div class="recipe__content">
            <h2 class="title--level-secundary blank-space--bottom-25">{{ recipe.name }}</h2>
            <h3 class="title--level-third blank-space--bottom-25">{{ searchMenu(recipe.menu) }}</h3>
            <h4 class="title--level-fourth blank-space--bottom-25">Receta {{ searchCategory(recipe.category) }}</h4>

            <div class="blank-space--bottom-25">
                <p>Para {{ recipe.diners }} comensales</p>
                <p>Tiempo de elaboración: {{ recipe.elaboration_time }}</p>
            </div>
           

            <div class="blank-space--bottom-25">
                <h4 class="title--level-fourth blank-space--bottom-15">Ingredientes</h4>
                <ul>
                    <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient.quantity }} {{ (ingredient.quantity <= 1) ? searchMeasure(ingredient.measure, "longName", "singular") : searchMeasure(ingredient.measure, "longName", "plural") }} {{ ingredient.name }} </li>
                </ul>
            </div>
            <div class="blank-space--bottom-25">
                <h4 class="title--level-fourth blank-space--bottom-15">Descripción</h4>
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
