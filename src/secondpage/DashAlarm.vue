<template>
  <div class="whitebg">
    <Tabs value="name1">
        <TabPane label="我的告警" name="name1">
          <Tabs value="name1">
              <TabPane label="待认领" name="name1"><MyAlarmPage querytype="mActive"></MyAlarmPage></TabPane>
              <TabPane label="已认领" name="name2"><MyAlarmPage querytype="mAck"></MyAlarmPage></TabPane>
              <TabPane label="已关闭" name="name3"><MyAlarmPage querytype="mClosed"></MyAlarmPage></TabPane>
              <TabPane label="全部" name="name4">全部</TabPane>
          </Tabs>
        </TabPane>
        <TabPane label="所有告警" name="name2">
          <Tabs value="name2">
            <TabPane label="待认领" name="aActive"><MyAlarmPage querytype="aActive"></MyAlarmPage></TabPane>
            <TabPane label="已认领" name="aAck"><MyAlarmPage querytype="aAck"></MyAlarmPage></TabPane>
            <TabPane label="已关闭" name="aClosed"><MyAlarmPage querytype="aClosed"></MyAlarmPage></TabPane>
            <TabPane label="全部" name="name4">全部</TabPane>
          </Tabs>
        </TabPane>
    </Tabs>
    <a data-toggle="modal" href="#addAlarm" class="btn btn-success btn-banner-oper">手动添加告警</a>
  </div>
</template>
<script>
require("es6-promise").polyfill();
require('isomorphic-fetch'); 
import {
  TabPane,
  Tabs,
} from 'iview'
import { AlarmCol } from '@/utils'
import MyAlarmPage from '../thirdpage/MyAlarmPage.vue'
export default {
  name: 'DashAlarm',
  data () {
    return {
    }
  },
  created() {
  },
  components: {
    Tabs,
    TabPane,
    MyAlarmPage
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-banner-oper{
  background-color: #98CF4D;
  color: #ffffff;
  border-color: #98CF4D;
  float: right;
  margin-top: -113px;
}
</style>
