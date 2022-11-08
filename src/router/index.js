import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// const App = () => import('../App.vue')
const Login = () => import('../pages/Login.vue')

const routes = [
    // {
    //     path: '/',
    //     name: 'App',
    //     component: App
    // },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
