<template>   
    <div class="center-content--padding-0">
        <ul class="nav-primary">
            <li><router-link to="/recetario" class="router-link" @click="reset">Todas las recetas</router-link></li>
            <li><router-link to="/menu/entrantes" class="router-link">Entrantes</router-link></li>
            <li><router-link to="/menu/primeros" class="router-link">Primeros</router-link></li>
            <li><router-link to="/menu/segundos" class="router-link">Segundos</router-link></li>
            <li><router-link to="/menu/postres" class="router-link">Postres</router-link></li>
        </ul>  
    </div>
</template>

<script>
//Functions
import { reset } from '../../assets/scripts/functions';

export default {
    setup() {
        return { reset }
    }
}
</script>