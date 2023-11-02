<template>   
    <form class="searcher">
        <input id="searcher-text" class="searcher__input" name="searcher" type="text" placeholder="&nbsp;" autocomplete="off" v-model="searcherModel" @keydown.enter.prevent="">
        <label class="searcher__label" for="searcher-text"><i class="fa-solid fa-magnifying-glass"></i>Encuentra tu receta</label>
    </form>
</template>

<script>
import { searcher } from "../../assets/scripts/variables";

export default {
    setup() {
        let searcherModel = searcher;

        return { searcherModel }
    }
}
</script>