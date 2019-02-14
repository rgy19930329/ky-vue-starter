<template>
  <div class="page-list">
    <h1>List</h1>
    <RTable :thead="['name', 'url', 'address', 'string']" :list="list">
      <tr slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.url }}</td>
        <td>{{ props.item.address }}</td>
        <td>{{ props.item.string }}</td>
      </tr>
    </RTable>
  </div>
</template>

<script>
export default {
  name: "t2",
  data() {
    return {
      list: [],
    }
  },

  created() {
    this.loadData();
  },

  methods: {
    async loadData() {
      const result = await this.$ajax({
        url: "/vueapi/mock",
      });
      if (result.success) {
        this.list = result.data.projects;
      }
    },
  }
}
</script>

<style scoped rel="stylesheet/less" lang="less">

</style>
