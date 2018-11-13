<template>
  <div class="hello">
    <Mycrumb firstData="工作台" secondData=""> 
    <a href="javascript:;" @click="NewRule" class="btn btn-success btn-banner-oper" style="margin-top: 12px;position: relative;top: -12px;">新增规则</a>
    </Mycrumb>
    <div class="main-list col-lg-12">
    <LeftPart :ruleStatus = "ruleStatus" v-on:NewRuleA="NewRuleA">
      <ListItem v-on:loadSingle="loadSingle" name="测试">的滴滴</br>{{sss}}</ListItem>
    </LeftPart>
    <NosituationRule v-if="isEmpty">
    </NosituationRule>
    <RightPart v-else>
      <PanelHead v-if="ruleStatus==1" name="测试" des="的滴滴"></PanelHead>
      <PanelHeadNew v-else-if="ruleStatus==0"></PanelHeadNew>
      <PanelBody v-if="ruleStatus==1" ></PanelBody>
      <PanelBodyNew v-else-if="ruleStatus==0"></PanelBodyNew>
    </RightPart>
    </div>
  </div>
</template>
<script>
import Mycrumb from '../components/Mycrumb.vue'
import LeftPart from '../components/LeftPart.vue'
import RightPart from '../components/RightPart.vue'
import NosituationRule from '../components/NosituationRule.vue'
import ListItem from '../components/ListItem.vue'
import PanelHead from '../components/PanelHead.vue'
import PanelBody from '../components/PanelBody.vue'
import PanelHeadNew from '../components/PanelHeadNew.vue'
import PanelBodyNew from '../components/PanelBodyNew.vue'
export default {
  name: 'SituationRule',
  data () {
    return {
      isEmpty: false,
      ruleStatus: 1,
      sss: this.COMMON.ucidUrl
    }
  },
  components: {
    Mycrumb,
    LeftPart,
    RightPart,
    NosituationRule,
    ListItem,
    PanelHead,
    PanelBody,
    PanelHeadNew,
    PanelBodyNew
  },
  methods: {
    NewRule: function (){
      this.ruleStatus=0
    },
    NewRuleA: function(){
      this.ruleStatus=0
    },
    loadSingle: function(){
      this.ruleStatus=1
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*上面的导航栏*/
ol#timeco {
    height: 39px;
    margin-top: 0px;
    width: 100%;
}
.breadcrumb {
    margin-bottom: 10px;
}
select.choose-type {
    width: 133px;
    display: inline-block;
    margin-left: 15px;
    height: 30px;
    font-size: 10px;
    position: relative;
    top: -5px;
}
/*下面的表格*/
.main-list {
    width: 99%;
    border-radius: 0px;
    background: #f5f7f9;
    padding: 0;
}
.search-result {
    margin-top: 10px;
    border-top: 1px solid #f4f4f4;
}
button.close-situ {
    background: white;
    border: 1px solid #c7c2c2;
    border-radius: 4px;
    width: 87px;
    height: 24px;
    position: relative;
    top: 0px;
    margin-right: 17px;
}
.modal-item:hover {
    background-color: #F0F3F7;
    cursor: pointer;
}
.modal-item:hover {
    background-color: #F0F3F7;
    cursor: pointer;
}
.addApp {
    padding-top: 25px;
}
.modal-item {
    height: 89px;
    border-left: 6px solid #56A9F2;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    border-right: 0px;
    padding: 16px 20px 16px 0;
    vertical-align: middle;
}
.addApp {
    padding-top: 25px;
}
.addApp > div:first-child {
    text-align: center;
    border-right: 1px solid #d9d9d9;
}
.modal-item > div:nth-child(2) {
    padding-left: 25px;
    font-size: 15px;
    height: 32px;
    line-height: 32px;
}
.modal-item-other {
    border-bottom: 0;
    border-left: 6px solid #6CBA00;
    padding-left: 20px;
    display: block;
}

</style>
