<template>
      <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
          <Submenu name="1">
              <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
          </Submenu>
          <Submenu name="2">
              <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
              <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
      </Menu>
</template>

<script>
export default {
  name: 'Menu',
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
