import Vue from 'vue'
import Router from 'vue-router'
import TheBody from '@/components/TheBody'
import WatchVideo from '@/components/WatchVideo'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheBody,
    },
    {
      path: '/watch/:id',
      name: 'watchVideo',
      component: WatchVideo,
    },
  ],
})

export default router
