//定义pinia数据 主要是管理数据和方法
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategroyAPI } from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {
  //导航列表的数据管理
  //state导航列表数据
  const categoryList = ref([]) //用来存渲染的数组

  //action获取导航数据的方法
  const getCategroy = async () => {
    const res = await getCategroyAPI()
    categoryList.value = res.result
  }
  return {
    categoryList,
    getCategroy
  }
})
