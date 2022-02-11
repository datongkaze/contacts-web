<!--
 * @Author: kevinZhang
 * @Date: 2022-02-10 17:53:36
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-11 09:06:43
 * @FilePath: /contacts-web/src/App.vue
-->

<template>
  <div id="app" class="flex justify-center w-full h-full lg:w-1/2 xs:w-4/5 sm:w-4/6 bg-gray-50">
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
