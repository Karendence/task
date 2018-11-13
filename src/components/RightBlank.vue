<template>
  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12 introduce padding0 hasData-row" id="">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RightBlank',
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
.padding0 {
    padding-left: 0px;
    padding-right: 0px;
}
.introduce {
    height: 90%;
}
.panel {
    border: 0px!important;
    border-radius: 0px!important;
}
.introduce {
    padding-top: 25px;
    /* min-height: 528px; */
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #d9d9d9;
    background-color: #fff;
}
</style>
