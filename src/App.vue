<template>
  <div id="app">
    <div class="layout">
        <Layout>
            <Header>
            </Header>
            <Layout>
                <Menu hide-trigger :style="{background: '#fff'}">
                </Menu>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Menu from './components/Menu.vue'
export default {
  name: 'App',
  data () {
    return {
      sss: this.COMMON.ucidUrl
    }
  },
  components: {Header, Breadcrumb, Menu}
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
