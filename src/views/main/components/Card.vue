<template>
  <a class="card" :id="'recipe_'+recipe.id">
    <div class="card__container">  
          <picture>
            <img :src="urlImages+'jpg/'+recipe.id+'/img_'+recipe.id+'_690.jpg'"
                :srcset="urlImages+'webp/'+recipe.id+'/img_'+recipe.id+'_420.webp 420w,'+
                        urlImages+'webp/'+recipe.id+'/img_'+recipe.id+'_690.webp 690w,'+
                        urlImages+'webp/'+recipe.id+'/img_'+recipe.id+'_900.webp 900w'"
                sizes="(max-width: 419px) 100vw,
                        (min-width: 799px) 50vw,
                        (min-width: 800px) 25vw"
              :alt="recipe.name">
          </picture>
        <div class="card__information">
          <div class="card__category">
            <p class="card__category__text">{{ capitalize(searchCategory(recipe.category)) }}</p>
          </div>
           <h4 class="card__title">{{ recipe.name }}</h4>
        </div>
      </div>
  </a>
</template>

<script>
//Variables
import { urlImages } from "./../../../assets/scripts/variables";

//Functions
import { searchCategory, capitalize } from "./../../../assets/scripts/functions";

export default {
  props: ["recipe"],
  setup(props) {
    return { urlImages, searchCategory, capitalize };
  },
};

/*
<router-link :to="'/recetario/'+recipe.id" class="card">
        <figure class="card__container-title">  
          <picture>
            <img :src="urlImages+'jpg/'+recipe.id+'/img_'+recipe.id+'_690.jpg'"
                :srcset="urlImages+'webp/'+recipe.id+'/img_'+recipe.id+'_420.webp 420w,'+
                        urlImages+'webp/'+recipe.id+'/img_'+recipe.id+'_690.webp 690w,'+
                        urlImages+'webp/'+recipe.id+'/img_'+recipe.id+'_900.webp 900w'"
                sizes="(max-width: 419px) 100vw,
                        (min-width: 799px) 50vw,
                        (min-width: 800px) 25vw"
              :alt="recipe.name">
          </picture>
        <figcaption class="title--level-third">{{ recipe.name }}</figcaption>
        </figure>
    </router-link>
*/
</script>

