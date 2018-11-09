<template>
    <table class="table table-striped content-table">
      <thead>
        <tr>
          <th></th>
          <slot name="th"></slot>
        </tr>
      </thead>
      <tbody>
        <slot></slot>
      </tbody>
    </table>
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
      type: Boolean,
      required: false
    },
    secondData: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
thead {
    font-size: 16px;
    letter-spacing: 1.9px;
    color: #939393;
    border-top: 0px;
    font-weight: normal;
    font-size: 14px!important;
}
</style>
