import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Situation from '@/pages/Situation'
import AllSituation from '@/pages/AllSituation'
import SituationRule from '@/pages/SituationRule'
import MyPending from '@/pages/MyPending'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    {
      // 地址
      path: '/situation',
      component: Situation
    },
    {
      // 地址
      path: '/AllSituation',
      component: AllSituation
    },
    {
      // 地址
      path: '/SituationRule',
      component: SituationRule
    },
    {
      // 地址
      path: '/MyPending',
      component: MyPending
    }
  ]
})
