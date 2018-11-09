<template>
<Mycrumb firstData="我的告警" secondData="待处理">
    <li class="active">
        <span class="spespan"></span>
        <a data-toggle="modal" href="#addAlarm" class="btn btn-success btn-banner-oper speli">手动添加告警</a>
    </li>
</Mycrumb>
</template>

<script>
import Mycrumb from '../components/Mycrumb.vue'
export default {
  name: 'MyPending',
  data () {
    return {
    }
  },
  props: {
  },
  components: {
    Mycrumb
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
</style>
