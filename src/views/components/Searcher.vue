<template>
    <div>
        <h3 class="title--level-third blank-space--bottom-15">Encuentra tu receta</h3>

        <form class="searcher blank-space--bottom-25">
            <input id="searcher-text" class="searcher__input" type="text" name="searcher" placeholder="&nbsp;" autocomplete="off" v-model="searcherModel" @keydown.enter.prevent="">
            <label class="searcher__label" for="searcher-text">Buscar</label>
        </form>
    </div>
    
</template>

<script>
//Variables
import { searcher } from "../../assets/scripts/variables";

export default {
    setup() {
        let searcherModel = searcher;

        return { searcherModel }
    }
}
</script>