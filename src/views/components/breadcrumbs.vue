
<template>
    <ul class="breadcrumbs center-content--padding-25-50" v-if="$route.name !== 'inicio'">
        <li v-for="(route, index) in updateArrayRoute" :key="index">
            <router-link :to="route.path" class="links">
                {{ route.name }}
            </router-link>
            <span class="breadcrumbs-separator">></span>
        </li>

    </ul>
    
</template>

<script>
//Functions Vue
import { capitalize, computed } from "vue";
import { useRoute } from 'vue-router';

//Functions
import { searchRecipe } from '../../assets/scripts/functions';

export default {
    setup() {
        let arrayRoute = [];
        let route = useRoute();
        const updateArrayRoute = computed(() => {
            arrayRoute = [{name: 'Inicio', path: '/'}];
            let paths = route.path.slice(1).split('/');
            if (paths[0] !== '') {
                for (const item of paths) {
                    if (arrayRoute.length > 1) {
                        if (isNaN(item)) {
                            arrayRoute.push({ name: capitalize(item), path: arrayRoute[arrayRoute.length-1].path+'/'+item }) 
                        } else {
                            let recipe = searchRecipe(item);
                            arrayRoute.push({ name: recipe.name, path: arrayRoute[arrayRoute.length-1].path+'/'+item }) 
                        }
                        
                    } else {
                        arrayRoute.push({ name: capitalize(item), path: '/'+paths[0]})
                    }  
                }
            }
            return arrayRoute;
        });
        
        return { updateArrayRoute, searchRecipe }
    }
}
</script>