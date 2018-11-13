<template>
  <div class="noalarm">
    <p>世界上最美好的事情</p>
    <p>就是没有任何告警</p>
  </div>
</template>

<script>
export default {
  name: 'noAlarm',
  data () {
    return {
    }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.noalarm {
    background: url(../assets/images/nothing.png) no-repeat;
    width: 240px;
    height: 96px;
    padding-left: 110px;
    padding-top: 25px;
    margin: 110px auto 30px auto;
}
</style>
