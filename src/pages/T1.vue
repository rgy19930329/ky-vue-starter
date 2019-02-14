<template>
  <div class="page-t1">
    <h1>{{ msg }}</h1>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        {{ item.name }} | {{ item.addr }} | {{ item.comp }}
      </li>
    </ul>
    <c-table :thead="['客户姓名', '住址', '公司']" :list="list">
      <tr slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.addr }}</td>
        <td>{{ props.item.comp }}</td>
      </tr>
    </c-table>
  </div>
</template>

<script>
export default {
  name: 't1',
  data() {
    return {
      msg: 'HelloWorld T1',
      title: '',
      list: [],
    }
  },

  created() {
    this.queryMobile();
    this.initTable();
  },

  methods: {
    queryMobile() {
      this.$ajax({
        url: '/t5',
        method: 'get',
      }).then(rs => {
        this.msg = rs.mobile;
      });
    },

    initTable() {
      this.$ajax({
        url: '/tabledata',
        method: 'get',
      }).then(rs => {
        this.title = rs.title;
        this.list = rs.list;
      });
    }
  }
}
</script>

<style scoped rel="stylesheet/less" lang="less">
h1 {
  color: #f60;
  font-size: 18px;
}
</style>
