import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue')
    },
    {
        path:'/addCustomer',
        name: 'AddCustomer',
        component: () => import('../components/AddCustomer.vue')
    },
    {
        path:'/customers',
        name: 'CustomerList',
        component: () => import('../components/CustomersList.vue')
    },
    {
        path:'/editCustomer',
        name: 'EditCustomer',
        component: () => import('../components/EditCustomer.vue')

    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router