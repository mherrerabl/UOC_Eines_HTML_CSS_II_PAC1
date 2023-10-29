<template>
    <router-link :to="'/recetario/'+recipe.id" class="card">
        <figure class="card__container-title">  
          <picture>                 
              <source :srcset="urlImages+recipe.img.url+'?as=webp'" type="image/webp">
              <img :src="urlImages+recipe.img.url" :alt="recipe.img.alt">
          </picture>
        <figcaption class="title--level-third">{{ recipe.name }}</figcaption>
        </figure>
    </router-link>
</template>

<script>
//Variables
import { urlImages } from "./../../assets/scripts/variables";
export default {
  props: ["recipe"],
  setup(props) {
    return { urlImages };
  },
};
</script>

