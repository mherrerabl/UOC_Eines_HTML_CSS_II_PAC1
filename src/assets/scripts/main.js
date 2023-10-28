/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import aside from '../../views/components/Aside.vue';
import breadcrumbs from './../../views/components/breadcrumbs.vue';
//import categoriesList from './../../views/components/categoriesList.vue';
import headerContent from './../../views/components/headerContent.vue';
import mainContent from './../../views/components/mainContent.vue';
import menu from './../../views/components/menu.vue';
import navPrimary from './../../views/components/navPrimary.vue';
//import app from "./../../views/app.vue";
import recipe from './../../views/components/recipe.vue';
import recipesList from './../../views/components/recipesList.vue';

/**
 * Write any other JavaScript below
 */

+( function() {
  const routes = [
    { path: '', name: 'inicio', component: menu },
    { path: '/', redirect: '' },
    { path: '/recetario', name: 'recetario', component: recipesList },
    { path: '/recetario/:id', name: 'receta', component: recipe },
    { path: '/menu/:name', name: 'menu', component: recipesList },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    }
  });

  
  createApp(headerContent).use(router).mount('#header-content');
  createApp(navPrimary).use(router).mount('#nav-primary');
  createApp(breadcrumbs).use(router).mount('#breadcrumbs');
  //createApp(recipe).use(router).mount('#recipe-container');
  //createApp(recipesList).use(router).mount('#recipes-list');
  createApp(mainContent).use(router).mount('#main-content');
  createApp(aside).use(router).mount('#aside-content');

} )();


