import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import MorePage from '../pages/MorePage'
import HotSearch from '../components/HotSearch'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path:'/more/:id',
      component:MorePage
    },
    {
    path:'/search',
      component:HotSearch
    }
  ]
})
