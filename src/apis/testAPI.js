import httpInstance from "@/utils/http.js";

export function getCategroy() {
    return httpInstance({
        url: 'home/category/head'
    })
}
