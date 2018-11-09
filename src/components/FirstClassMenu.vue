<template>
  <div slot="title" @click="changeArrow">
    <slot></slot>
    <span class='pull-right' style="margin-top: 3px;"><i :class="arrow"></i></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: this.isOpenProps,
    }
  },
  props: {
    isOpenProps: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    arrow() {
      return `fa fa-fw ${this.isOpen ? "fa-caret-down" : "fa-caret-right"}`;
    }
  },
  methods: {
    changeArrow(){
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
