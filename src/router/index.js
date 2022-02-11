/*
 * @Author: kevinZhang
 * @Date: 2022-02-10 19:46:09
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-11 09:07:26
 * @FilePath: /contacts-web/src/router/index.js
 */

import Vue from 'vue';
import Router from 'vue-router';
import routes from './routers.js';
import VueStorage from 'vue-ls';


Vue.use(Router);
Vue.use(VueStorage);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  routes
});

//可以配置路由守卫

export default router;
