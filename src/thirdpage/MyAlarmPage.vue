<template>
  <div class="hello">
    <div class="main-list">
      <div class="search-result">
        <MyTable :data="dataSource" :columns="AlarmCol"/>
        <MyTableFoot></MyTableFoot>
      </div>
    </div>
  </div>
</template>

<script>
require("es6-promise").polyfill();
require('isomorphic-fetch'); 
import Mycrumb from '../components/layout/Mycrumb.vue'
import MyTable from '../components/MyTable.vue'
import MyTableFoot from '../components/MyTableFoot.vue'
import { AlarmCol } from '@/utils'
export default {
  name: 'MyAlarmPage',
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
      AlarmCol,
    }
  },
  created() {
        var target_url =this.COMMON._CTX_ALERT_URL
        switch(this.querytype)
        {
        case 'all':
          target_url += "api/alert/";
          break;
        case 'aActive':
          target_url += "api/alert/?pending=active";
          break;
        case 'aAck':
          target_url += "api/alert/?status=ACK";
          break;
        case 'aClosed':
          target_url += "api/alert/?status=CLOSED&activeCount=0";
          break;
        case 'mine':
          target_url += "api/alert/assigned/";
          break;
        case 'mActive':
          target_url += "api/alert/assigned/?pending=active";
          break;
        case 'mAck':
          target_url += "api/alert/assigned/?status=ACK";
          break;
        case 'mClosed':
          target_url += "api/alert/assigned/?status=CLOSED&activeCount=0";
          break;
        default:
          target_url += "api/alert/";
        }
        var params = "&page=" + (this.globalParams.page || 1) + "&rows=" +this.globalParams.pageSize + "&time=week";
        var req_url =target_url+ params +"&"+this.COMMON._CTX_TOKEN;
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
  },
  components: {
    Mycrumb,
    MyTable,
    MyTableFoot
  },
  methods: {
  },
  props: {
    querytype: {
      type: String,
      require: false
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
/*    margin-top: 50px;
*/    width: 99%;
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
