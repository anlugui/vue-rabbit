<script setup>

</script>

<template>
   <!-- 一级路由 -->
    <router-view></router-view>
    <div class="test">
      test scss
    </div>
</template>

<style scoped lang="scss">
.test{
  color: $priceColor;
}
</style>
