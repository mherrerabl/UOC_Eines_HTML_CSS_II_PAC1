<template>
    <router-link :to="'/recetario/'+recipe.id" class="card">
        <div class="card__wrapper-title">
            <h3 class="title--level-third">{{ recipe.name }}</h3>
        </div>
        <picture>                 
            <source :srcset="urlImages+recipe.img.url+'?as=webp'" type="image/webp">
            <img :src="urlImages+recipe.img.url" :alt="recipe.img.alt">
        </picture>
    </router-link>
</template>

<script>
//Variables
import { urlImages } from './../../assets/scripts/variables';
export default {
    props: ['recipe'],
    setup(props) {
        return { urlImages }
    },
}
</script>

