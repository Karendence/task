<template>
  <div class="hello">
    <div class="col-lg-12">
      <ol class="breadcrumb" id="timeco">
        <span class="alarm-title-span">{{firstPart}}</span>
        <span class="sec-title">{{secondPart}}</span>
        <slot></slot>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mycrumb',
  data () {
    return {
      firstPart: this.firstData,
      secondPart: this.secondData
    }
  },
  props: {
    firstData: {
      type: String,
      required: false
    },
    secondData: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ol#timeco {
    height: 39px;
    margin-top: 0px;
    width: 100%;
}
.breadcrumb {
    margin-bottom: 10px;
}
span.alarm-title-span {
    position: relative;
    padding-right: 12px;
    border-right: 1px solid #a8a31687;
    border-radius: 1px;
    top: -6px;
}
span.sec-title {
    margin-left: 10px;
    top: -6px;
    position: relative;
}
</style>
