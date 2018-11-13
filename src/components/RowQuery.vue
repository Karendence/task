<template>
  <div class="row-query">
		<div>
			<input type="text" id="txt-query-entity" class="form-control" placeholder="告警对象"/> 
		</div>
		<div>
			<input type="text" id="txt-query-alarmContent" class="form-control" placeholder="告警内容"/> 
		</div>
		<div>
			<input type="text" id="txt-query-hostIp" class="form-control" placeholder="主机IP"/> 
		</div>
		<div>
			<button id='btn-alarm-query' type="button" class="btn btn-default"><i class="fa fa-search"></i></button>
			<a href="javascript:void(0)" id="btn-batch-opera" class="no-outline btn-green-link">批量操作</a>
		</div>
	</div>
</template>
<script>
export default {
  name: 'RowQuery',
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
.row-query {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    background-color: #ffffff;
    margin: 0;
    line-height: 40px;
    padding-top: 4px;
    border-width: 1px 1px 0px 1px;
    border-style: solid;
    border-color: #d9d9d9;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d9d9d9;
}
.row-query>div {
    padding-left: 2px;
    padding-right: 2px;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: inline-block;
}
.row-query>div:first-child {
    padding-left: 10px;
}
.row-query>div:last-child {
    flex: 2;
}
#btn-alarm-query {
    margin-bottom: 8px;
    padding: 5px 12px;
}
</style>
