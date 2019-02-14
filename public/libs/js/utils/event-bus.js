/**
 * @desc          emit, on 事件发射与监听
 * @author        ranguangyu
 * @date          2017-05-09
 */

import Vue from 'vue'

let eventBus = new Vue()

Vue.prototype.$bus = eventBus
