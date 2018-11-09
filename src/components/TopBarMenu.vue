<template>
  <div>
    <img v-if="ifclose" src="../assets/images/header-menu-close.png" class="change-menu-status aa" @click="metopen"/>
    <img v-else src="../assets/images/header-menu-close.png" class="change-menu-status go" @click="metclose" />
     <transition name="fade">
      <span v-if="ifclose" transiton="fade">
        <ul id="top_nav" class="nav navbar-nav">
          <li class="active">
            <a href="<%=contextPath %>/alarm/index.jsp?<%=token2%>" ><i class="iconfont header-menu-img">&#xe6ac;</i>告警</a>
          </li>
        </ul>
      </span>
    <span v-else transiton="fade">
      <ul class="all-menu">
       <li class="group " data-name="gaojing" >
         <a href="<%=contextPath %>/alarm/index.jsp?<%=token2%>" ><i class="iconfont">&#xe6ac;</i><span>告警</span></a>
       </li>
       <li class="group" data-name="task">
          <a href="<%=itsmConsolePath %>/index.html?menuType=task" ><i class="iconfont">&#xe666;</i><span>工单</span></a>
       </li>
       <li class="group" data-name="knowledge">
         <a href="<%=itsmConsolePath %>/index.html?menuType=knowledge" ><i class="iconfont">&#xe644;</i><span>知识库</span></a>
       </li>
       <li class="group" data-name="servicedesk">
         <a href="http://v2.110monitor.com"  ><i class="iconfont">&#xe645;</i><span>服务台</span></a>
       </li>
       <li class="group hidden" data-name="cmdb">
          <a href="http://v2.110monitor.com/cmdb.html" target="_blank"><i class="iconfont">&#xe8ca;</i><span>CMDB</span></a>
       </li>
       </ul>
    </span>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'TopBarMenu',
  data () {
    return {
      ifclose: true
    }
  },
  components: {

  },
  methods: {
    metopen: function () {
      this.ifclose = false
    },
    metclose: function () {
      this.ifclose = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aa{
    transition: all 0.5s;
    }
.go{
    transform:rotate(45deg);
    transition: all 0.5s;
}
.all-menu li {
    margin-right: 60px;
    cursor: pointer;
    position: relative;
    top: -19px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.all-menu li i {
    margin-right: 5px;
}
.all-menu {
    display: inline-block;
    font-size: 14px!important;
    height: 28px;
    padding: 3px 0px 4px 74px;
    background: rgba(85, 85, 85, 0.45);
    margin-top: 16px;
    margin-left: 14px;
    position: absolute;
}
</style>
