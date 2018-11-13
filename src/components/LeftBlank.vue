<template>
  <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 list-left">
    <div id="introduce-list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftBlank',
  data () {
    return {
    }
  },
  props: {
    ruleStatus: {
      required: false,
      type: Number
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-left {
    padding-left: 6px;
    padding-right: 10px;
    height: 90%;
}
#introduce-list {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #d9d9d9;
    background-color: #fff;
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
    cursor: pointer;
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
</style>
