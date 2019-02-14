<template>
  <div class="r-table">
    <table>
      <thead>
        <tr>
          <th v-for="(item,index) of thead" :key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item,index) of list">
          <slot :item="item" :index="index"></slot>
        </template>
        <tr v-if="list && list.length == 0">
          <td :colspan="thead.length" class="tc">暂无数据~</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'RTable',
    props: ['thead', 'list'],
    data () {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped rel="stylesheet/less" lang="less">
  .tc {
    text-align: center !important;
  }

  .r-table {
    table {
      width: 100%;
      border-collapse: collapse;
    }
    thead {
      background: #eef1f6;
    }
    tr {
      line-height: 45px;
      border: 1px solid #dfe6ec;
      transition: all 300ms;
    }
    tr:hover {
      background: #eef1f6;
    }
    th,td {
      text-align: left;
      padding-left: 15px;
    }
    a {
      color: #20a0ff;
    }
  }
</style>
