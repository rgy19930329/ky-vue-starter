<template>
  <div id="app" :class="[$route.name + '-wrap', 'app']">
    <RHeader />
    <div class="app-content">
      <template v-if="isDone">
        <router-view></router-view>
      </template>
      <template v-else>
        loading...
      </template>
    </div>
  </div>
</template>

<script>
import RHeader from '@/components/RHeader.vue';

export default {
  name: 'app',
  components: {
    RHeader,
  },
  data() {
    return {
      isDone: false
    }
  },
  created() {
    // this.$ajax({
    //   url: '/example/config',
    //   method: 'get',
    // }).then(rs => {
    //   this.isDone = true;
    //   this.$GlobalInfo.config = rs.data;
    // });
    setTimeout(() => {
      this.isDone = true;
    }, 300);
  }
}
</script>

<style rel="stylesheet/less" lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app {
  .app-content {
    padding: 80px 20px 20px 20px;
  }
}
</style>
