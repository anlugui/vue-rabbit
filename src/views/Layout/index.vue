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

  //触发获取导航列表的action
  import { useCategoryStore } from '@/stores/category';
  import { onMounted } from 'vue';

  //实例对象
  const categoryStore=useCategoryStore()
  //调用其中的方法
  onMounted(()=>categoryStore.getCategroy())
  </script>
  
  <style>
  
  </style>