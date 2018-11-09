<template>
  <div class="panel-heading del-heading">
    <div class="rule-des">规则名称：</div><div class="notify-name rule-des">{{name}}</div></br>
    <div class="rule-des" style="top: -79px;">场景描述：</div><div class="des-name rule-des des-name-spe" style="top: -79px;">{{des}}</div>
    <div class="pull-right" style="top: -79px;position:relative;">
      <span class="detail-font-subtitle">
      <input class="hidNotifyId" type="hidden"/>
      <input class="hidNotifyTitle" type="hidden"/>
      <a class='link-a btn-modify' style="margin-right: 15px">编辑</a><a class='link-a btn-del'>删除</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelHead',
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
</style>
