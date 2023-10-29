<template>
    <div>
        <h2 class="title--level-secundary blank-space--bottom-15">Menú</h2>

        <div class="menu__container">
            <router-link :to="{ name: 'menu', params: {name: 'entrantes'} }" class="menu__card">
                <div class="menu__title-container">
                    <h3 class="title--level-third">Entrantes</h3>
                </div>
                <picture>
                    <source srcset="./../../assets/images/recipes/1698226906862.png?as=webp" type="image/webp">
                    <img src="./../../assets/images/recipes/1698226906862.png" alt="">
                </picture>
            </router-link>
            <router-link :to="{ name: 'menu', params: {name: 'primeros'} }" class="menu__card">
                <div class="menu__title-container">
                    <h3 class="title--level-third">Primeros</h3>
                </div>
                <picture>
                    <source srcset="./../../assets/images/recipes/img_4.png?as=webp" type="image/webp">
                    <img src="./../../assets/images/recipes/img_4.png" alt="">
                </picture>
            </router-link>
            <router-link :to="{ name: 'menu', params: {name: 'segundos'} }" class="menu__card">
                <div class="menu__title-container">
                    <h3 class="title--level-third">Segundos</h3>
                </div>
                <picture>
                    <source srcset="./../../assets/images/recipes/img_5.png?as=webp" type="image/webp">
                    <img src="./../../assets/images/recipes/img_5.png" alt="">
                </picture>
            </router-link>
            <router-link :to="{ name: 'menu', params: {name: 'postres'} }" class="menu__card">
                <div class="menu__title-container">
                    <h3 class="title--level-third">Postres</h3>
                </div>
                <picture>
                    <source srcset="./../../assets/images/recipes/img_6.png?as=webp" type="image/webp">
                    <img src="./../../assets/images/recipes/img_6.png" alt="">
                </picture>
            </router-link>
        </div>
    </div>
</template>