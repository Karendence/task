<template>
  <div class="hello">
    <Mycrumb firstData="工作台" secondData="我的场景"> 
      <select class="form-control choose-type">
        <option value="ACTIVE">打开的场景</option>
        <option value="CLOSED">关闭的场景</option>
      </select>
    </Mycrumb>
    <div class="main-list">
      <div class="search-result">
        <MyTable>
          <template slot="th">
            <th>场景编号</th>
            <th>描述</th>
            <th>优先级</th>
            <th>影响服务</th>
            <th>生成时间</th>
            <th>告警数量</th>
            <th>分派人</th>
          </template>
          <tr><td></td><td>sss</td><td>sss</td><td>sss</td><td>sss</td><td>sss</td><td>sss</td><td>sss</td></tr>
        </MyTable>
        <MyTableFoot></MyTableFoot>
      </div>
    </div>
  </div>
</template>

<script>
import Mycrumb from '../components/Mycrumb.vue'
import MyTable from '../components/MyTable.vue'
import MyTableFoot from '../components/MyTableFoot.vue'
export default {
  name: 'Situation',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Mycrumb,
    MyTable,
    MyTableFoot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*上面的导航栏*/
ol#timeco {
    height: 39px;
    margin-top: 0px;
    width: 100%;
}
.breadcrumb {
    margin-bottom: 10px;
}
select.choose-type {
    width: 133px;
    display: inline-block;
    margin-left: 15px;
    height: 30px;
    font-size: 10px;
    position: relative;
    top: -5px;
}
/*下面的表格*/
.main-list {
    margin-top: 50px;
    width: 99%;
    margin-left: 5px;
    border: 1px solid #e6e3e3;
    border-radius: 0px;
    background: white;
}
.search-result {
    margin-top: 10px;
    border-top: 1px solid #f4f4f4;
}
</style>
