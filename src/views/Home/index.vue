<script setup>
import HomeCategory from './Components/HomeCategory.vue'
import HomeBanner from './Components/HomeBanner.vue'
import HomeNew from './Components/HomeNew.vue'
import HomeHot from './Components/HomeHot.vue'
import HomeProduct from './Components/HomeProduct.vue'
import HomePanel from './Components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <!-- 测试面板组件 -->
    <!-- <HomePanel  title="新鲜好物" sub-title="新鲜好物 好多商品">
    <div>我是新鲜好物的插槽</div>  
    </HomePanel>
    <HomePanel  title="人气推荐" sub-title="人气推荐 好多商品"> 
     <div> 我是人气推荐的插槽内容</div>
    </HomePanel> -->
</template>