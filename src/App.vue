<template>
    <div class="layout">
        <Layout>
            <Myheader></Myheader>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Mymenu></Mymenu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Mybreadcrumb>
                    </Mybreadcrumb>
                    <router-view></router-view>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import Mybreadcrumb from './components/Mybreadcrumb.vue'
import Mymenu from './components/Mymenu.vue'
import Myheader from './components/Myheader.vue'
import {
    Button,
    Layout,
    Header,
    Menu,
    MenuItem,
    Icon,
    Sider,
    Submenu,
    Breadcrumb,
    BreadcrumbItem,
    Content,
} from 'iview'
export default {
  name: 'App',
  data () {
    return {
      sss: this.COMMON.ucidUrl
    }
  },
  components: {
    Button,
    Layout,
    Header,
    Menu,
    MenuItem,
    Icon,
    Sider,
    Submenu,
    Breadcrumb,
    BreadcrumbItem,
    Content,
    Mybreadcrumb,
    Mymenu,
    Myheader
  }
}

</script>

<style>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
