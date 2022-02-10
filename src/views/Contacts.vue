<!--
 * @Author: kevinZhang
 * @Date: 2022-02-10 19:45:00
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-11 04:57:32
 * @FilePath: /contacts-web/src/views/contacts.vue
-->
<template>
  <div
    :class="[
      isDetail ? 'overflow-y-hidden' : 'overflow-y-scroll',
      'contacts h-full w-full relative',
    ]"
    style="scroll-behavior: smooth"
    ref="contacts"
  >
    <ListSearch @search="handleSearch" @setHistoryList="setHistoryList" />
    <div v-show="!isReady" class="pt-16">
      <div
        class="flex items-center pb-2 mb-2 border-b last:border-0"
        v-for="(skeleton, index) in Array(16)"
        :key="index"
      >
        <VueSkeletonLoader
          class="ml-2"
          type="circle"
          :width="24"
          :height="24"
          animation="fade"
        />
        <VueSkeletonLoader
          class="ml-2"
          type="rect"
          rounded
          :width="40"
          :height="10"
          animation="fade"
        />
      </div>
    </div>
    <div class="contacts__main pt-14" v-show="isReady">
      <div
        class="flex items-center contacts__item"
        v-for="(letter, index) in Object.keys(contactsDataSortByFirstLetter)"
        :key="index"
      >
        <div class="w-full" :ref="letter">
          <div class="w-full pl-5 mb-2 text-left border-b-2">{{ letter }}</div>
          <div class="pl-4 pr-4">
            <RecycleScroller
              class="contacts__item-inner"
              :items="contactsDataSortByFirstLetter[letter]"
              :item-size="42"
              key-field="id"
              v-slot="{ item }"
            >
              <ListItem :datasource="item" @detail="handleDetail" />
            </RecycleScroller>
            <!-- <div
              class="contacts__item-inner"
              v-for="contact in contactsDataSortByFirstLetter[letter]"
              :key="contact.id"
            >
              <ListItem :datasource="contact" @detail="handleDetail" />
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <ListModal
      v-if="isDetail"
      :datasource="contactsDataSortByFirstLetterFlat"
      :enterId="enterId"
      @cancel="handleCancel"
    />
    <ListLetterBar :left="left" @scrollToView="scrollToView" />
  </div>
</template>

<script>
import { getLetter26, unique } from "@/utils/util";
import ListItem from "@/components/ListItem";
import ListModal from "@/components/ListModal";
import ListSearch from "@/components/ListSearch";
import ListLetterBar from "@/components/ListLetterBar";
import VueSkeletonLoader from "skeleton-loader-vue";
import _throttle from "lodash/throttle";

export default {
  name: "Contacts",
  components: {
    ListItem,
    ListModal,
    ListSearch,
    ListLetterBar,
    VueSkeletonLoader,
  },
  data() {
    return {
      contactsData: [],
      contactsDataSortByFirstLetter: {},
      contactsDataSortByFirstLetterFlat: [],
      enterId: "",
      isDetail: false,
      left: 0,
      isReady: false,
    };
  },
  computed: {},
  created() {
    this.initHistoryList();
    this.getContactsData();
  },
  mounted() {
    const _this = this;
    window.addEventListener("resize", function () {
      _this.getWidth();
    });
  },
  methods: {
    getLetter26,
    unique,
    /**
     * @description: 获取整个宽
     * @param {*}
     * @return {*}
     */
    getWidth() {
      const contacts = this.$refs.contacts;
      console.log("offsetWidth", contacts.offsetWidth, contacts.offsetLeft);
      this.left = contacts.offsetWidth + contacts.offsetLeft;
    },
    /**
     * @description: 目标滚动到顶部
     * @param {*} function
     * @return {*}
     */
    scrollToView: _throttle(function (letter) {
      const element = this.$refs[letter][0];
      const contacts = this.$refs.contacts;
      console.log(element.offsetTop);
      contacts.scrollTop = element.offsetTop - contacts.offsetTop - 56;
    }, 1000),
    /**
     * @description: 设置历史
     * @param {*}
     * @return {*}
     */
    setHistoryList(historyList) {
      historyList = historyList.filter((el) => {
        const targetDate = this.dayjs(el.target);
        const nowDate = this.dayjs();
        if (nowDate.diff(targetDate, "hour") < 24) {
          return {
            value: el.value,
            date: el.date,
          };
        }
      });
      const historyListUnique = this.unique(historyList, "value");
      this.$ls.set("historyList", JSON.stringify(historyListUnique));
    },
    /**
     * @description: 初始化历史查询
     * @param {*}
     * @return {*}
     */
    initHistoryList() {
      const historyListBeforeParse = this.$ls.get("historyList");
      const historyList = historyListBeforeParse
        ? JSON.parse(this.$ls.get("historyList"))
        : [];
      if (!historyListBeforeParse) {
        this.$ls.set("historyList", JSON.stringify([]));
      } else if (historyList.length > 0) {
        this.setHistoryList(historyList);
      }
    },
    /**
     * @description: 查询数据
     * @param {*}
     * @return {*}
     */
    handleSearch(value) {
      if (value) {
        const historyList = JSON.parse(this.$ls.get("historyList"));
        historyList.push({
          value: value,
          date: this.dayjs().format("YYYY-MM-DD HH:mm:ss"),
        });
        this.setHistoryList(historyList);
      }
      this.filterData(value);
    },
    /**
     * @description: 过滤数据
     * @param {*}
     * @return {*}
     */
    filterData(value) {
      if (!value) {
        this.generateSortedData(this.contactsData);
      } else {
        const contactsDataFilter = this.contactsData.filter((el) =>
          el.authorName.includes(value)
        );
        this.generateSortedData(contactsDataFilter);
      }
    },
    /**
     * @description: 获取联系人数据
     * @param {*}
     * @return {*}
     */
    getContactsData() {
      console.log(this);
      this.$api.mock.mockContacts({}).then((res) => {
        if (res.statusText === "OK") {
          const contactsData = res.data.developers;
          this.contactsData = contactsData;
          this.generateSortedData(contactsData);
          this.isReady = true;
          this.getWidth();
        }
      });
    },
    /**
     * @description: 构建名字首字母大写排序的数据结构
     * @param {*} data
     * @return {*}
     */
    generateSortedData(data) {
      const contactsDataSortByFirstLetter = {};
      const getLetter26 = this.getLetter26();
      console.log(getLetter26);
      getLetter26.forEach((letter) => {
        data.forEach((contact) => {
          if (!contactsDataSortByFirstLetter[letter]) {
            contactsDataSortByFirstLetter[letter] = [];
          }
          if (contact.authorName[0] === letter) {
            contactsDataSortByFirstLetter[letter].push(contact);
          }
        });
      });
      this.contactsDataSortByFirstLetter = contactsDataSortByFirstLetter;
      this.contactsDataSortByFirstLetterFlat = [
        ...Object.values(contactsDataSortByFirstLetter),
      ].flat();
    },
    /**
     * @description: 查看开发者详情
     * @param {*} data
     * @return {*}
     */
    handleDetail(id) {
      this.enterId = id;
      this.isDetail = true;
    },
    /**
     * @description: 关闭详情
     * @param {*}
     * @return {*}
     */
    handleCancel() {
      this.isDetail = false;
    },
  },
};
</script>