/*
 * @Author: kevinZhang
 * @Date: 2022-02-10 18:46:52
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-10 19:07:05
 * @FilePath: /contacts-web/src/utils/axios.js
 */

const VueAxios = {
  vm: {},
  // eslint-disable-next-line no-unused-vars
  install (Vue, instance) {
    if (this.installed) {
      return;
    }
    this.installed = true;

    if (!instance) {
      // eslint-disable-next-line no-console
      console.error('You have to install axios');
      return;
    }

    Vue.axios = instance;

    Object.defineProperties(Vue.prototype, {
      axios: {
        get: function get () {
          return instance;
        }
      },
      $http: {
        get: function get () {
          return instance;
        }
      }
    });
  }
};

export {
  VueAxios
};
