/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import $ from 'jquery';
import { createApp } from 'vue';

/**
 * Import components
 */
import NavPrimary from './../../views/header/NavPrimary.vue';
import News from './../../views/main/news/News.vue';
import Recipe from './../../views/main/recipe/Recipe.vue';
import RecipesList from './../../views/main/recipesList/RecipesList.vue';

/**
 * Import variables
 */
import { menuSelected, mobileScreens, recipeSelected } from './variables';

/**
 * Write any other JavaScript below
 */

+(function () {

  /**
   * Mount Vue components
   */
  createApp(NavPrimary).mount('#nav-primary');
  createApp(News).mount('#news__container');
  createApp(RecipesList).mount('#recipes');
  createApp(Recipe).mount('#recipe');





  /**
   * Scrolls
   */
  //When users click some link, it moves to the section of the page
  $('a').on('click', function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });

  //When users click input searcher, it moves to the section of the page
  $('.nav-primary__content input').on('click', function(){
    $('html, body').animate({
        scrollTop: $('#recipes').offset().top
    }, 500);

  });

  //Button moves you to the top of the page
  $('#buttonTop').on('click', function() {
    $('html, body').animate({
      scrollTop: 0, 
  }, 500, 'swing');
  })  

  //Show the button when scrolls down 20px
  $(window).on('scroll', function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $('#buttonTop').css('display', 'block');
    } else {
      $('#buttonTop').css('display', 'none');
    }
  });





  /**
   * Fixed elements
   */
  //Fix searcher on top when scrolls
  let stickyOffset = $('#nav-primary').offset().top;

  $(window).on('scroll', function () {
    let sticky = $('#nav-primary');
    let scroll = $(window).scrollTop();

    (scroll >= stickyOffset) ? sticky.addClass('searcherFixed') : sticky.removeClass('searcherFixed');
  });



  /**
   * Change the value of the variables that allow you to filter recipes
   */
  //Save the id of menu clicked
  $('.menu__container a').on('click', function(e) {
    menuSelected.value = e.currentTarget.id;
  });

  //Save the id of recipe clicked
  $('a.card').on('click', function(e) {
    $('#recipe').css('visibility', 'visible');
    recipeSelected.value = e.currentTarget.id.slice(7);
  });










    




















  /**
   * Logo
   */
  let logo = document.querySelector('.svgLogo');
  logo.style.color = '#FFF';
  if (!mobileScreens) {
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
   *//*
  let buttonDropdown = document.querySelector('.dropdown__button');
  let navDropdown = document.querySelector('#nav-primary');
  let closeDropdown = document.querySelector('#close-dropwdown');

  buttonDropdown.addEventListener('click', () => {
    navDropdown.style.width = '100%';
  });

  closeDropdown.addEventListener('click', () => {
    navDropdown.style.width = '0%';
  });

 */
  
  
})();


