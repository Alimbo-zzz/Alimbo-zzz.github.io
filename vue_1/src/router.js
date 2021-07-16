import Vue from 'vue';
import Router  from 'vue-router';
import Home from './views/home.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
    {
      path:'/',
      component: Home,
    },
    {
      path: '/todos',
      component: ()=> import('./views/Todos.vue'),
    },
    {
      path: '/gallery',
      component: ()=> import('./views/gallery.vue'),
    }
  ]
})