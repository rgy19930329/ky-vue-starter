import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '../public/libs/index';
import 'iview/dist/styles/iview.css';

import iview from 'iview';
// import { Button } from 'iview';
// Vue.component('Button', Button);
Vue.use(iview);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
