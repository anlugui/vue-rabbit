<script setup>
import HomeCategory from './Components/HomeCategory.vue'
import HomeBanner from './Components/HomeBanner.vue'
import HomeNew from './Components/HomeNew.vue'
import HomeHot from './Components/HomeHot.vue'
import homeProduct from './Components/HomeProduct.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
</template>