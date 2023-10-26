
<template>
    <ul class="breadcrumbs center-content--padding-50">
        <li><router-link to="/" class="breadcrumbs-links">Inicio</router-link></li>
        <li v-for="(route, index) in updateArrayRoute" :key="index"><span class="breadcrumbs-separator">></span><router-link :to="(route.params !== undefined) ? '/'+route.path+'/'+route.params.name :'/'+route.path" class="breadcrumbs-links">{{route.name}}</router-link></li>
    </ul>
</template>

<script>
import { useRoute } from 'vue-router';
import { capitalize, ref, watch } from "vue";
    export default {
        name: 'Breadcumbs',
        data() {
            return {
                arrayRoute: [],
                //haveParams: (route.params !== undefined) ? route.path/rout.params.name : 
            }
        },
        methods: {
            capitalize(text) {
                const firstLetter = text.charAt(0);
                const rest = text.slice(1);
                return firstLetter.toUpperCase() + rest;
            }
        },
        computed: {
            updateArrayRoute() {
                this.arrayRoute = [];
                let paths = this.$route.path.slice(1).split("/");

                if (this.$route.name !== undefined) {
                    this.arrayRoute.push({ name: this.capitalize(this.$route.name), path: paths[0] });
                } 
                if (this.$route.params.name !== undefined) {
                    this.arrayRoute.push({ name: this.capitalize(this.$route.params.name), path: paths[0], params: { name: paths[1] }});
                }
                    console.log(this.arrayRoute[0]);

                return this.arrayRoute;
            }
        }
    }
    /**
     <li v-for="(route, index) in $route" :key="index"><router-link to="/">{{route.path}}</router-link></li>
     */
</script>