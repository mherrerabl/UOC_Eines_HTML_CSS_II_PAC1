<template>
    <div>
        <h2 class="title--level-secundary">Nuevas recetas</h2>

        <swiper :slides-per-view="1" :pagination="true" navigation v-if="smallScreens">
            <swiper-slide v-for="(recipe, key) in sortRecipes.slice(0,4)" :key="recipe.id">
                <router-link to="/">
                    <h3 class="title--level-third">{{ recipe.name }}</h3>
                    <picture :class="'recipe-'+key+'-img'">
                        <source srcset="./../../assets/images/logo.png?as=webp&width=150" type="image/webp">
                        <img src="./../../assets/images/logo.png?width=150" alt="">
                    </picture>
                </router-link>
            </swiper-slide>
        </swiper>
        
        <ul v-else>
            <li v-for="(recipe, key) in sortRecipes.slice(0,4)" :key="recipe.id">
                <router-link to="/">
                    <h3 class="title--level-third">{{ recipe.name }}</h3>
                    <picture :class="'recipe-'+key+'-img'">
                        <source srcset="./../../assets/images/logo.png?as=webp&width=150" type="image/webp">
                        <img src="./../../assets/images/logo.png?width=150" alt="">
                    </picture>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import recipesJson from "./../../assets/json/recipes.json";
   
    /**swiper */
    import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
    import { Swiper, SwiperSlide } from "swiper/vue";

    // Import Swiper styles
    import "swiper/swiper.scss";
    import "swiper/components/navigation/navigation.scss";
    import "swiper/components/pagination/pagination.scss";

    
    

    export default {
        components: { Swiper, SwiperSlide },
        data() {
            return {
                recipes: recipesJson
            }
        }, 
        setup() {
            let smallScreens = (window.screen.width > 768) ? false : true;
            
            //Install Swiper components
            SwiperCore.use([Navigation, Pagination, A11y]);

            let docWidth = document.documentElement.offsetWidth;

                [].forEach.call(
                document.querySelectorAll('*'),
                function(el) {
                    if (el.offsetWidth > docWidth) {
                    console.log(el);
                    }
                }
                );
            return { smallScreens, docWidth }
        },
        computed: {
            sortRecipes() {
                return this.recipes.sort((a,b) => {
                   let dateB = `${b.publication_date.slice(3,5)}/${b.publication_date.slice(0,2)}/${b.publication_date.slice(6,10)}`;
                   let dateA = `${a.publication_date.slice(3,5)}/${a.publication_date.slice(0,2)}/${a.publication_date.slice(6,10)}`;
                    return new Date(dateB).getTime() - new Date(dateA).getTime();
                });
            }
        },

  methods: {
    onSwiper(swiper) {
      // console.log(swiper)
    },
    onSlideChange() {
      // console.log('slide change')
    },
  },
    }

</script>
