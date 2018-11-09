<template>
  <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem>Layout</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
import {
    Breadcrumb,
    BreadcrumbItem
} from 'iview'
export default {
  name: 'Mybreadcrumb',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Breadcrumb,
    BreadcrumbItem
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
