import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductPage from '../views/ProductPage.vue'
import AddProduct from '../views/AddProduct.vue'
import HelloWorld from '../components/HelloWorld.vue'

// 使用 vue-router
Vue.use(VueRouter)

// 匯出 vue-router 設置
export default new VueRouter({
    routes: [
        {
            name: 'products',   //組件呈現名稱
            path: '/products',     //對應路徑
            component: ProductPage //對應組件
        },
        {
            name: 'add-product',   
            path: '/add-product',     
            component: AddProduct
        },
        {
            name: 'test',   
            path: '/test',     
            component: HelloWorld
        }
    ] 
})