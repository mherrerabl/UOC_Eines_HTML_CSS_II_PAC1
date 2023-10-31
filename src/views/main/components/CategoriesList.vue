<template>
    <div>
        <h3 class="title--level-third blank-space--bottom-15">Categorias</h3>
        <form class="category__form">
            <div v-for="(category) in categories" :key="category.id" class="checkbox-container">
                    <input type="checkbox" :id="category.name" :value="category.name" v-model="categoriesSelected">
                    <label :for="category.name">{{ category.name }}
                </label>
            </div>
        </form>
    </div>
</template>

<script>
//Functions Vue
import { ref, watch } from "vue";

//Variables
import { categoriesJson, categorySelected } from './../../../assets/scripts/variables';


export default {
    setup() {
        let categories = categoriesJson;
        let categoriesSelected = ref([]);

        watch(categoriesSelected, () => {
            categorySelected.value = categoriesSelected.value;
        });

        watch(categorySelected, () => {
            if(categorySelected.value.length <= 0) {
                categoriesSelected.value = [];
            }
        });

        return { categories, categoriesSelected, categorySelected }
    },
}
</script>


