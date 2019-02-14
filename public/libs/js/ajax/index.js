/**
 * @desc          异步方法
 * @author        ranguangyu
 * @date          2018-08-08
 */
import Vue from 'vue'
import Axios from 'axios'
import jsonp from './jsonp'

// Add a request interceptor
// Axios.interceptors.request.use(function (config) {
//   return config
// });

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
  // 数据处理
  if(typeof response.data == 'object') {
    return response.data
  }else{
    return { success: false, data: response.data }
  }
});

Vue.prototype.$ajax = Axios

Vue.prototype.$jsonp = jsonp
