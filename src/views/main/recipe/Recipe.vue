<template>
    <div class="recipe__container center-content--padding-25-50" v-if="recipe !== undefined">
        <div class="recipe__content paper">
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
                <source :srcset="urlImages+'webp/'+recipe.id+'/img_'+recipe.id+'_690.webp'" type="image/webp">
                <img :src="urlImages+'jpg/'+recipe.id+'/img_'+recipe.id+'_690.jpg'" :alt="recipe.name">
            </picture>
        </div>
    </div>
</template>

<script>
//Functions Vue
import { ref, watch } from "vue";

//Variables
import { $, urlImages, recipeSelected } from "./../../../assets/scripts/variables";

//Functions
import { searchCategory, searchMeasure, searchMenu, searchRecipe } from './../../../assets/scripts/functionsVue';

export default {
    setup() {
        let recipe = ref(searchRecipe(recipeSelected.value));

        watch(recipeSelected, () => {
            recipe.value = searchRecipe(recipeSelected.value);
            document.getElementById('recipe').style.visibility = 'visible';
    
            $('html, body').animate({
                scrollTop:  $( '#recipe' ).offset().top - 100
            }, 500);
        });

        return { recipe, searchMenu, searchCategory, urlImages, searchMeasure, recipeSelected }
    }
}
</script>
