<template>
  <div class="page-list">
    <h1>List</h1>
    <RTable :thead="['序号', '姓名', '年龄', '部门', '创建时间', '状态', '操作']" :list="list">
      <tr slot-scope="props">
        <td>{{ props.index + 1 }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.age }}</td>
        <td>{{ props.item.dept }}</td>
        <td>{{ props.item.createDate }}</td>
        <td>{{ props.item.status }}</td>
        <td>
          <Button type="error" size="small">删除</Button>
        </td>
      </tr>
    </RTable>
    <div class="page-bar">
      <div class="page-bar-inner">
        <Page
          :total="total"
          :current="current"
          @on-change="onChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      list: [],
      total: 0,
      current: 1,
      pageSize: 10,
    }
  },

  created() {
    this.loadData();
  },

  methods: {
    async loadData() {
      const result = await this.$ajax({
        url: "/yapi/list-page",
        params: {
          current: this.current,
          pageSize: this.pageSize,
        }
      });
      if (result.success) {
        const { currentPageResult, totalCount, pageSize } = result.data;
        this.list = currentPageResult;
        this.total = totalCount;
        this.pageSize = pageSize;
      }
    },
    onChange(current) {
      this.current = current;
      this.loadData();
    }
  }
}
</script>

<style scoped rel="stylesheet/less" lang="less">

</style>
