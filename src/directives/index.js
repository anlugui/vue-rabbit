//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'


export const lazyPlugin = {
    install(app) {
        //懒加载指令逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                //el:指令绑定的那个元素 img
                //binding：binding.value 指令等于号后面绑定的表达式的值 图片url
                console.log(el, binding.value)
                const { stop } = useIntersectionObserver(
                    el, //监听的对象是谁
                    ([{ isIntersecting }]) => {
                        // 检测是否能显示布尔值
                        console.log(isIntersecting)

                        if (isIntersecting) {
                            //进入视口区域
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }
        })
    }
}