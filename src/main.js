/*
 * @Author: kevinZhang
 * @Date: 2022-02-10 17:53:36
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-11 04:46:54
 * @FilePath: /contacts-web/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import api from './api';
import VueStorage from 'vue-ls';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

require('./mock')

import '@/assets/style/common.scss'
import '@/assets/style/tailwind.css'

const config = {
  storageOptions: {
    namespace: 'vuejs__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' // storage name session, local, memory
  }
}

Vue.use(api);
Vue.use(VueStorage, config.storageOptions);
Vue.use(VueVirtualScroller)

Vue.config.productionTip = false

dayjs.locale('zh-cn');
Vue.prototype.dayjs = dayjs;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
