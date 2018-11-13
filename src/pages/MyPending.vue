<template>
  <div>
    <Mycrumb firstData="我的告警" secondData="待处理">
        <li class="active">
            <span class="spespan"></span>
            <a data-toggle="modal" href="#addAlarm" class="btn btn-success btn-banner-oper speli">手动添加告警</a>
        </li>
    </Mycrumb>
    <LeftBlank style="height:calc(100vh - 160px) ;">
      <noAlert v-if="ifEmpty"></noAlert>
      <div v-else>
        <RowQuery></RowQuery>
      </div>
    </LeftBlank>
    <RightBlank style="height:calc(100vh - 160px) ;">
      <noAlarm v-if="ifEmpty"></noAlarm>
    </RightBlank>
  </div>
</template>
<script>
import Mycrumb from '../components/Mycrumb.vue'
import LeftBlank from '../components/LeftBlank.vue'
import RightBlank from '../components/RightBlank.vue'
import noAlert from '../components/noAlert.vue'
import noAlarm from '../components/noAlarm.vue'
import RowQuery from '../components/RowQuery.vue'
export default {
  name: 'MyPending',
  data () {
    return {
      ifEmpty:false
    }
  },
  props: {
  },
  components: {
    Mycrumb,
    LeftBlank,
    RightBlank,
    noAlert,
    noAlarm,
    RowQuery
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.breadcrumb>.active {
  color: #777;
}
.speli{
  margin-top: 12px;
  position: relative;
  top: -12px;
  margin-left: 23px;
}
span.spespan {
  display: inline-block;
  width: 1px;
  background: #a8a31687;
  height: 15px;
  position: relative;
  top: -3px;
  left: 10px;
}
.panel {
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 0px 0px rgba(0,0,0,0);
    box-shadow: 0 0px 0px rgba(0,0,0,0);
}
</style>
