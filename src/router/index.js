import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Description from '@/components/Content/Description'
import Detail from '@/components/Content/Detail'

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
      path: '/detail/:id',
      props: true,
      name: 'detail',
      component: Detail
    }
  ],
  mode: 'history'
})
