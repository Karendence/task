<template>
  <div>
    <div class="nodata"></div>
    <h4>您没有任何告警</h4>
  </div>
</template>

<script>
export default {
  name: 'noAlert',
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
.nodata {
    background: url(../assets/images/doc.png) no-repeat;
    width: 46px;
    height: 64px;
    margin: 110px auto 30px auto;
}
h4 {
    text-align: center;
    font-family: 微软雅黑;
    color: #B0BAC5;
}
</style>
