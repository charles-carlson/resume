import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import proj from '@/components/proj'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/projects',
      name: 'proj',
      component: proj
    }
  ]
})
