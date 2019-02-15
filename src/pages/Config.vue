<template>
  <div class="page-config">
    <h1>Config</h1>
    <div :style="{position: 'relative'}">
      <Spin fix v-if="!loaded"></Spin>
      <div>count: {{count}}</div>
      <div>dateFrom: {{filters.dateFrom}}</div>
      <div>dateTo: {{filters.dateTo}}</div>
      <div>permission: {{filters.permission}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Config",
  data() {
    return {
      loaded: false,
      count: null,
      filters: {},
    }
  },

  created() {
    this.queryConfig();
  },

  methods: {
    queryConfig() {
      this.$ajax({
        url: "https://api.football-data.org/v2/matches",
        headers: {
          "X-Auth-Token": "a19cd479f22d46899ff4d0ae52dc6dfc"
        }
      }).then(result => {
        const { count, filters } = result;
        this.count = count;
        this.filters = filters;
        this.loaded = true;
      });
    },
  }
}
</script>

<style scoped rel="stylesheet/less" lang="less">
.page-config {
  
}
</style>
