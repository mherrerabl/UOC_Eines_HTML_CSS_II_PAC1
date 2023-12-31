/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';


/**
 * Import components
 */
import News from './../../views/main/news/News.vue';
import Recipe from './../../views/main/recipe/Recipe.vue';
import RecipesList from './../../views/main/recipes/RecipesList.vue';

/**
 * Import variables
 */
import { $, categorySelected, menuSelected, mobileScreens, searcher, tabletScreens, title } from './variables';

/**
 * Import functions
 */
import { capitalize, createApp } from './functionsVue';


/**
 * Write any other JavaScript below
 */

+(function () {

  /**
   * Mount Vue components
   */
  createApp(News).mount('#news');
  createApp(RecipesList).mount('#recipes__list');
  createApp(Recipe).mount('#recipe');



  /**
   * Change the value of the variables that allow you to filter recipes
   */
  //Save the id of menu clicked and change the title of Recipes section
  $('.menu__container a').on('click', function(e) {
    searcher.value = undefined;
    menuSelected.value = e.currentTarget.id;
    changeTitle(title);
    $('.category').css('display', 'block');
  });

  //Save array of categories selected
  $('.category__form input').on('click', function(e) {
    categorySelected.value = $("input:checkbox:checked").map(function(){
      return $(this).val();
    }).get();
  });

 //Save input value and change title
  $('.searcher__input').on('input', function() {
    searcher.value = $(this).val();
    changeTitle();
    if (searcher.value == '') {
      $('.category').css('display', 'block');
    } else {
      $('.category').css('display', 'none');
    }
  });



  /**
   * Logo
   */
  $('.svgLogo').css('color', '#FFF');

  if (!tabletScreens) {
    $('.svgLogo').attr('width', '300');
    $('.svgLogo').attr('height', '125');
  }

  $('.svgLogo').on('mouseenter', function() {
    $('.svgLogo').css('color', '#4F4A45')
  });
  $('.svgLogo').on('mouseleave', function() {
    $(this).css('color', '#FFF')
  });



  /**
   * Scrolls
   */
  //When users click some link, it moves to the section of the page
  $('.menu__container a').on('click', function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 100
    }, 500);
    return false;
  });

  //When users click input searcher, it moves to the section of the page
  $('.nav-primary__searcher input').on('click', function(){
    $('html, body').animate({
        scrollTop: $('#recipes').offset().top - 50
    }, 500);
    $('.category').css('display', 'none');
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

  //Focus card when scroll on small screens
  $(window).on('scroll', function () {
    if(mobileScreens) {
      $('.card__container').each(function () {
          if (isOnViewport(this) === true) {
              $(this).addClass('card--state-hover');
          } else {
            $(this).removeClass('card--state-hover');
          }
      });
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

    (scroll >= stickyOffset) ? sticky.addClass('searcher--position-fixed') : sticky.removeClass('searcher--position-fixed');
  });


  /**
   * Functions
   */
  //Detect if an element HTML is on viewport
  function isOnViewport(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  //Change title
  function changeTitle(title) {
    if (searcher.value === undefined || searcher.value === '') {    
        title = (menuSelected.value !== undefined) ? capitalize(menuSelected.value) : 'Recetario';
    } else {
        title = searcher.value;
    }
    $('#recipes__title').text(title);
}

})();