
<template>
    <div>
        <h2 class="title--level-secundary">Recetario completo</h2>
        <div class="card-container">
            <a class="card" v-for="(recipe, key) in recipes" :key="recipe.id">
                <h3 class="title--level-third">{{ recipe.name }}</h3>
                <picture :class="'recipe-'+key+'-img'">
                    <source srcset="./../../assets/images/recipes/logo.png?as=webp" type="image/webp">
                    <img src="./../../assets/images/recipes/logo.png" alt="">
                    <!--
                    <source :srcset="recipe.img.url+'?as=webp'" type="image/webp">
                    <img :src="recipe.img.url" :alt="recipe.img.alt">
                    -->
                </picture>
            </a>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: 'recipesList',
        props: ['recipes'],
        setup() {

        }
    })
</script>