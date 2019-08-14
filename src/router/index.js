import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import Blogpost from '@/components/Blogpost'
import NewBlogpost from '@/components/NewBlogpost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'overview',
      component: Overview
    },
    {
      path: '/blogpost/:id',
      name: 'blogpost',
      component: Blogpost,
    },
    {
      path: '/blogpost/',
      name: 'newBlogpost',
      component: NewBlogpost
    }
  ]
})
