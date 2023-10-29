<template>   
    <div class="center-content--padding-0">
        <ul class="nav-primary__content">
            <li v-if="smallScreen" id="close-dropwdown"><i class="fa-solid fa-xmark fa-2x"></i></li>
            <li><router-link to="/recetario" class="router-link" @click="reset">Todas las recetas</router-link></li>
            <li><router-link to="/menu/entrantes" class="router-link">Entrantes</router-link></li>
            <li><router-link to="/menu/primeros" class="router-link">Primeros</router-link></li>
            <li><router-link to="/menu/segundos" class="router-link">Segundos</router-link></li>
            <li><router-link to="/menu/postres" class="router-link">Postres</router-link></li>
        </ul>   
    </div>
</template>

<script>
//Variables
import { smallScreen } from '../../assets/scripts/variables';

//Functions
import { reset } from '../../assets/scripts/functions';

export default {
    setup() { 
        
        return { reset, smallScreen }
    }
}
</script>