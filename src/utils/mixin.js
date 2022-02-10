/*
 * @Description: 全局混入
 * @Date: 2021-03-23 14:07:34
 */


const mixin = {
  computed: {
  },
  methods: {
  }
};

const mixinsMounted = {
  mounted () {

  }
};

const mixinsWatch = {
  watch: {

  }
};

const mixinsMethods = {
  methods: {
    isPC () {
      const userAgentInfo = navigator.userAgent;
      const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
      let flag = true;
      for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break }
      }
      return flag;
    },
  }
};

const mixinsData = {
  data () {
    return {
    };
  },
  computed: {
  }
};

export { mixin, mixinsWatch, mixinsMethods, mixinsData, mixinsMounted };
