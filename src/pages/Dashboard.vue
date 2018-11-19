<template>
  <div class="hello">
    <Tabs value="dashboard">
        <TabPane label="Dashboard" name="dashboard">
          <DashDashboard></DashDashboard>
        </TabPane>
        <TabPane label="告警" name="dash-alert">
          <DashAlarm></DashAlarm>
        </TabPane>
        <TabPane label="场景" name="dash-situation">标签三的内容</TabPane>
    </Tabs>
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
import DashDashboard from '../secondpage/DashDashboard.vue'
import DashAlarm from '../secondpage/DashAlarm.vue'
export default {
  name: 'Dashboard',
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
    TabPane,
    DashDashboard,
    DashAlarm
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
