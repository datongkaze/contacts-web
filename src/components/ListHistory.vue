<!--
 * @Author: kevinZhang
 * @Date: 2022-02-11 00:21:38
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-11 03:46:20
 * @FilePath: /contacts-web/src/components/listHistory.vue
-->
<template>
  <div
    class="absolute left-0 z-50 w-full overflow-hidden transition bg-white  historyList top-14"
  >
    <div
      class="p-2 text-left border-b-2 cursor-pointer last:border-b-0"
      v-for="(item, index) in historyList"
      :key="index"
      @click="handleHistoryToSearch(item)"
    >
      {{ item.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ListHistory",
  data() {
    return {
      historyList:[]
    };
  },
  created(){
    this.historyList = JSON.parse(this.$ls.get('historyList'))
  },
  methods: {
    /**
     * @description: 用历史查询
     * @param {*}
     * @return {*}
     */
    handleHistoryToSearch(item) {
      this.$emit('history',item.value);
    },
  },
};
</script>

<style>
</style>