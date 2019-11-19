import Vue from 'vue'
import Router from 'vue-router'
import PagingDemo from '@/components/PagingDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PagingDemo',
      component: PagingDemo
    }
  ]
})
