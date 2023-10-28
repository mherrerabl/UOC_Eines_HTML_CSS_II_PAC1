//Variables
import { categoriesJson, categorySelected, measuresJson, menuJson, recipesJson, searcher } from "./variables";

//Functions Vue
import { capitalize } from "vue";

const compareArrayNumber = (num, param, arrayJson) => {
    let array = [];
    array = arrayJson.filter(obj => obj.name === param);
    return (array[0].id === num) ? true : false;            
} 

const compareArrays = (num, param, arrayJson) => {
    let array = [];
 
    array = arrayJson.filter(({ name }) => 
        param.some(x => x === name)
    );

    if (array.length <= 0) {
        return true;
    }

    for (const item of array) {
        if (item.id === num) {
            return true;
        }
    }            
    return false;
}

const changeRoute = (router, route, searcher) => {
    if(searcher.value !== undefined && searcher.value !== '') {
        if (route.params.name !== undefined) {
            router.push({ path: route.path });
        } else {
            router.push({ path: '/recetario' });
        }
        
    }
}

const sortRecipes = () => {
    return recipesJson.sort((a,b) => {
        let dateB = `${b.publication_date.slice(3,5)}/${b.publication_date.slice(0,2)}/${b.publication_date.slice(6,10)}`;
        let dateA = `${a.publication_date.slice(3,5)}/${a.publication_date.slice(0,2)}/${a.publication_date.slice(6,10)}`;
        return new Date(dateB).getTime() - new Date(dateA).getTime();
    });
}

const filterByMenu = (route) => {  
    if (route.params.name !== undefined) {
        return recipes.filter((recipe) => {
            return compareArrayNumber(recipe.menu, route.params.name, menuJson); 
        })
    }
}

const filterByCategory = (category) => {
    return recipes.filter((recipe) => {
        return compareArrays(recipe.category, category.value, categoriesJson);
    })
}

const filterByText = (text) => {
    return recipes.filter((recipe) => recipe.name.toLowerCase().includes(text.toLowerCase()));
}

const filteredRecipes = (route) => {
    recipes = recipesJson;
    recipes = sortRecipes();

    if (route.name !== undefined) {
        if (route.name === 'menu') {
            recipes = filterByMenu(route);
        }
    }

    if (categorySelected.value !== undefined && categorySelected.value !== '') {
        recipes = filterByCategory(categorySelected);      
    }

    if (searcher.value !== undefined && searcher.value !== '') {
        recipes = filterByText(searcher.value);
    }

    return recipes;
}

const reset = () => {
    categorySelected.value = [];
    searcher.value = undefined;
}

const searchMenu = (num) => {
    return capitalize((menuJson.filter(({ id }) => id === num))[0].name);
}

const searchCategory = (num) => {
    return ((categoriesJson.filter(({ id }) => id === num))[0].name).toLowerCase();
}

const searchMeasure = (num, typeLongWord, theNumberWord) => {
    let measure = (measuresJson.filter(({ id }) => id === num))[0];

    if (measure === undefined) {
        return "";
    }
    return measure[`${typeLongWord}`][`${theNumberWord}`]+' de';
}

const searchRecipe = (idParam) => {
    return (recipesJson.filter(({id}) => id.toString() === idParam))[0];
}

export { changeRoute, filteredRecipes, reset, searchCategory, searchMeasure, searchMenu, searchRecipe, sortRecipes };
