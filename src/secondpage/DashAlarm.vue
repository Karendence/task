<template>
  <div class="whitebg">
    <a data-toggle="modal" @click="modal1 = true" class="btn btn-success btn-banner-oper">手动添加告警</a>
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
    <Modal
    v-model="modal1"
    title="手动添加告警"
    @on-ok="ok"
    @on-cancel="cancel">
      <form name="editForm" id="editForm" class="form-horizontal" novalidate="novalidate">
        <div class="form-group">
          <label class="col-sm-2 control-label">告警内容</label>
          <div class="col-sm-8">
              <textarea rows="3" name="alarmContent" id="alarmContent" class="form-control" placeholder="告警详细内容" maxlength="4000" required=""></textarea>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">应用</label>
          <div class="col-sm-8">
            <select id="app" name="app" class="form-control valid">
            </select>
            <span class="help-block">通过应用的分派策略分派至告警处理人.</span>
          </div>
        </div>
            <div class="form-group">
            <label class="col-sm-2 control-label">级别</label>
            <div class="col-sm-8">
              <div class="btn-group" data-toggle="buttons">
              <label key = '3' class="btn warn-important priority">
                <input type="radio" autocomplete="off"> 严重
              </label>
              <label key = '2' class="btn warn-warned priority">
                <input type="radio" autocomplete="off"> 警告
              </label>
              <label key = '1' class="btn warn-alert priority active">
                <input type="radio" autocomplete="off" checked> 提醒
              </label>
            </div>
            </div>
        </div>
      </form>
  </Modal>
  </div>
</template>
<script>
require("es6-promise").polyfill();
require('isomorphic-fetch'); 
import {
  TabPane,
  Tabs,
  Modal
} from 'iview'
import { AlarmCol } from '@/utils'
import MyAlarmPage from '../thirdpage/MyAlarmPage.vue'
export default {
  name: 'DashAlarm',
  data () {
    return {
      modal1: false
    }
  },
  created() {
  },
  components: {
    Tabs,
    TabPane,
    MyAlarmPage,
    Modal
  },
  methods: {
    ok () {
    },
    cancel () {
    }
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
  position: absolute;
  right: 43px;
  top: 29px;
  cursor:pointer;
  z-index: 111;
}
</style>
