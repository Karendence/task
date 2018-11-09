<template>
  <div class="modal-item-detail-title border-has">
    <span>新增规则</span>
  </div>
</template>

<script>
export default {
  name: 'PanelHeadNew',
  data () {
    return {
    }
  },
  props: {
    name: {
      type: String,
      required: false
    },
    des: {
      type: String,
      required: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel-heading {
    border-top: 1px solid;
}
.panel-heading {
    height: 96px;
    line-height: 96px;
    background-color: #F0F3F7;
    padding: 0 10px 0 25px;
}
.panel-default>.panel-heading {
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;
    border-left: 6px solid #6CBA00;
}
.rule-des {
    display: inline-block;
    height: 29px;
    position: relative;
    top: -13px;
}
.detail-font-subtitle {
    font-size: 12px;
    color: #868686;
}
.border-has {
    border-left: 6px solid #56A9F2;
}
.modal-item-detail-title {
    height: 96px;
    line-height: 96px;
    font-size: 16px;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    border-right: 0px;
    padding-left: 20px;
    background-color: #F0F3F7;
}
</style>
