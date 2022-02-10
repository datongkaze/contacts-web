<!--
 * @Author: your name
 * @Date: 2022-01-20 10:37:16
 * @LastEditTime: 2022-02-10 21:01:23
 * @LastEditors: kevinZhang
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /contacts-web/src/App.vue
-->
<template>
  <div id="app" class="flex justify-center lg:w-1/2 xs:w-4/5 sm:w-4/6  w-full h-full bg-gray-50">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
