/*
 * @Description: In User Settings Edit
 * @Author: kevinZhang
 * @Date: 2019-09-09 19:32:14
 * @LastEditTime: 2022-02-10 19:00:25
 * @LastEditors: kevinZhang
 */
// 导入所有接口
import api from './api';

const install = Vue => {
  if (install.installed) { return }

  install.installed = true;

  Object.defineProperties(Vue.prototype, {
    // 挂载在 Vue 原型的 $api 对象上
    $api: {
      get () {
        return api;
      }
    }
  });
};

export default install;
