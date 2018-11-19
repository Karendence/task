<template>
  <div>
    <div class="firstMenu">
        <MenuItem name="1">
          <router-link tag="span" to="/dashboard">
            Dashboard
          </router-link>
        </MenuItem>
        <MenuItem name="2">
            集成
        </MenuItem>
        <MenuItem name="3">
            分析
        </MenuItem>
        <MenuItem name="4">
            配置
        </MenuItem>
    </div>
  </div>
</template>

<script>
import {
    MenuItem
} from 'iview'
export default {
  name: 'TopBarMenu',
  data () {
    return {
      ifclose: true
    }
  },
  components: {
    MenuItem
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
