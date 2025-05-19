//封装接口函数
import httpInstance from "@/utils/http"
export function getCategroyAPI() {
    return httpInstance({
        url: '/home/category/head'
        //method默认是get请求，所以不写
    })
}
