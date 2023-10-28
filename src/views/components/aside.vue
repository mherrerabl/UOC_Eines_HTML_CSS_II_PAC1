<template>
    <div>
        <h2 class="title--level-secundary">Nuevas recetas</h2>

        <swiper :slides-per-view="1" :pagination="true" navigation v-if="smallScreens">
            <swiper-slide v-for="(recipe) in recipes.slice(0,4)" :key="recipe.id">
                <card :recipe="recipe"/>
            </swiper-slide>
        </swiper>
        
        <ul v-else>
            <li v-for="(recipe) in recipes.slice(0,4)" :key="recipe.id">
                <card :recipe="recipe"></card>
            </li>
        </ul>
    </div>
</template>

<script>
//Components
import Card from './card';

//SwiperJS
import SwiperCore, { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

//Swiper styles
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';

//Functions
import { sortRecipes } from "./../../assets/scripts/functions";

export default {
    components: { Swiper, SwiperSlide, Card },
    setup() {            
        //Install Swiper components
        SwiperCore.use([Navigation, Pagination, A11y]);

        let recipes = sortRecipes();
        let smallScreens = (window.screen.width > 850) ? false : true;

        return { recipes, smallScreens }
    }
}
</script>
