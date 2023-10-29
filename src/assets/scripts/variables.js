//JSON
import categoriesJson from '../json/categories.json';
import measuresJson from '../json/measures.json';
import menuJson from '../json/menu.json';
import recipesJson from '../json/recipes.json';

//Functions Vue
import { ref } from "vue";

//variables
let isReset = false;
const searcher = ref();
const categorySelected = ref([]);
const urlImages = "https://raw.githubusercontent.com/mherrerabl/UOC_Eines_HTML_CSS_II_PAC1/main/src/assets/images/recipes/";
const mobileWidth = 420;
const tabletWidth = 800;
let smallScreen = window.screen.width > tabletWidth ? false : true;

export { categoriesJson, categorySelected, isReset, measuresJson, menuJson, mobileWidth, recipesJson, searcher, smallScreen, tabletWidth, urlImages };

