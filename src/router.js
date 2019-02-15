import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from './pages/Home.vue';
import Config from './pages/Config.vue';
import List from './pages/List.vue';
import Form from './pages/Form.vue';

export default new Router({
  routes: [
    { 
      name: 'home',
      path: '/home',
      component: Home
    },
    { 
      name: 'config',
      path: '/config',
      component: Config
    },
    {
      name: 'list',
      path: '/list',
      component: List
    },
    {
      name: 'form',
      path: '/form',
      component: Form,
    },
  ]
});
