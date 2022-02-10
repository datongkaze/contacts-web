/*
 * @Description: 拦截器
 * @Author: kevinZhang
 * @Date: 2019-09-12 12:03:33
 * @LastEditTime: 2022-02-10 19:40:43
 * @LastEditors: kevinZhang
 */
import Vue from 'vue';
import axios from 'axios';
import { VueAxios } from './axios';

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 60 * 1000, // 请求超时时间
  withCredentials: true,
  headers: {
  }
});

// 请求拦截器
service.interceptors.request.use((config) => {
  console.log(config);
  // 拦截请求预处理
  return config;
}, (error) => {
  // 对请求错误做些什么
  errorHandle(error);
});

// 响应拦截器
service.interceptors.response.use((response) => {
  // 响应处理
  console.log(response);
  if (response.status && response.status !== 200) {
    // 错误提示
    console.log('网络错误');
    return response;
  }else{
    return response;
  }
}, (error) => {
  // 错误请求处理
  errorHandle(error);
});

function errorHandle (error) {

  if (error.response) {
    const data = error.response;
    console.log(data.message || '系统错误');
  }
  return Promise.reject(error);
}

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service);
  }
};

export { installer as VueAxios, service as axios };
