import Vue from 'vue'
import Router from 'vue-router'
import Type from '@/components/Type'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'type',
      component: Type
    }
  ]
})
