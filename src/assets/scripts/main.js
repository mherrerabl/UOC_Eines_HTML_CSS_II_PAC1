/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Aside from '../../views/components/Aside.vue';
import Breadcrumbs from './../../views/components/Breadcrumbs.vue';
import MainContent from './../../views/components/MainContent.vue';
import Menu from './../../views/components/Menu.vue';
import NavPrimary from './../../views/components/NavPrimary.vue';
import Recipe from './../../views/components/Recipe.vue';
import RecipesList from './../../views/components/RecipesList.vue';

/**
 * Import variables
 */
import { smallScreen } from './variables';

/**
 * Write any other JavaScript below
 */

+(function () {

  /**
   * Vue Routes
   */
  const routes = [
    { path: '', name: 'inicio', component: Menu },
    { path: '/', redirect: '' },
    { path: '/recetario', name: 'recetario', component: RecipesList },
    { path: '/recetario/:id', name: 'receta', component: Recipe },
    { path: '/menu/:name', name: 'menu', component: RecipesList },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    }
  });

  /**
   * Mount Vue components
   */
  createApp(NavPrimary).use(router).mount('#nav-primary');
  createApp(Breadcrumbs).use(router).mount('#breadcrumbs');
  createApp(MainContent).use(router).mount('#main-content');
  createApp(Aside).use(router).mount('#aside-content');



  /**
   * Logo
   */
  let logo = document.querySelector('.svgLogo');
  logo.style.color = '#FFF';
  if (!smallScreen) {
    logo.setAttribute('width', 300);
    logo.setAttribute('height', 125);
  }

  const hover = (e) => {
    (e.type === 'mouseenter') ? logo.style.color = '#4F4A45' : logo.style.color = '#FFF';
  }

  logo.addEventListener('mouseenter', hover);
  logo.addEventListener('mouseleave', hover);

  /**
   * Dropdown nav
   */
  let buttonDropdown = document.querySelector('.dropdown__button');
  let navDropdown = document.querySelector('#nav-primary');
  let closeDropdown = document.querySelector('#close-dropwdown');

  buttonDropdown.addEventListener('click', () => {
    navDropdown.style.width = '100%';
  });

  closeDropdown.addEventListener('click', () => {
    navDropdown.style.width = '0%';
  });



})();


