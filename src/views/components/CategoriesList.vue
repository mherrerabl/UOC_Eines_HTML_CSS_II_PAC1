<template>
    <div>
        <h3 class="title--level-third">Categorias</h3>
        <form class="card-category">
            <div v-for="(category) in categories" :key="category.id">
                <label :for="category.name" :style="{'background-color': category.color}">
                    <input type="checkbox" :id="category.name" :value="category.name" v-model="categoriesSelected">
                    {{ category.name }}
                </label>
            </div>
        </form>
    </div>
</template>

<script>
//Functions Vue
import { ref, watch } from "vue";

//Variables
import { categoriesJson, categorySelected } from '../../assets/scripts/variables';


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


