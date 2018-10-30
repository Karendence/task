<template>
      <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
              <MenuItem name="1">
                  <Icon type="ios-navigate"></Icon>
                  Item 1
              </MenuItem>
              <MenuItem name="2">
                  <Icon type="ios-keypad"></Icon>
                  Item 2
              </MenuItem>
              <MenuItem name="3">
                  <Icon type="ios-analytics"></Icon>
                  Item 3
              </MenuItem>
              <MenuItem name="4">
                  <Icon type="ios-paper"></Icon>
                  Item 4
              </MenuItem>
          </div>
      </Menu>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: ''
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
