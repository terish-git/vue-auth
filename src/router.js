import Vue from 'vue'
import Router from 'vue-router'
 
Vue.use(Router)


const routes = [
    {
      path: '/',
      component: () => import('./components/HomePage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./components/RegisterPage.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./components/products/ProductsPage.vue')
    }
  ]
   
  const router = new Router({
    mode: 'history',
    routes
  })
   
  export default router

