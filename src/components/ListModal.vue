<!--
 * @Author: kevinZhang
 * @Date: 2022-02-10 21:46:49
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-11 03:22:09
 * @FilePath: /contacts-web/src/components/listModal.vue
-->
<template>
  <div
    class="
      listModal
      lg:w-1/2
      xs:w-4/5
      sm:w-4/6
      w-full
      h-full
      fixed
      top-0
      bottom-0
      flex
      items-center
      justify-center
      z-50
    "
  >
    <div
      class="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-60"
      @click.prevent="handleCancel"
      @touchmove.prevent
    ></div>
    <div
      class="flex flex-col justify-center items-center relative z-10"
      @touchmove.prevent
    >
      <div
        class="
          listModal__prev
          flex
          justify-center
          items-center
          w-8
          h-8
          rounded-2xl
          bg-gray-800
          relative
          z-10
          cursor-pointer
        "
        @click="handleChangeCurrent(0)"
      >
        <img class="w-2/3 h-2/3" src="~@/assets/images/up.png" />
      </div>
      <div class="listModal__main bg-white rounded-lg w-80 h-80 mt-2 mb-2 p-3">
        <div class="flex items-center">
          <img class="w-20 rounded-full" :src="currentInfo.avatar" />
          <div class="flex flex-col items-start ml-3">
            <h3 class="font-bold mb-2">{{ currentInfo.authorName }}</h3>
            <div class="text-sm">
              <span class="text-xs">{{ currentInfo.followers }}</span>
              <span class="ml-1">followers</span>
              <span class="ml-2 text-xs">{{ currentInfo.stars }}</span>
              <span class="ml-1">stars</span>
            </div>
          </div>
        </div>
        <div class="ml-2">
          <div class="flex items-center mt-4">
            <img class="w-6" src="~@/assets/images/email.png" />
            <span class="text-sm">Email：</span>
            <span class="text-sm underline">{{ currentInfo.email }}</span>
          </div>
          <div class="flex flex-col mt-4">
            <div class="flex items-center">
              <img class="ml-1 w-4 mr-1" src="~@/assets/images/bio.png" />
              <span class="text-sm">Bio：</span>
            </div>
            <p class="text-sm text-left ml-1 mt-2">{{ currentInfo.bio }}</p>
          </div>
        </div>
      </div>
      <div
        class="
          listModal__next
          flex
          justify-center
          items-center
          w-8
          h-8
          rounded-2xl
          bg-gray-800
          cursor-pointer
        "
        @click="handleChangeCurrent(1)"
      >
        <img class="w-2/3 h-2/3" src="~@/assets/images/down.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListModal",
  props: {
    datasource: {
      type: Array,
      default() {
        return [];
      },
    },
    enterId: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      currentId: "",
      currentIndex: 0,
      currentInfo: {},
    };
  },
  created() {
    this.initCurrent();
  },
  methods: {
    /**
     * @description: 初始化位置
     * @param {*}
     * @return {*}
     */
    initCurrent() {
      const currentId = this.enterId;
      const currentIndex = this.datasource.findIndex(
        (data) => data.id === currentId
      );
      this.currentIndex = currentIndex;
      this.switchToCurrent(currentIndex);
    },
    /**
     * @description: 切换到当前开发者的详情
     * @param {*} currentId 当前开发者Id
     * @return {*}
     */
    switchToCurrent(currentIndex = this.currentIndex) {
      this.currentInfo = this.datasource[currentIndex];
    },
    /**
     * @description: 关闭详情
     * @param {*}
     * @return {*}
     */
    handleCancel() {
      this.$emit("cancel");
    },
    /**
     * @description: 切换详情
     * @param {*} direction
     * @return {*}
     */
    handleChangeCurrent(direction) {
      if (direction === 0 && this.currentIndex > 0) {
        this.currentIndex--;
      } else if (
        direction === 1 &&
        this.currentIndex < this.datasource.length - 1
      ) {
        this.currentIndex++;
      }
      this.switchToCurrent();
    },
  },
};
</script>

<style>
</style>