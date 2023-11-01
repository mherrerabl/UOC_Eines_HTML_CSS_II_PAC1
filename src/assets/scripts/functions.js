//Variables
import { categoriesJson, categorySelected, measuresJson, menuJson, menuSelected, recipesJson, searcher } from "./variables";

//Functions Vue
import { capitalize } from "vue";

//Compare numbers (id)
const compareNumbers = (num1, num2) => {
    return (num1 === num2) ? true : false;
}

//Look for in the arrayObj if there are any param 'name' that matches with the string 'text'.
const compareMenus = (id, text, arrayObj) => {
    let array = arrayObj.filter(obj => obj.name === text )[0];
    return compareNumbers(array.id, id);
} 

//Look for in the arrayObjCategories if there are any param 'name' that matches with some string of arrayObjSelected.
//If not found, return false.
//If there are any matches, iterated the result (variable newArrayObj) to looking for if param 'id' match with 'id' of newArrayObj.
//If found, return true.
const compareCategories = (id, arrayObjSelected, arrayObjCategories) => {
    let newArrayObj = arrayObjCategories.filter(({ name }) => 
        arrayObjSelected.some(x => {
            if (x == "Mediterranea") { x = "mediterránea"; }
            return x === name.toLowerCase();
        })
    );

    if (newArrayObj.length <= 0) { return true; } //Allow show all recipes

    for (const item of newArrayObj) {
        if(compareNumbers(item.id, id)){
            return true;
        }
    }            
    return false;
}

//Return array of objects that recipes sorted by descendant publication date
const sortRecipes = () => {
    return recipesJson.sort((a,b) => {
        let dateB = `${b.publication_date.slice(3,5)}/${b.publication_date.slice(0,2)}/${b.publication_date.slice(6,10)}`;
        let dateA = `${a.publication_date.slice(3,5)}/${a.publication_date.slice(0,2)}/${a.publication_date.slice(6,10)}`;
        return new Date(dateB).getTime() - new Date(dateA).getTime();
    });
}

//Return array of objects that recipes 'menu' match with param 'menu' (string)
const filterByMenu = (recipes, menu) => {  
    return recipes.filter((recipe) => {
        return compareMenus(recipe.menu, menu, menuJson); 
    });

}

//Return array of objects that recipes 'category' match with param 'category'
const filterByCategory = (recipes, categories) => {
    return recipes.filter((recipe) => {
        return compareCategories(recipe.category, categories, categoriesJson);
    });
}

//Return array of objects that recipes 'name' match with param 'name'
const filterByText = (name) => {
    let recipesAll = sortRecipes();
    return recipesAll.filter((recipe) => recipe.name.toLowerCase().includes(name.toLowerCase()));
}

//Executate the functions filters and return and object of recipes
const filteredRecipes = () => {
    let recipes = sortRecipes();

    if (menuSelected.value !== undefined) {
        recipes = filterByMenu(recipes, menuSelected.value);
    }

    if(categorySelected.value !== undefined) {
        if (categorySelected.value.length > 0) {
            recipes = filterByCategory(recipes, categorySelected.value);      
        }
    }
    

    if (searcher.value !== undefined && searcher.value !== '') {
        recipes = filterByText(searcher.value);
    }

    return recipes;
}



/**
 * Functions to create dynamically a Recipe
 */
//Receive a number (id) and return the name of menu
const searchMenu = (num) => {
    return capitalize((menuJson.filter(({ id }) => id === num))[0].name);
}

//Receive a number (id) and return the categoy name
const searchCategory = (num) => {
    return ((categoriesJson.filter(({ id }) => id === num))[0].name).toLowerCase();
}

//Receive a number (id), if want long word or abbreviation 
//and if want a plural or singular measure
const searchMeasure = (num, typeLongWord, theNumberWord) => {
    let measure = (measuresJson.filter(({ id }) => id === num))[0];

    if (measure === undefined) {
        return "";
    }
    return measure[`${typeLongWord}`][`${theNumberWord}`]+' de';
}

//Receive a number (id) and return an recipe object
const searchRecipe = (idParam) => {
    return (recipesJson.filter(({id}) => id.toString() === idParam))[0];
}

export { capitalize, changeRoute, filteredRecipes, reset, searchCategory, searchMeasure, searchMenu, searchRecipe, sortRecipes };

