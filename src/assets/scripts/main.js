/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import aside from './../../views/components/aside.vue';
import breadcrumbs from './../../views/components/breadcrumbs.vue';
import categories from './../../views/components/categories.vue';
import header from './../../views/components/header.vue';
import main from './../../views/components/main.vue';
import menu from './../../views/components/menu.vue';
import nav from './../../views/components/nav.vue';
import recipe from './../../views/components/recipe.vue';
import recipesList from './../../views/components/recipesList.vue';


/**
 * Write any other JavaScript below
 */

+( function() {
  const routes = [
    { path: '', component: menu },
    { path: '/', redirect: '' },
    { path: '/categorias', name: 'categorias', component: categories, query: { name: 'Categorias' } },
    { path: '/recetario', name: 'recetario', component: recipesList },
    { path: '/menu', redirect: '', children: [{
      path: ':name', name: 'menu', component: recipesList 
    }]},
    { path: '/receta/:id', name: 'receta', component: recipe },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  });

  createApp(header).use(router).mount('#header-content');
  createApp(nav).use(router).mount('#nav-primary');
  createApp(breadcrumbs).use(router).mount('#breadcrumbs');
  //createApp(recipe).mount('#recipe-container');
  //createApp(recipesList).use(router).mount('#recipes-list');
  createApp(main).use(router).mount('#main-content');
  createApp(aside).use(router).mount('#aside-content');
} )();


