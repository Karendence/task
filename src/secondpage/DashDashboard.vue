<template>
  <div class="hello">
  dashboard
  </div>
</template>

<script>
require("es6-promise").polyfill();
require('isomorphic-fetch'); 
import {
  TabPane,
  Tabs
} from 'iview'
import { columns } from '@/utils'
export default {
  name: 'DashDashboard',
  data () {
    return {
      status: 'ACTIVE',
      globalParams:{
        page : 1,//当前页码
        pageSize : 10,    //每页条数
        totalPageCount : 0,//总页数
        param : '',//参数
        sort : 'desc' //排序
      },
      dataSource: [],
      columns,
    }
  },
  created() {
  },
  components: {
    Tabs,
    TabPane
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
