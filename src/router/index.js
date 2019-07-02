import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components'
import Home from '../components/Home'

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'feed',
      component: Blog
    },
    {
      path: '/blog/:post',
      name: 'post',
      props: true,
      component: Blog
    }
  ]
})
