/**
 * @desc          utils
 * @author        ranguangyu
 * @date          2017-05-09
 */

import Vue from 'vue'

import './aop'
import './event-bus'

import cookie from './cookie'
import storage from './storage'

Vue.prototype.$cookie = cookie
Vue.prototype.$storage = storage
