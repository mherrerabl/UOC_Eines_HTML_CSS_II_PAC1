<template>
    <router-view :key="componentKey"></router-view>
</template>

<script>
//Functions Vue
import { ref, watch } from "vue";
import { useRoute, useRouter } from 'vue-router';

//Variables
import { searcher } from '../../assets/scripts/variables';

//Functions
import { changeRoute } from '../../assets/scripts/functions';

export default {
    setup() {
        let componentKey = ref(0)
        let route = useRoute();
        let router = useRouter();

        watch(searcher, () => {
            changeRoute(router, route, searcher);
        });

        const forceRerender = () => {
            componentKey.value += 1;
        }

        watch(route, forceRerender);

        return { changeRoute, componentKey }
    }
}
</script>
