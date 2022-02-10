<!--
 * @Author: kevinZhang
 * @Date: 2022-02-11 00:06:47
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-11 04:34:14
 * @FilePath: /contacts-web/src/components/ListSearch.vue
-->
<template>
  <div
    class="fixed z-10 flex items-center w-full p-2 bg-gray-100 contacts__search lg:w-1/2 xs:w-4/5 sm:w-4/6 h-14"
  >
    <input
      v-model="searchValue"
      type="text"
      class="flex-1 p-1 outline-none"
      @focus="handleShowList"
      @change="handleShowList"
      @input="handleShowList"
    />
    <img
      class="w-6 ml-2 cursor-pointer"
      src="~@/assets/images/search.png"
      @click="handleSearch"
    />
    <ListHistory v-if="isList" @history="handleHistory" />
  </div>
</template>

<script>
import ListHistory from "@/components/ListHistory";

export default {
  name: "ListSearch",
  components: {
    ListHistory,
  },
  data() {
    return {
      searchValue: "",
      isList: false,
    };
  },
  methods: {
    /**
     * @description: 开下拉
     * @param {*}
     * @return {*}
     */   
    handleOpenList(){
      this.isList = true;
    }, 
    /**
     * @description: 关下拉
     * @param {*}
     * @return {*}
     */   
    handleCloseList(){
      this.isList = false;
    }, 
    /**
     * @description:
     * @param {*}
     * @return {*}
     */
    handleHistory(history) {
      this.searchValue = history;
      this.handleCloseList();
    },
    /**
     * @description: 显示历史查询
     * @param {*}
     * @return {*}
     */
    handleShowList() {
      if (!this.searchValue) {
        const historyList = JSON.parse(this.$ls.get("historyList"));
        this.$emit("setHistoryList", historyList);
        this.handleOpenList();
      } else {
        this.handleCloseList();
      }
    },
    /**
     * @description: 查询数据
     * @param {*}
     * @return {*}
     */
    handleSearch() {
      this.$emit("search", this.searchValue);
      if (this.isList) {
        this.handleCloseList();
      }
    },
  },
};
</script>

<style>
</style>