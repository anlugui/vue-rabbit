<template>
 
     <LayoutSticky/>
      <LayoutNav/>
      <LayoutHeader/>
      <!-- 二级路由出口 -->
       <router-view></router-view>
      <LayoutFooter/>
  </template>
  
  <script setup>
  import LayoutSticky from './components/LayoutSticky.vue';
  import LayoutNav from './components/LayoutNav.vue';
  import LayoutHeader from './components/LayoutHeader.vue';
  import LayoutFooter from './components/LayoutFooter.vue';
  </script>
  
  <style>
  
  </style>