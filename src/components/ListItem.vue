<!--
 * @Author: kevinZhang
 * @Date: 2022-02-10 21:25:55
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-10 22:26:35
 * @FilePath: /contacts-web/src/components/ListItem.vue
-->
<template>
  <div class="listItem">
    <div
      class="flex items-center mb-2 border-b pb-2 cursor-pointer"
      @click="handleDetail(datasource)"
    >
      <img
        class="contacts__item-img w-6 rounded-2xl"
        :src="datasource.avatar"
        :alt="datasource.authorName"
      />
      <div class="contacts__item-name pl-2">
        {{ datasource.authorName }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'ListItem',
  components:{
  },
  props: {
    datasource: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods:{
    /**
     * @description: 查看开发者详情
     * @param {*} data
     * @return {*}
     */    
    handleDetail(data){
      console.log(data);
      this.$emit('detail',data.id);
    }
  }
};
</script>

<style>
</style>