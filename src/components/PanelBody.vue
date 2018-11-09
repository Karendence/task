
<template>
<div class="panel-body">
	<div class="desDiv" style="display:  block;margin: 0;width:  auto;margin-top: 20px;">
		<label for="">触发条件: </label>
		<div class="contentContainerAdd parentCondition" style="display: inline-grid;margin-left: 4px;width: 86%;border: 1px solid #d9d9d9;margin-bottom: 35px;">
		</div>
	</div>
	<div class="desDiv" style="display:  block;margin: 0;width:  auto;">
		<label for="">合并规则: </label>
		<div class="contentContainerAdd" style="display: inline-grid;margin-left: 4px;width: 86%; border: 1px solid #d9d9d9;">
		<!-- 合并规则组件 -->
		</div>
	</div>
	<div class="desDiv">
		<label for="alarm-num">告警数量：  </label><span style="margin-left: 12px;">≥</span>
		<input id="alarm-num" name="alarm-num" class="form-control" type="text" placeholder=""/><span style="margin-left: 12px;">个</span><i class="fa fa-question-circle" data-toggle="tooltip" title='满足触发条件和合并规则的告警数量大于设定阈值时可生成场景'></i>
	</div>
	<div class="desDiv" style="display:  block;text-align:  left;width:  auto;">
		<label for="last-time">持续时长：  </label><span style="margin-left: 12px;">≤</span>
		<input id="last-time-h" name="last-time" class="form-control" type="text" placeholder="" style="width: 47px;"/><span>小时</span>
		<input id="last-time-m" name="last-time" class="form-control" type="text" placeholder="" style="width: 47px;"/><span>分钟</span>
		<i class="fa fa-question-circle" data-toggle="tooltip" title='满足触发条件和合并规则的告警，在持续时长内可以合并到同一场景；超时后，将生成新的场景。'></i>	
	</div>
	<div class="desDiv spe-addEscModal" style="width: 100%;border-top: 1px solid #d9d9d9;margin-top: 22px;">
		<div class="div-ruleUsers-parent addEscModal ">
			<div class="ruleRightDiv1">
				<p class="userTitle">场景生成后，分派给以下用户</p>
				<i class="fa fa-times-circle remove-ruleUsers"></i>
				<ul class="userUl addUserUl spe-user-ul"></ul>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'PanelBody',
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
.desDiv label {
    color: #666;
}
.contentContainerAdd {
    background-color: #ffffff;
    /* border-bottom: 1px solid #d9d9d9; */
    margin-left: 20px;
    padding: 10px;
}
.div-or-condition-add, .orDivOut {
    height: 60px;
}
.orDivBr {
    border-left: 1px solid #d9d9d9;
    border-radius: 15px;
    height: 60px;
    width: 1px;
    margin: auto auto;
    z-index: -1;
}
.orDiv {
    border: 1px solid #5cb85c;
    border-radius: 15px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 30px;
    margin: auto auto;
    margin-top: -45px;
    font-weight: bold;
    z-index: 1;
}
.orDivText {
    border: 1px solid #337ab7;
    background-color: #337ab7;
    color: #ffffff;
}
.ruleAddCondition {
    border: 1px solid #d9d9d9;
    padding: 10px;
}
.addConditionBr {
    border-left: 1px solid #b2b2b2;
    border-bottom: 1px solid #b2b2b2;
    width: 60px;
    height: 40px;
    margin-left: 25px;
    z-index: -1;
}
.addInner {
    margin-top: -20px;
    z-index: 1;
}
.addDiv {
    margin-right: 26px;
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: #337ab7;
    color: #ffffff;
    text-align: center;
    border-radius: 26px;
    vertical-align: middle;
    padding-top: 2px;
    margin-top: 2px;
    line-height: 27px;
    margin-left: 11px;
}
.appSubDll {
    width: 18%;
    display: inline-block;
    font-size: 13px;
    text-indent: 1px;
    padding-left: 7px;
    padding-right: 2px;
}
.conditionalDll {
    width: 15%;
    display: inline-block;
    font-size: 13px;
    text-indent: 1px;
    padding-left: 9px;
    padding-right: 2px;
}
.valueTxt {
    width: 40%;
    display: inline-block;
}
.item-div {
    height: 30px;
    position: static;
    vertical-align: middle;
    margin-left: -64px;
    margin-top: 2px;
}
.spe-in {
    opacity: 0;
    z-index: 1;
    position: relative;
    left: 53px;
}
.item-div span {
    position: relative!important;
    top: -57px;
}
input[type=checkbox]+span {
    display: inline-block;
    height: 1em;
    width: 1em;
    border-radius: 4px;
    background-color: white;
    border: 1px solid #b2abab;
    margin: 20px;
    position: relative;
    top: -33px;
}
input[type=checkbox]:checked+span {
    background-color: white;
/*    top: -2px;*/ 
    font-size: 13px;
    font-weight: 200;
    text-align: center;
    vertical-align: middle;
    line-height: 13px;
    top: -57px;
}
input[type=checkbox]:checked+span:before {
    content: "\2714";
    color: gray;
}
.item-div span {
    position: relative!important;
    top: -57px;
}
.box {
    position: relative;
    width: 200px;
    height: 50px;
    border: 1px solid #eee0;
    margin: 50px auto 0;
    display: inline-block;
    top: -57px;
    left: 45px;
}
.bg {
    height: 19px;
    margin-top: 19px;
    border: 1px solid #ddd;
    border-radius: 1px;
    overflow: hidden;
    position: relative;
    top: 5px;
    z-index: 999;
    background: #f2f2f2;
}
.bgcolor {
    background: #98CF4D;
    width: 0;
    height: 20px;
    border-radius: 0px;
    pointer-events: none;
    background: linear-gradient(to right, rgba(149, 234, 42, 0.32), rgba(149,234,42,0.9));
}
.bt {
    width: 8px;
    height: 26px;
    background-color: #c7c7c7;
    /* border-radius: 17px; */
    overflow: hidden;
    position: absolute;
    left: 0px;
    margin-left: 0px;
    top: 21px;
    cursor: pointer;
    z-index: 999;
}
.text {
    width: 200px;
    margin: 0 auto;
    font-size: 13px;
    line-height: 2em;
    display: inline;
    margin-left: 10px;
    top: -57px;
    position: relative;
    left: 50px;
    color: #333;
}
input#alarm-num {
    display: inline-block;
    width: 48px;
    margin-left: 10px;
}
.fa-question-circle {
    font-size: 18px;
    cursor: pointer;
    color: #b3b2b2;
}
input[name=last-time] {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
}
.desDiv {
    margin: 10px auto;
}
.ruleRightDiv1 {
    margin-top: 30px;
}
.userTitle {
    color: #6CBA00;
    text-align: left;
    width: 300px;
    display: inline-block;
}
.fa-times-circle {
    margin-left: 10px;
    font-size: 18px;
    cursor: pointer;
    color: #b3b2b2;
    margin-top: 7px;
}
.addUserUl {
    margin-left: 30px;
    margin-top: 13px;
}
.userUl {
    margin: 0;
    list-style: none;
    padding: 0px;
}
.queryUser {
    border: 1px solid #b2b2b2;
    display: inline-block;
    margin-right: 5px;
    padding: 3px;
}
.queryUser i {
    margin-right: 3px;
}
</style>
