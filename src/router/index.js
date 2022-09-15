import Vue from 'vue'
import VueRouter from 'vue-router'
import PrimeView from '../views/PrimeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'prime',
    component: PrimeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/linked',
    name: 'linked',

    component: () => import(/* webpackChunkName: "about" */ '../views/LinkedView.vue')




  },
]

const router = new VueRouter({
  routes
})

export default router
