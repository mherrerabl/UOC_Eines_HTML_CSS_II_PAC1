<template>
  <div class="center-content--padding-25-50">
    <h2 class="title--level-secundary">Nuevas recetas</h2>

    <swiper :slides-per-view="(mobileScreens) ? 1 : (tabletScreens) ? 2 : 4" :pagination="true" :spaceBetween="(mobileScreens) ? 0 : 25">
      <swiper-slide v-for="recipe in recipes.slice(0, 4)" :key="recipe.id">
        <card :recipe="recipe" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
//Components
import Card from "./../components/Card.vue";

//SwiperJS
import SwiperCore, { A11y, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

//Swiper styles
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";

//Variables
import { tabletScreens, mobileScreens } from "./../../../assets/scripts/variables";

//Functions
import { sortRecipes } from "./../../../assets/scripts/functions";


export default {
  components: { Swiper, SwiperSlide, Card },
  setup() {
    //Install Swiper components
    SwiperCore.use([Pagination, A11y]);

    let recipes = sortRecipes();

    return { recipes, mobileScreens, tabletScreens };
  },
};
</script>
