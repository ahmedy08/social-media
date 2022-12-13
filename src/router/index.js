import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('../pages/Login.vue')
const Home = () => import('../pages/Home.vue')
const Profile = () => import('../pages/Profile.vue')
const EventDetails = () => import('../pages/EventDetails.vue')
const AddNewEvent = () => import('../pages/AddNewEvent.vue')

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
    },
    {
        path: '/event-details:id',
        name: 'EventDetails',
        component: EventDetails
    },
    {
        path: '/add-new-event',
        name: 'AddNewEvent',
        component: AddNewEvent
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
