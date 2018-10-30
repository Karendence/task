//版本
var userVersion={"free":"免费版", "base":"精简版", "norm":"标准版", "pro":"专业版", "lite":"精简版","standard":"标准版", "advance":"专业版"};
$(function(){
	loadQuotas();
	//设置右上角授权版本
	$("#span-userVersion").html(userVersion[_CTX_LICENSE_TYPE]).css("border-bottom-color",barColorArr[maxColorArrVal]);
	$("#div-user-version>h3").html(userVersion[_CTX_LICENSE_TYPE]+"授权");
	//设置公告栏授权版本
	$(".span-userVersion").html(userVersion[_CTX_LICENSE_TYPE]);
	//点击版权按钮
	$("#btn-userVersion").on("click", function(e){
		if($("#div-user-version").css("display")=="none"){
			if(_CTX_LICENSE_TYPE=="free"){
				$("#span-version-des").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您正在使用免费版本的 OneAlert，将和其它成员共用有限的通知配额。");
			}else{
				$("#span-version-des").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您正在使用"+userVersion[_CTX_LICENSE_TYPE]+"本的 OneAlert，可以独享更多的通知配额并使用OneAlert的部分高级功能。详情请查看报价。");
			}
			$("#div-user-version").css("display","block");
			loadQuotas();
			$("#btn-userVersion").addClass("a-active");
			$("#span-userVersion").html(userVersion[_CTX_LICENSE_TYPE]).css("border-bottom-color",barColorArr[maxColorArrVal]);
			$("#div-user-version>h3").html(userVersion[_CTX_LICENSE_TYPE]+"授权");
		}else{
			$("#div-user-version").slideUp("normal");
			$("#btn-userVersion").removeClass("a-active");
		}
	});
	//关闭版权
	$("#btn-closeVersion").on("click", function(e){
		$("#div-user-version").slideUp("normal");
		$("#btn-userVersion").removeClass("a-active");
	});
	//点击其他位置关闭版权页面
	$(document).on("click",function(e){
		var target = $(e.target);
		if(target.closest("#div-user-version").length == 0 && target.closest("#btn-userVersion").length == 0){
			$("#div-user-version").slideUp("normal");
			$("#btn-userVersion").removeClass("a-active");
		}
	});
	//升级
	$("#btn-version-update").on("click", function(e){
		ga("send", "event", "用户版权", "去商城购买", "点击去商城购买按钮");
	});
	//报价
	$("#btn-version-price").on("click", function(e){
		ga("send", "event", "用户版权", "查看报价", "点击查看报价按钮");
	});
});