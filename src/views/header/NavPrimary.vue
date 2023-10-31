<template>   
    <div class="center-content--padding-0 nav-primary">
        <div class="nav-primary__content">
            <form class="searcher">
                <input id="searcher-text" class="searcher__input" type="text" name="searcher" placeholder="&nbsp;" autocomplete="off" v-model="searcherModel" @keydown.enter.prevent="">
                <label class="searcher__label" for="searcher-text">Buscar</label>
            </form>
        </div>   
    </div>
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