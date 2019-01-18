import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Description from '@/components/Text/Description'
import Detail from '@/components/Text/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/description',
      name: 'description',
      component: Description
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ],
  mode: 'history'
})
