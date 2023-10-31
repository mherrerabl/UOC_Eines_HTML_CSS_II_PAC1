//JSON
import categoriesJson from '../json/categories.json';
import measuresJson from '../json/measures.json';
import menuJson from '../json/menu.json';
import recipesJson from '../json/recipes.json';

//Functions Vue
import { ref } from "vue";

//variables
const searcher = ref();
const categorySelected = ref([]);
const menuSelected = ref();
const recipeSelected = ref();
const urlImages = "https://raw.githubusercontent.com/mherrerabl/UOC_Eines_HTML_CSS_II_PAC1/main/src/assets/images/recipes/";
const mobileWidth = 420;
const tabletWidth = 800;
let mobileScreens = window.screen.width > mobileWidth ? false : true;
let tabletScreens = window.screen.width > tabletWidth ? false : true

export { categoriesJson, categorySelected, measuresJson, menuJson, menuSelected, mobileScreens, mobileWidth, recipeSelected, recipesJson, searcher, tabletScreens, tabletWidth, urlImages };

