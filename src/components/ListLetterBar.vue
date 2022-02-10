<!--
 * @Author: kevinZhang
 * @Date: 2022-02-11 02:33:24
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-11 03:41:50
 * @FilePath: /contacts-web/src/components/ListLetterBar.vue
-->
<template>
  <div
    class="fixed flex flex-col items-center w-3 p-2 transform translate-x-0 -translate-y-1/2 bg-white shadow-2xl ListLetterBar rounded-xl top-1/2 mt-14"
    :style="{ left: `${left-selfWidth*2}px` }"
    ref="listLetterBar"
  >
    <div
      class="mb-1 text-xs cursor-pointer ListLetterBar__item"
      v-for="(letter, index) in letterList"
      :key="index"
      @click="scrollToView(letter)"
    >
      {{ letter }}
    </div>
  </div>
</template>

<script>
import { getLetter26 } from "@/utils/util";

export default {
  name: "ListLetterBar",
  props: {
    left: {
      type: Number,
      default: function () {
        return 0;
      },
    },
  },
  data() {
    return {
      letterList: [],
      selfWidth: 0,
    };
  },
  created() {
    this.letterList = this.getLetter26();
  },
  mounted(){
    this.getListLetterBarWidth();
  },
  methods: {
    getLetter26,
    /**
     * @description: 获取自身的宽
     * @param {*}
     * @return {*}
     */
    getListLetterBarWidth() {
      const listLetterBar = this.$refs.listLetterBar;
      this.selfWidth = listLetterBar.offsetWidth;
    },
    /**
     * @description: 滚到指定位置
     * @param {*} letter
     * @return {*}
     */
    scrollToView(letter) {
      this.$emit("scrollToView", letter);
    },
  },
};
</script>

<style>
</style>