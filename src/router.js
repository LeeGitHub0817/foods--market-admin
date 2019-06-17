import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home/one',
          component: () => import(/* webpackChunkName: "one" */ './components/One.vue')
        },
        {
          path: '/home/two',
          component: () => import(/* webpackChunkName: "two" */ './components/Two.vue')
        }
      ]
    }
  ]
})
