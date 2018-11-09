<template>
	<div class="col-lg-7 col-md-7 col-sm-7 col-xs-12 modal-item-detail-list padding0 noData-row " id="">
 	  <div class = 'rightAside rightAsideContent'>
			<h5>您还未创建场景规则</h5>
			<p>缺省情况下，按照内置的合并规则生成场景。</p>
			<p>配置场景规则，包含配置场景生成规则和场景合并告警规则：</p>
			<span class="list-span">配置告警生成场景的触发条件，支持按照告警对象、告警内容、主机、服务、告警级别配置条件；</span>
			<span class="list-span">配置告警合并规则，生成场景后，可自定义按照告警内容、告警对象、主机、服务的相似度合并，推荐设定相似度≥75%；</span>
			<span class="list-span">配置生成场景的最小告警数量；</span>
			<span class="list-span">配置生成场景和合并告警的最大时间，推荐最大时间间隔≤4h</span>
			<div class="question-list">
				<span>常见问题</span>
				<div class="row">
	      	<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">场景描述有什么用？</div>
					<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><span class="pull-right"><i class="fa fa-angle-right"></i></span></div>
				</div>
					<div class="answer-list">场景描述用于生成场景后的描述，可用于界面直观查看问题，通知时也会有描述字段。</div>
				<div class="row">
	      	<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">持续时长影响范围？</div>
					<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><span class="pull-right"><i class="fa fa-angle-right"></i></span></div>
				</div>
				<div class="answer-list">持续时长，既应用于 生成场景，又应用于 合并告警。</div>
			</div>
		</div>
 	</div>
</template>

<script>
export default {
  name: 'NosituationRule',
  data() {
    return{
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
.modal-item-detail-list {
    background-color: #f9f9f9;
    border: 1px solid #d9d9d9;
}
.rightAside {
    border: 0!important;
    min-height: 0!important;
    overflow-y: auto;
}
</style>
