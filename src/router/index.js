/*
 * @Author: your name
 * @Date: 2019-09-05 13:35:02
 * @LastEditTime: 2022-01-26 09:02:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin_dev/src/router/index.js
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
