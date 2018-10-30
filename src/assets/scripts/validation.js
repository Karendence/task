//验证不为空
function isNotEmpty(val){
	if(val == undefined || $.trim(val).length==0 || val == null || val=="null"){
		return false;
	}else{
		return true;
	}
}
//验证邮箱
function isEmail(val){
	var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	if(reg.test(val)){
		return true;
	}else{
		return false;
	}
}
//验证手机
function isTelePhone(val){
	var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
	if(reg.test(val)){
		return true;
	}else{
		return false;
	}
}
/**
 * @des 密码验证
 * 1、6~15位
 * 2、不能全是一个字符
 * 3、不能全是数字
 * 4、不能全是字母
 * 5、不能全是符号
 * 6、只能数字，字母和常用特殊字符
 * @author zhouqian
 * @since 2016年8月2日
 * @param
 * @return
 */
function isValidPwd(val){
	var reg = /^(?=.{6,15}$)(?![0-9]+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$)[0-9a-zA-Z$#@^&]+$/;
	if(reg.test(val)){
		return true;
	}else{
		return false;
	}
}
/**
 * @des 验证全部为数字
 * @author zhouqian
 * @since 2016年8月8日
 * @param
 * @return
 */
function isAllNumber(val){
	var reg = /^[0-9]*$/;
	if(reg.test(val)){
		return true;
	}else{
		return false;
	}
}
//qq号
function isQQ(val){
	var reg = /^[1-9][0-9]{4,}$/;
	if(reg.test(val)){
		return true;
	}else{
		return false;
	}
}
//正整数
function isPositiveInter(val){
	var reg=/^[1-9]*[1-9][0-9]*$/;
	if(reg.test(val)){
		return true;
	}else{
		return false;
	}
}