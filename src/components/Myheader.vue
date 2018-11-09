<template>
      <Menu mode="horizontal" theme="dark" active-name="1" class="navbar navbar-inverse navbar-fixed-top">
          <div class="navbar-header">
            <a class="navbar-brand"></a>
          </div>
          <TopBarMenu></TopBarMenu>
          <div class="layout-nav">
            <ul class="nav navbar-right top-nav" style="margin-top: 5px;">
              <li style="margin: 0px;">
                <a id="btn-userVersion" href="javascript:void(0)"><span id="span-userVersion">专业版</span></a>
              </li>
              <li class="" style="margin: 0px;">
                <a id="cost-menu" href="<%=contextPath %>/cost/licensePurchasing.jsp?currentMenu=cost&menuType=licensePurchasing&<%=token2 %>">费用</a>
              </li>
              <li class="" style="margin: 0px;">
                <a id="team-menu" href="<%=contextPath %>/user/List.jsp?<%=token2%>&currentMenu=control">团队</a>
              </li>
              <li class="dropdown" style="margin: 0px;margin-top: 7px;" @click="methdrop">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="<%=photo %>" class="inlineBlock userImg">ssss<b class="caret"></b></a>
                <ul v-if="ifdrop" class="dropdown-menu">
                  <li style="display: block;margin-top: 3px;margin-left: 0px;margin-right: 0px;">
                      <a href="<%=contextPath %>/ucid/personalPage.jsp?<%=token2%>&leftMenu=myZone&menuType=baseInfo&showTabIndex=0&currentMenu=center" id="center_a" ><i class="fa fa-user-circle"></i>个人中心</a>
                  </li>
                  <li style="display: block;margin-top: 3px;margin-left: 0px;margin-right: 0px;">
                      <a href="javascript:;" onclick="doMenuLogout()"><i class="fa fa-power-off"></i>退出</a>
                  </li>
              </ul>
              </li>
            </ul>
          </div>
      </Menu>
</template>

<script>
import TopBarMenu from './TopBarMenu.vue'
import {
    Menu,
    MenuItem,
    Icon
} from 'iview'
export default {
  name: 'Myheader',
  data () {
    return {
      ifdrop:false
    }
  },
  components: {
    Menu,
    MenuItem,
    Icon,
    TopBarMenu
  },
  methods: {
    methdrop: function () {
      this.ifdrop=!this.ifdrop
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
a {
  color: #42b983;
}
.navbar-brand{
  background: url("../assets/images/alert_logo.png") no-repeat;
  background-size: contain;
  width: 87px;
  height: 40px;
  margin: 20px 20px 0 20px;
  display: block;
}
.dropdown-menu {
    float: left;
    position: absolute;
    margin-top: 0;
    border: 1px solid rgba(0,0,0,.15);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: #fff;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    right: 0;
    left: auto;
    display: block;
    top: 100%;
    z-index: 1000;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-clip: padding-box;
    border-radius: 4px;
    height: 72px;
}
.dropdown-menu>li>a {
    white-space: normal;
    padding: 5px 15px;
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
}
</style>
