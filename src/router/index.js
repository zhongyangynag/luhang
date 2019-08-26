import Vue from 'vue'
import Router from 'vue-router'
import LuYang from '@/components/luyang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LuYang',
      component: LuYang
    }
  ]
})
