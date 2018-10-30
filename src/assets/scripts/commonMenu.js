//显示事件用户组（内部、七牛）
var showEventArr=["374789707","704909225","120644388","520"];
$(function(){
	if (_CURRENTMenu == 'center' && _SOURCE == "itsm") {
		document.getElementById('center_a').click();
	} else if (_CURRENTMenu == 'control' &&  _SOURCE == "itsm") {
		document.getElementById('control_a').click();
	}
	if (localStorage.getItem('hasITSM') == null) {		
		getOwnerModal();
	}
});
/**
 * @des 是否显示工单
 * @author QIAN
 * @since 2016年7月7日
 * @return
 */
function isShowEvent() {
	if($.inArray(_CTX_OWNER, showEventArr)==-1){
		return false;
	}else{
		return true;
	} 
}
	//打开配额弹窗时，查询配额数据
	$('#quotaPop').on('show.bs.modal', function () {
		loadQuotas();
	});
	//tag.deploy.new.1.0
	/* 菜单newTag标示 */
	var regTagNew = function(eleId, userPro) {
		var up_req_url = _CTX_UCID_URL + "app/property/"
				+ encodeURIComponent(_CTX_USER) + "/"
				+ encodeURIComponent(userPro)+"?"+_CTX_TOKEN+workId();
		$.ajax({
			url : up_req_url,
			type : "GET",
			contentType : "application/json",
			dataType : "json",
			async : false,
			success : function(data) {
				if (data.data == null || data.data.value != "true") {
					$('#' + eleId).find('sup').css('display', 'inline-block');
				}
			}
		});

		$('#' + eleId).click(
				function() {
					$('#' + eleId).find('sup').css('display', 'none');
					var req_url2 = _CTX_UCID_URL + "app/property/"
							+ encodeURIComponent(_CTX_USER) + "/"
							+ encodeURIComponent(userPro);
					var config_url2 =req_url2 + "&value=true?"+_CTX_TOKEN+workId();
					$.ajax({
						url : config_url2,
						type : "PUT",
						contentType : "application/json",
						dataType : "json",
						success : function(data2) {
							$('#' + eleId).find('sup').css('display', 'none');
						}
					});
				});

	};
	/* regTagNew('deployTag', 'tag.deploy.new.15.0');
	regTagNew('analyseTag', 'tag.analyse.new.15.0'); */

	$('#top_nav').find('li:not(.active)').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).addClass('active');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).removeClass('active');
	});

	$(".modal-body>.p-quota-title").addClass("hidden");

	/* 进度条控制 */
	$("#ddl-taskList-btn").on("click", function(e){
		if($("#ul-taskList").hasClass("hidden")){
			$("#ul-taskList").removeClass("hidden");
			$(".navbar-finish-step").addClass("step-active");
		}
		else{
			$("#ul-taskList").addClass("hidden");
			$(".navbar-finish-step").removeClass("step-active");
		}
	});
	//获取用户积分信息
	var getUserSugar = function(){
		var req_url=_CTX_OPERATION_URL + "api/sugar/query/"+encodeURIComponent(_CTX_USER)+"/";
		var config_url=req_url+"?"+_CTX_TOKEN+workId();
		$.ajax({
			url:config_url,
			type:"GET",
			contentType:"application/json",
			dataType:"json",
			success:function(data){
				//console.log(JSON.stringify(data));
				if(data.result == "success"){
					//用户当前无需要完成任务时也查询任务列表
					$("#btn-credit-link").attr("href", _CTX_PATH+"/user/integralExchage.jsp?credit=" + data.data.sugar+"&"+_CTX_TOKEN);
					$(".span-btn-credit").click(function(){
						window.open(_CTX_PATH+"/user/integralExchage.jsp?credit=" + data.data.sugar+"&"+_CTX_TOKEN);
					});
					$("#task-progress-bar").css("width", (data.data.step/data.data.stepTotal)*100 + "%");
					$("#span-user-sugar").html(data.data.sugar);
					$("#user-level-name").html(data.data.levelDescription);
					$("#menu-user-sugar").attr("href", _CTX_PATH+"/user/integralExchage.jsp?credit=" + data.data.sugar+"&"+_CTX_TOKEN);
					//当用户级别为level1时，突出显示
					if(data.data.level == "1"){
						$("#user-level-name").css("color", "green");
						$("#task-progress-bar").css("width", "100%");
					}
					getUserTaskList();

					/* if(data.data.stepTotal > 0 && data.data.stepTotal > data.data.step){
						//$("#task-progress-bar").html(data.data.sugar);
						$("#btn-credit-link").attr("href", _CTX_PATH+"/user/integralExchage.jsp?credit=" + data.data.sugar);
						$(".span-btn-credit").click(function(){
							window.open(_CTX_PATH+"/user/integralExchage.jsp?credit=" + data.data.sugar);
						});
						$("#task-progress-bar").css("width", (data.data.step/data.data.stepTotal)*100 + "%");
						$("#span-user-sugar").html(data.data.sugar);
						$("#user-level-name").html(data.data.levelDescription);
						$("#menu-user-sugar").attr("href", _CTX_PATH+"/user/integralExchage.jsp?credit=" + data.data.sugar);
						//当用户级别为level1时，突出显示
						if(data.data.level == "1"){
							$(".user-level-name").css("color", "green");
							$(".fa-star").removeClass("hidden");
						}
						getUserTaskList();
						//showUserProgressBar();
					}
					else{
						hideUserProgressBar();
					} */
				}
				else{
					hideUserProgressBar();
					//alertError("获取用户积分信息失败：" + data.message);
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				hideUserProgressBar();
			}
		});
	};
	//获取用户任务进度表
	var getUserTaskList = function(){
		var req_url=_CTX_OPERATION_URL+"api/progress/query/"+encodeURIComponent(_CTX_USER)+"/";
		var config_url=req_url+"?"+_CTX_TOKEN+workId();
		$.ajax({
			url:config_url,
			type:"GET",
			contentType:"application/json",
			dataType:"json",
			success:function(data){
				//console.log(JSON.stringify(data));
				if(data.result == "success"){
					$("#ul-taskList").empty();
					if(data.data != null && data.data.length>0){
						for(var i=0, len=data.data.length; i<len; i++){
							var item = data.data[i];
							var $dom=$($("#tmp-task-li").html());
							if(item.taskUrl != null && item.taskUrl != ""){
								var strUrl = item.taskUrl.replace("{id}", _CTX_USER);
								if(item.taskUrl.indexOf("http") !== 0){
									strUrl= _CTX_PATH + strUrl;
								}
								strUrl += "&status=" + item.status;
								strUrl += "&" + _CTX_TOKEN;
								$dom.find("a").attr("href", strUrl);
							}
							//邀请内部用户页面，在新选项卡中打开
							if(item.taskDescription == "邀请用户"){
								$dom.find("a").attr("target", "_blank");
							}
							if(item.status === "ACTIVE"){
								$dom.find(".fa-check").addClass("hidden");
							}else{
								$dom.find(".fa-check").removeClass("hidden");
								$dom.find("a").addClass("done");
							}
							if(item.task.Low !=1 && item.count !=1){
								$dom.find(".span-task-des").html(item.taskDescription+" ("+item.count+"/"+item.task.Low+")");
							}
							else{
								$dom.find(".span-task-des").html(item.taskDescription);
							}
							if(item.task.sugar != "0"){
								$dom.find(".span-task-sugar").html("+" + item.task.sugar + "分");
							}
							$dom.find(".p-descriptionDetail").html(item.taskDescriptionDetail);
							$("#ul-taskList").append($dom);
						}
						//$("#ul-taskList").append($("#tmp-task-li-Description").html());
					}
				}
			}
		});
	};
	/**
	 * @des 版权菜单控制
	 * @author zhouqian
	 * @since 2016年10月12日
	 * @param
	 * @return
	 */
	function versionCheck(menu){
		if(_CTX_DEPLOY_TYPE=="saas"){
			if(menu=="scheduler"){
				if(_CTX_LICENSE_TYPE=="free" || _CTX_LICENSE_TYPE=="base"){
					alertError("免费与基础版不支持排班功能~");
					return false;
				}
			}else if(menu=="notify"){
				if(_CTX_LICENSE_TYPE=="free"){
					alertError("免费版不支持通知查询功能~");
					return false;
				}
			}
		}
	}
	
	$(function() {
		/* if(getCookie("isShowUserProgressBar") == null || getCookie("isShowUserProgressBar")==="1"){
			getUserSugar();
			getUserTaskList();
			showUserProgressBar();
		}
		else{
			//hideUserProgressBar();
		} */
		/*隐藏头部任务条 2016-8-17*/
		/*getUserSugar();
		//点击其他位置关闭任务条
		$(document).on("click",function(e){
			var target = $(e.target);
			if(target.closest("#ul-taskList").length == 0 && target.closest(".navbar-finish-step").length == 0){
				$("#ul-taskList").addClass("hidden");
				$(".navbar-finish-step").removeClass("step-active");
			}
		});
		//点击积分任务菜单加ga事件
		$(document).on("click", ".a-sugar-task", function(e){
			ga("send", "event", "积分模块", "点击积分任务列表", $(this).find(".span-task-des").html());
		});*/
		/*if(_CTX_LICENSE_TYPE=="free"){
			$("#menu-par-scheduler").remove();
			$("#menu-par-notify").remove();
		}
		if(_CTX_LICENSE_TYPE=="base"){
			$("#menu-par-scheduler").remove();
		}*/
	}); 
	//控制事件菜单是否显示
	if(isShowEvent()){
		$("#btn-menu_event").removeClass("hidden");
		$("#menu-par-userGroup").removeClass("hidden");
		$("#menu-par-eventCount").removeClass("hidden");
	}
	
	//关闭任务进度条
	/* $("#btn-close-progressBar").on("click", function(){
		setCookie("isShowUserProgressBar", "0");
		hideUserProgressBar();
	}); */
	//显示进度条
	function showProgressBar() {
		setCookie("isShowUserProgressBar", "1");
		getUserSugar();
		getUserTaskList();
		showUserProgressBar();
	}
	function hideUserProgressBar(){
		$(".nav-progressAlert").addClass("hidden");
		$(".side-nav").css("top", "53px");
		$(".wechat").css("top", "455px");
		$("#page-wrapper").css("padding-top", "20px");
	}
	function showUserProgressBar(){
		$(".nav-progressAlert").removeClass("hidden");
		$(".side-nav").css("top", "93px");
		$(".wechat").css("top", "495px");
		$("#page-wrapper").css("padding-top", "60px");
		//$("#btn-close-progressBar").tooltip();
	}
	//注销功能
	function doMenuLogout() {
		//删除登陆时页面保存的cookie
		//delCookie('rmbUser');
		//console.log('rmbUser:'+ getCookie('rmbUser'));
		document.cookie = "rmbUser=null;expires=-1;path=/"
  		var req_url = _CTX_UCENTER_URL  + 'logout?' + _CTX_TOKEN;
		$.ajax({
			url:req_url,
			type:"GET",
			contentType:"application/json",
			dataType:"json",
			success:function(data){
				window.location.href = _CTX_CONSOLE_URL + "/ucid/login.jsp?";
			},
			error:function(data){
				window.location.href = _CTX_CONSOLE_URL + "/ucid/login.jsp";
				console.log("操作失败 data："+JSON.stringify(data));
			}
		});
	}
	//获取用户邀请链接
	$(function(){
		// var invite_url_2 = _CTX_UCENTER_URL + 'register/inviteLink' + "?user="+ _USER;
		// var req_url = invite_url_2+"&"+_CTX_TOKEN+workId();
		// console.log("url:"+ req_url);
		$('#invite_2_url').text(_CTX_CONSOLE_URL+"/api/register?user="+_USER);
		// $.ajax({
		// 	url:req_url,
		// 	type:"GET",
		// 	contentType:"application/json",
		// 	dataType:"json",
		// 	success:function(data){
		// 		//console.log("data:"+ JSON.stringify(data));
		// 		if (data != "" && data != null) {
		// 			$('#invite_2_url').text(data.data);
		// 		}
		// 	},
		// 	error:function(data){
		// 		$('#invite_2_url').text("暂无邀请链接");
		// 		console.log("操作失败："+data.message);
		// 	}
		// });

	});
	
	

/**
 * @des 获取用户授权信息
 * @param
 * @return
 */
function getOwnerModal() {
  var req_url = _CTX_ITSM_URL + "table/sys_owner/" + _CTX_OWNER + '?' + _CTX_TOKEN;
  $.ajax({
    url: req_url,
    contentType: "application/json",
    type: 'GET',
    dataType: 'json',
    success: function(response) {
      if (response && response.result == 'success') {
        var hasITSM = false;
        var hasCMDB = false;
        //判断用户是否有itsm授权，数据为空时没有授权itsm
        if (response.data == '' || response.data.grant_itsm != 1) {
          hasITSM = false;
          hasCMDB = false;
        } else if (response.data.grant_cmdb != 1) {
          hasITSM = true;
          hasCMDB = false;
        } else {
          hasITSM = true;
          hasCMDB = true;
        }

        localStorage.setItem('hasITSM', hasITSM);
    	//设置没开通itsm菜单权限时itsm菜单链接
    	if (!hasITSM) {
    		$('.all-menu').find('li:eq(1), li:eq(2), li:eq(3)').find('a').attr({'href':'http://v2.110monitor.com', 'target':'_blank'}).addClass('hidden');
    	}
    	console.log('hasITSM_ALERT:' + localStorage.getItem('hasITSM'));	
      } else {
        showErrorMsg(response);
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      // window.location.href = itsm_loginUrl;
      alertError("获取用户信息失败");
    }
  });
}