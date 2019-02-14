import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from './pages/Home.vue';
import T1 from './pages/T1.vue';
import List from './pages/List.vue';
import T3 from './pages/T3.vue';
import Friday from './pages/Friday.vue';

export default new Router({
  routes: [
    { 
      name: 'index',
      path: '/home',
      component: Home
    },
    { 
      name: 't1',
      path: '/t1',
      component: T1
    },
    {
      name: 'list',
      path: '/list',
      component: List
    },
    {
      name: 't3',
      path: '/t3',
      component: T3
    },
    {
      name: 'friday',
      path: '/friday',
      component: Friday
    },
  ]
});
