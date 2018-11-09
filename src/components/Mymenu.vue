<template>
      <Menu active-name="allsitu" theme="light" width="auto" :open-names="['1']" class="sidemenu">
          <Submenu name="1">
                <FirstClassMenu :isOpenProps="true" slot="title">
                  <i class="fa fa-fw fa-gear"></i> 
                  工作台
                  <img src="../assets/images/new.png" style="height: 25px;margin-top: -2px!important;margin-left: 15px;" />
                </FirstClassMenu>
              <MenuItem name="mysitu">
                <router-link to="/situation" id="menu-par-mysituation" >我的场景
                    <span class='my_situation_num'>0</span>
                </router-link>
              </MenuItem>
              <MenuItem name="allsitu">
                 <router-link to="/AllSituation"  id="menu-par-open-situation">所有场景
                  <span class='all_situation_num'>0</span>
                </router-link>
              </MenuItem>
              <MenuItem name="siturule">
                <router-link to="/SituationRule"  id="menu-situation-rule">场景规则</router-link>
              </MenuItem>
          </Submenu>
          <Submenu name="2">
              <FirstClassMenu :isOpenProps="false" slot="title">
                  <i class="fa fa-fw fa-user"></i> 
                  我的告警<b class="myAlarm"></b>
              </FirstClassMenu>
              <MenuItem name="mActive">
                  <router-link to="/MyPending" data-type='mActive'>待处理
                   <span class='alarm_active'>0</span>
                  </router-link>              
              </MenuItem>
              <MenuItem name="mAck">
                <a href="javascript:;" data-type='mAck'>
                  处理中
                  <span class='alarm_ack'>0</span>
                </a>
              </MenuItem>
              <MenuItem name="mClosed">
                <a href="javascript:;" data-type='mClosed'>
                  已关闭
                  <span class='alarm_closed'>0</span>
                </a>
              </MenuItem>
          </Submenu>
          <Submenu name="3">
              <FirstClassMenu :isOpenProps="false" slot="title">
                  <i class="fa fa-fw fa-fire"></i> 
                  所有告警<b  class="allAlarm"></b>
              </FirstClassMenu>
              <MenuItem name="aActive">
                <a href="javascript:;" data-type='aActive'>
                  待处理
                  <span class='alarm_active'>0</span>
                </a>
              </MenuItem>
              <MenuItem name="aAck">
                <a href="javascript:;" data-type='aAck'>
                  处理中
                  <span class='alarm_ack'>0</span>
                </a>
              </MenuItem>
              <MenuItem name="aClosed">
                <a href="javascript:;" data-type='aClosed'>
                  已关闭
                  <span class='alarm_closed'>0</span>
                </a>
              </MenuItem>
          </Submenu>
          <Submenu name="4">
              <FirstClassMenu :isOpenProps="false" slot="title">
                  <i class="fa fa-fw fa-gear"></i> 
                                      配置
              </FirstClassMenu>
              <MenuItem name="app">
                  <a href="javascript:;">应用</a>
              </MenuItem>
              <MenuItem name="escalation">
                <a href="javascript:;">分派策略</a>
              </MenuItem>
              <MenuItem name="alertNtf">
                <a href="javascript:;">通知策略</a>
              </MenuItem>
              <MenuItem name="cooperation">
                 <a href="javascript:;">协作策略</a>
              </MenuItem>
              <MenuItem name="merge">
                 <a href="javascript:;">压缩规则</a>
              </MenuItem>
              <MenuItem name="scheduler">
                 <a id="menu-par-scheduler" href="javascript:;">排班</a>
              </MenuItem>
          </Submenu>
          <Submenu name="5">
              <FirstClassMenu :isOpenProps="false" slot="title">
                  <i class="fa fa-fw fa-bar-chart"></i> 
                                      分析
              </FirstClassMenu>
              <MenuItem name="overvie">
                  <a href="javascript:;">告警</a>
              </MenuItem>
              <MenuItem name="statistiApp">
                <a href="javascript:;">应用</a>
              </MenuItem>
              <MenuItem name="team">
                <a href="javascript:;">团队</a>
              </MenuItem>
              <MenuItem name="member">
                 <a href="javascript:;">成员</a>
              </MenuItem>
              <MenuItem name="notification">
                 <a id="menu-sub-notify" href="javascript:;">通知查询</a>
              </MenuItem>
          </Submenu>
          <Submenu name="6">
              <FirstClassMenu :isOpenProps="false" slot="title">
                  <i class="fa fa-fw fa-question-circle"></i> 
                                      帮助
              </FirstClassMenu>
              <MenuItem name="file">
                   <a href="http://wiki.onealert.com/" target="_blank">文档</a>
              </MenuItem>
              <MenuItem name="help">
                <a href="<%=contextPath%>/serviceapi/help.jsp?<%=token2 %>">新手向导</a>
              </MenuItem>
          </Submenu>
      </Menu>
</template>

<script>
import FirstClassMenu from './FirstClassMenu.vue'
import {
    Menu,
    MenuItem,
    Icon,
    Sider,
    Submenu
} from 'iview'
export default {
  name: 'Mymenu',
  data () {
    return {
      arrow1: 'fa fa-fw fa-caret-right'
    }
  },
  components: {
    Menu,
    MenuItem,
    Icon,
    Sider,
    Submenu,
    FirstClassMenu
  },
  methods: {
    changearrow1: function () {     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.ivu-menu-item>a {
    display: block;
    text-decoration: none;
    color: #d9d9d9;
    height: 40px;
}
.ivu-menu-item>a:hover {
    color: #25c151;
}
.sidemenu{
    position: fixed;
    top: 60px;
    left: 160px;
    width: 160px!important;
    margin-left: -160px;
    border: none;
    border-radius: 0;
    overflow-y: auto;
    background-color: #293543;
    bottom: 0;
    overflow-x: hidden;
    padding-bottom: 40px;
    font-size: 13px;
}
</style>
