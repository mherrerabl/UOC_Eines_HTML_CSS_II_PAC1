<template>
    <router-link to="/" class="logo-link">
        <h1><logo/></h1>
    </router-link>
</template>

<script>
import Logo from './logo.vue';
import NavPrimary from './navPrimary.vue';

export default {
    components: { NavPrimary, Logo },
    setup() {}
}
</script>
