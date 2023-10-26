
import { createStore } from 'vuex';
import { recipes } from "./../json/recipes.json";

export default createStore({
    state() {
      return {
        recipesList: recipes
      }
    },
    mutations: {
      sortRecipes() {
        state.recipesList.sort((a,b) => {
            let dateB = `${b.publication_date.slice(3,5)}/${b.publication_date.slice(0,2)}/${b.publication_date.slice(6,10)}`;
            let dateA = `${a.publication_date.slice(3,5)}/${a.publication_date.slice(0,2)}/${a.publication_date.slice(6,10)}`;
            return new Date(dateB).getTime() - new Date(dateA).getTime();
        });
      }
    }
  });