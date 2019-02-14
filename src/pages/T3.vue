<template>
  <div class="page-t3">
    <h1>Button&Icon</h1>
    <section>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
    </section>
    <section>
      <Button type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
    </section>
    <section>
      <Icon type="ios-add-circle-outline" />
      <Icon type="ios-alarm-outline" />
      <Icon type="ios-apps-outline" />
      <Icon type="ios-arrow-dropdown" />
      <Icon type="ios-arrow-down" />
      <Icon type="ios-attach" />
      <Icon type="ios-book-outline" />
    </section>
  </div>
</template>

<script>
export default {
  name: 't3',
  data() {
    return {
      
    }
  },

  created() {
    
  },

  methods: {
    
  }
}
</script>

<style scoped rel="stylesheet/less" lang="less">
.page-t3 {
  section {
    margin-top: 10px;
  }
}
</style>
