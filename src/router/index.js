import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Typing from '../components/Typing.vue'
import Result from '../components/Result.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/typing',
    name: 'Typing',
    component: Typing
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
