<template>
  <div class="header">
    <Menu
      v-if="loaded"
      mode="horizontal"
      theme="light"
      :active-name="current">
      <template v-for="(item,index) of navs">
        <MenuItem :key="index" :name="item.code" :to="item.code">
          <Icon :key="index" :type="item.icon"/>
          {{item.label}}
        </MenuItem>
      </template>
    </Menu>
    <div class="user-info">
      <img alt="Vue logo" src="@/assets/logo.png" class="logo" />
      {{userName}}
    </div>
  </div>
</template>

<script>
export default {
  name: "RHeader",
  data() {
    return {
      loaded: false,
      navs: [],
      userName: "ranguangyu",
    };
  },
  created() {
    this.getNavs();
  },
  computed: {
    current() {
      return this.$route.name;
    }
  },
  methods: {
    async getNavs() {
      const result = await this.$ajax({
        url: "/vueapi/navs",
      });
      if (result.code === "0000") {
        this.navs = result.data;
        this.loaded = true;
      }
    },
    /**
     * 路由匹配规则
     */
    routerMatch() {

    },
  }
};
</script>

<style scoped rel="stylesheet/less" lang="less">
.header {
  position: fixed;
  width: 100%;
  overflow: hidden;
  .ivu-icon {
    font-size: 20px;
    vertical-align: -3px;
  }

  .user-info {
    position: absolute;
    top: 16px;
    right: 20px;
    z-index: 999;

    .logo {
      width: 30px;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
}
</style>
