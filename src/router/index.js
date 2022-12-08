import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('../pages/Login.vue')
const Home = () => import('../pages/Home.vue')
const Profile = () => import('../pages/Profile.vue')

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
