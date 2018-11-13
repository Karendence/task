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
        <MyTable :data="dataSource" :columns="columns"/>
        <MyTableFoot></MyTableFoot>
      </div>
    </div>
  </div>
</template>

<script>
require("es6-promise").polyfill();
require('isomorphic-fetch'); 
import Mycrumb from '../components/Mycrumb.vue'
import MyTable from '../components/MyTable.vue'
import MyTableFoot from '../components/MyTableFoot.vue'
import { columns } from '@/utils'
export default {
  name: 'Situation',
  data () {
    return {
      status: 'ACTIVE',
      globalParams:{
        page : 1,//当前页码
        pageSize : 10,    //每页条数
        totalPageCount : 0,//总页数
        param : '',//参数
        sort : 'desc' //排序
      },
      dataSource: [],
      columns,
    }
  },
  created() {

    // this.$nextTick(function(){
        var param = this.globalParams.param + "&offset=" + (this.globalParams.page-1)*this.globalParams.pageSize+ "&limit=" + this.globalParams.pageSize + "&sort=" +this. globalParams.sort;
        var req_url = this.COMMON._CTX_GATEWAY_URL + "data-biz/situations/ri/"+this.COMMON._CTX_OWNER+"?status="+ this.status +"&"+this.COMMON._CTX_TOKEN  + param;
        fetch(req_url, {
          method: "GET",
          mode: "cors",
          credentials: 'include',
        }).then((res) => res.json()).then((data) => {
          if (data.result === 'success') {
            this.dataSource = data.data;
          } else {
            console.log(data.message || data.result);
          }
        })
    // })
  },
  components: {
    Mycrumb,
    MyTable,
    MyTableFoot
  },
  methods: {
    loadData(callback){
      
    }
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
