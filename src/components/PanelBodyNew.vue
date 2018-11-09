<template>
  <form id="myform">
    <input id="operateType" type="hidden" value="add"/>
    <div id="wrapper_add">
        <div id="page-wrapper-add">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="contentContainerAdd">
                            <div class="desDiv">
                                <label for="txtDescription">规则名称：</label>
                                <input id="txtDescription" name="txtDescription" class="form-control required" type="text" placeholder="场景规则名称"/>
                                &nbsp;&nbsp;<span style="color:#f43733;font-size: 16px;position: relative;top: 4px;">*</span>
                            </div>
                            <div class="desDiv" style="display:  block;margin: 0;width:  auto;">
                                <label for="">场景描述：</label>
                                <input type="text" class="form-control required  " id="descsituation" style="width: 456px;" name="des-input">&nbsp;&nbsp;<span style="color:#f43733;font-size: 16px;position: relative;top: 4px;">*</span><i class="fa fa-question-circle" style="    margin-left: 10px;" data-toggle="tooltip" title='场景描述用于生成场景后的描述，可用于界面查看和通知'></i>
                            </div>
                            <span class="spe-error error hidden" style="position:  relative;left: 70px;top: 30px;">触发条件和合并规则至少一种</span>
                            <div class="desDiv primaryAlert" style="display:  block;margin: 0;width:  auto;">
                                <label for="">触发条件: </label>
                                <div class="contentContainerAdd" style="padding:25px 10px 15px 0px;border: 1px solid #dfdfdf;display: inline-grid;margin-left: 11px;width: 82%;border-radius:  5px;margin-top: 36px;padding:  10px;">
                                    <div class="conditionGroup addConditionGroup">
                                        <div class="ruleAddCondition myRuleAddCondition">
                                            <i class="fa fa-times-circle pull-right del-first-orDiv"></i>
                                            <label class="valid-error-log hidden"></label>  
                                            <div class="div-defalut-condition">
                                                <select name="appSubDll" class="form-control  appSubDll">
                                                    <option value="host">主机</option>
                                                    <option value="service">服务</option>
                                                    <option value="alarmContent">告警内容</option>
                                                    <option value="entityName">告警对象</option>
                                                </select>
                                                <select name="conditionalDll" class="form-control  conditionalDll">
                                                    <option value="1" selected="selected">等于</option> 
                                                    <option value="5">包含</option>
                                                </select>
                                                <input type="text"  name="valueTxt" class="form-control valueTxt checkvalueinput" maxlength="100" minlength="1" placeholder="" />
                                            </div>      
                                            <div class="div-add-condition-add">
                                                <div class="addConditionBr"></div>
                                                <div class="addInner">
                                                    <div class="addDiv">且</div>
                                                    <div class="addConditionBtnDiv btn-success">
                                                        <div class="addAndBtn">
                                                            <i class="fa fa-plus"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="div-or-condition-add">
                                        <div class="orDivBr orDivBrBottom"></div>
                                        <div class="orDiv orDivBottom btn-success orDivAdd">或</div>
                                    </div>
                                </div>
                            </div>
                            <div class="desDiv" style="display:  block;margin: 0;width:  auto;">
                                <label for="">合并规则: </label>
                                <div class="contentContainerAdd" style="display: inline-grid;margin-left: 4px;width: 86%;">
                                    <div class="conditionGroup" style="width:100%;position:  relative;left:  -10px;height: 155px;border: 1px solid #dfdfdf;border-radius: 4px;margin-left: 4px;">
                                        <div  style="position:  relative;top: 0px;">
                                            <div class="item-div">
                                                <input type="checkbox" id="content-in" name="check" class="spe-in" style="width: 10%;position:  relative;top: -52px;" /><span class="trigger-span"></span><span style="width: 57px;display:  inline-block;">告警内容</span>
                                                <div class="box">
                                                <div class="bg">
                                                  <div class="bgcolor"></div>
                                                </div>
                                                <div class="bt"></div>
                                                </div>
                                                <div class="text"></div>
                                            </div>
                                            <div class="item-div">
                                                <input type="checkbox" id="entity-in"  name="check" class="spe-in" style="width: 10%;position:  relative;top: -52px;"  /><span class="trigger-span"></span><span style="width: 57px;display:  inline-block;">告警对象</span>
                                                <div class="box">
                                                <div class="bg">
                                                  <div class="bgcolor"></div>
                                                </div>
                                                <div class="bt"></div>
                                                </div>
                                                <div class="text"></div>
                                            </div>
                                            <div class="item-div">
                                                <input type="checkbox" id="host-in"  name="check" class="spe-in" style="width: 10%;position:  relative;top: -52px;" /><span class="trigger-span"></span><span style="width: 57px;display:  inline-block;">主机</span>
                                                <div class="box">
                                                <div class="bg">
                                                  <div class="bgcolor"></div>
                                                </div>
                                                <div class="bt"></div>
                                                </div>
                                                <div class="text"></div>
                                            </div>
                                            <div class="item-div">
                                                <input type="checkbox" id="service-in"  name="check" class="spe-in" style="width: 10%;position:  relative;top: -52px;" /><span class="trigger-span"></span><span style="width: 57px;display:  inline-block;">服务</span>
                                                <div class="box">
                                                <div class="bg">
                                                  <div class="bgcolor"></div>
                                                </div>
                                                <div class="bt"></div>
                                                </div>
                                                <div class="text"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="desDiv">
                                    <label for="alarm-num">告警数量：  </label><span style="margin-left: 12px;">≥</span>
                                    <input id="alarm-num" name="alarm-num" class="form-control required " type="number" placeholder="" min="2" max="100" style="padding: 6px 6px;" value="2"/><span style="margin-left: 12px;">&nbsp;&nbsp;<span style="color:#f43733;font-size: 16px;position: relative;top: 4px;">*</span>个</span><i class="fa fa-question-circle" data-toggle="tooltip" style="    margin-left: 10px;"  title='生成场景的最小告警量，不少于2个'></i>
                                    <span class="error-span hidden">请输入整数</span>
                                </div>
                                <div class="desDiv" style="display:  block;text-align:  left;width:  auto;">
                                    <label for="last-time">持续时长：  </label><span style="margin-left: 12px;">≤</span>
                                    <input id="last-time-h" name="last-time" class="form-control required" placeholder="" style="width: 47px;padding: 6px 6px;" type="number" data-toggle="tooltip" data-placement="top" value="1" min="1" max="4"/>
                                    &nbsp;&nbsp;<span style="color:#f43733;font-size: 16px;position: relative;top: 4px;">*</span><span>小时</span>
                                    <input id="last-time-m" name="last-time" class="form-control required" type="text" placeholder="" style="width: 47px;padding: 6px 6px;" min="0" max="59" value="0"/>&nbsp;&nbsp;<span style="color:#f43733;font-size: 16px;position: relative;top: 4px;">*</span><span>分钟</span>
                                    <i class="fa fa-question-circle" style="    margin-left: 10px;"  data-toggle="tooltip" title='生成&合并场景的最大时长，超过后生成新的场景'></i>  
                                    <span class="error-span hidden">请输入整数</span>
                                </div>
                                <div class="desDiv" style="width: 100%;border-top: 1px solid #d9d9d9;margin-top: 22px;">
                                    <div class="div-ruleUsers-parent addEscModal">
                                        <div class="ruleRightDiv1">
                                            <p class="userTitle">场景生成后，分派给以下用户</p>
                                            <i class="fa fa-times-circle remove-ruleUsers"></i>
                                            <ul class="userUl addUserUl"></ul>
                                            <div class="user-value-dll owmMulti">
                                                <select name="userDll" class="form-control userDll" style="margin-left: 30px;">
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row btnsDivBorder">
                    <div class="col-lg-12">
                        <div class="contentContainerAdd totalBtn" style="float:  right;margin-right: 37px;">
                            <div class="buttonsDiv">
                                <button id="btn-cancle" type="button" class="btn btn-gray-cancel">取消</button>
                                &emsp;
                                <button id="btn-save" type="button" class="btn btn-success">保存</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PanelBodyNew',
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
.contentContainerAdd .desDiv input {
    display: inline-block;
    width: 36%;
}
.addAndBtn {
    background: none repeat scroll 0 0 #fff;
    border: 1px solid #5cb85c;
    border-radius: 10px;
    color: #5cb85c;
    height: 20px;
    line-height: 20px;
    text-align: center;
    width: 20px;
    margin: auto auto;
    cursor: pointer;
    padding-top: 2px;
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
.orDivBr {
    border-left: 1px solid #d9d9d9;
    border-radius: 15px;
    height: 60px;
    width: 1px;
    margin: auto auto;
    z-index: -1;
}
.addConditionBtnDiv {
    margin-right: 30px;
    display: inline-block;
    width: 40px;
    height: 35px;
    border: 1px solid #b2b2b2;
    text-align: center;
    border-radius: 5px;
    vertical-align: middle;
    padding-top: 7px;
    cursor: pointer;
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
.orDivBrBottom {
    height: 40px;
}
.div-or-condition-add, .orDivOut {
    height: 60px;
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
.user-value-dll.owmMulti {
    margin-left: 30px;
}
.owmMulti {
    display: inline-block;
}
.user-value-dll {
    width: 300px;
    margin-top: 10px;
}
.owmMulti{
  display:inline-block;
}
.owmMulti .btn-group{
  width:100%;
}
.owmMulti .multiselect {
  width:100%;
  text-align:right;
  margin-top:0;
}
.owmMulti ul {
  width:100%;
}
.owmMulti .multiselect-selected-text {
  position:absolute;
  left:0;
  right:25px;
  text-align:left;
  padding-left:20px;
}
.owmMulti .multiselect-container li.odd {
    background: #eeeeee;
}
.orDivBottom {
    cursor: pointer;
    margin-top: -20px;
}
</style>
