// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import iView from 'iview';
import 'iview/dist/styles/iview.css'
import common from './components/Common.vue'
import './assets/styles/bootstrap.min.css'
import './assets/font-awesome/css/font-awesome.min.css'
import './assets/styles/sb-admin.css'
import './assets/styles/layout.css'
import './assets/styles/common.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
// Vue.use(iView);
Vue.prototype.COMMON = common
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
