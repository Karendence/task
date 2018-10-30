$(function() {
	setTimeout(function () {
        if(localStorage.getItem('aliyunLis')=="have"){
            $("#cost-menu").addClass("hidden");
        }
    },0);
});
/**
 * @des 生成uuid
 * @returns uuid
 */
function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
 
    var uuid = s.join("");
    return uuid;
}

/**
 * @des 拼装跨域访问的url （暂不使用）
 * @since 2015-12-11
 * @author xuyang
 * @return crossDomainUrl
 */
function getCrossDomainUrl(){
	return  _CTX_ALERT_URL+"?"+_CTX_TOKEN;
}
/**
 * @des 设置page-wrapper最小高度
 * @since 2015-12-11
 * @return 
 */
function changeMinHeight(){
	$('#page-wrapper').css('min-height',(document.body.clientHeight - 65)+"px");
}

/**
 * @des 判断str不为空
 * @since 2015-12-11
 * @author xuyang
 * @return boolean
 */
function isNotEmpty (str) {
	return (str !== null && str !== "" && str !== undefined );
}
/**
 * @des 显示遮罩弹窗
 * @since 2015-12-14
 * @author xuyang
 * @return boolean
 */
function showLoading(){
	$.blockUI({
		message:"加载中...", 
		css: { 
	        border: 'none', 
	        padding: '15px', 
	        backgroundColor: '#000', 
	        '-webkit-border-radius': '10px', 
	        '-moz-border-radius': '10px', 
	        opacity: .5, 
	        color: '#fff' 
        }
	}); 
}
/**
 * @des 隐藏遮罩弹窗
 * @since 2015-12-14
 * @author xuyang
 * @return boolean
 */
function hideLoading(){
	$.unblockUI();
}

/**
 * @des 信息提示窗
 * @author QIAN
 * @since 2016年4月12日
 * @return
 */
function alertInfo(msg) {
	$.blockUI({
		message:msg, 
		css: { 
			top:'110px',
	        border: 'none', 
	        padding: '15px', 
	        backgroundColor: '#dff0d8', 
	        '-webkit-border-radius': '10px', 
	        '-moz-border-radius': '10px', 
	        color: '#3c763d' 
        }
	}); 
	setTimeout($.unblockUI, 2000); 
}
/**
 * @des 错误信息提示窗
 * @author QIAN
 * @since 2016年4月12日
 * @return
 */
function alertError(msg) {
	$.blockUI({
		message:msg, 
		css: { 
			top:'110px',
	        border: 'none', 
	        padding: '15px', 
	        backgroundColor: '#ebccd1', 
	        '-webkit-border-radius': '10px', 
	        '-moz-border-radius': '10px', 
	        color: '#a94442' 
        }
	}); 
	setTimeout($.unblockUI, 2000); 
}
/**
 * @des 动态设置下拉列表值 
 * id 下拉项 value
 * text 下拉项key
 * @author QIAN
 * @since 2016年3月16日
 * @return
 */
function setDllData($dom, data, id, text){
	if(!isNotEmpty(id)){
		id="id";
	}
	if(!isNotEmpty(text)){
		text="text";
	}
	$dom.find("option").remove();
	if(data!=null && data.length > 0) {
		$.each(data,function (index,item) {
			var str = "<option value='"+(item[id])+"'>";
				str += item[text];
				str +="</option>";
				$dom.append(str);
		});
	}
}
/**
 * @des 获取url中get参数值
 * @author QIAN
 * @since 2016年5月9日
 * @return
 */
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
/**
 * @des 设置cookie变量
 * @author QIAN
 * @since 2016年5月10日
 * @return
 */
function setCookie(name,value)
{
    var Days = 30; //此 cookie 将被保存 30 天
    var exp  = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/" + ";domain=" + window.location.host;
}
/**
 * @des 读取cookie
 * @author QIAN
 * @since 2016年5月10日
 * @return
 */
function getCookie(name)
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return unescape(arr[2]); return null;
}
/**
 * @des 删除cookie
 * @author QIAN
 * @since 2016年5月10日
 * @return
 */
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
/**
 * @des GrowingIO用户行为分析
 * @author QIAN
 * @since 2016年5月17日
 * @return
 */
(function(){
	if(_CTX_DEPLOY_TYPE=="saas"){
	 //growingio2.1
        !function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.growingio.com/2.1/gio.js","gio");
          gio('init', 'a78f5e02538f4b2b88cd4fee708bc11b', {});
          gio('send');
	}
})();
/**
 * @des 用户及时通讯 美恰,免费版与其他版本分开账户
 * @author QIAN
 * @since 2016年5月17日
 * @return
 */
(function(){
	if(_CTX_DEPLOY_TYPE=="saas"){
		(function(m, ei, q, i, a, j, s) {
	        m[i] = m[i] || function() {
	            (m[i].a = m[i].a || []).push(arguments)
	        };
	        j = ei.createElement(q),
	            s = ei.getElementsByTagName(q)[0];
	        j.async = true;
	        j.charset = 'UTF-8';
	        j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
	        s.parentNode.insertBefore(j, s);
	    })(window, document, 'script', '_MEIQIA');
	    _MEIQIA('entId', 12247);
	    _MEIQIA('assign', {
	        groupToken: '90f8775e752c2b81d1cabbd8cb66d3fa'
	    });
	}
})();

/**
 * @des 获取用户下拉列表数据
 * noFirst 是否添加请选择项
 * @author QIAN
 * @since 2016年5月25日
 * @return
 */
function getUserData(noFirst) {
	var userData=new Array();
	if(noFirst==undefined || noFirst==null || !noFirst){
		var item={};
		item["id"]="-1";
		item["text"]="--请选择--";
		userData.push(item);
	}
	var req_url=_CTX_UCID_URL+"api/user/users/"+ _CTX_OWNER;
	var target_url=req_url+"?"+_CTX_TOKEN+workId();
	$.ajax({
		url:target_url,
		type:"GET",
		async:false,
		contentType:"application/json",
		dataType:"json",
		success:function(data){
			if(data.result == "success"){
				if(data.data!=null&&data.data.length>0){
					//console.log(JSON.stringify(data.data));
					for(var i=0;i<data.data.length;i++){
						var item={};
						item["id"]=data.data[i].user;
						item["text"]=data.data[i].contactName;
						userData.push(item);
					}
				}
			}else{
				alertError("操作失败：" + data.message);
			}
		}
	});
	return userData;
}
/**
 * @des 点击下拉框时，模糊查询框自动获取鼠标焦点
 * @author QIAN
 * @since 2016年6月13日
 * @return
 */
function setMultiFocus() {
	$(document).on("click", ".multiselect", function(e){
		$(this).next(".multiselect-container").find(".multiselect-search").focus();
	});
}
/**
 * @des ga监控统计
 * @author QIAN
 * @since 2016年7月5日
 * @return
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-80277344-1', 'auto');
ga('send', 'pageview');

/**
 * 将后台传过来的毫秒数转化成对应日期
 * @param str
 * @returns {String}
 */  
function getMyDate(str){  
    var oDate = new Date(parseInt(str)),  
    oYear = oDate.getFullYear(),  
    oMonth = oDate.getMonth()+1,  
    oDay = oDate.getDate(),  
    oHour = oDate.getHours(),  
    oMin = oDate.getMinutes(),  
    oSen = oDate.getSeconds(),  
    oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间  
    return oTime;  
};  
//补0操作  
function getzf(num){  
    if(parseInt(num) < 10){  
        num = '0'+num;  
    }  
    return num;  
}  

/**
 * 初始化菜单状态
 */
function initMenu() {
	//菜单展示状态切换
	$(document).on('click', '.side-nav > li > a', function(e){
		$(this).find('span>i').toggleClass('fa-caret-right').toggleClass('fa-caret-down');
		$(this).next('ul').toggle('500');
	});
	  //菜单动画效果
	  $('.change-menu-status').on('click', function(e){
	  	if(_CTX_DEPLOY_TYPE!="saas"){
	  	}else{
	  		if ($('.all-menu').hasClass('hidden')) {
		      $(this).css({
		        'transform':'rotate(135deg)',
		        '-webkit-transform':'rotate(135deg)'
		      });
		    } else {
		      $(this).css({
		        'transform':'rotate(90deg)',
		        '-webkit-transform':'rotate(90deg)'
		      });
		    }
		    $('.all-menu, #top_nav, .vertical-notice').toggleClass('hidden');
		    //切换公告栏的状态
		    $('.notice-content').toggleClass('hidden');
		  	}
	  });
}

/**
 * 随机获取颜色
 */
function getRandomColor(){

	  return  '#' +

	    (function(color){

	    return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])

	      && (color.length == 6) ?  color : arguments.callee(color);

	  })('');

}

//显示时间差的方法
function getDateDiff(dateTimeStamp){
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var year =month *12;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if(diffValue < 0){
	 //若日期不符
	 result="您的系统时间出错或记录时系统时间出错导致无法记录时差";
	 }
	var yearC=diffValue/year;
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
	var minC =diffValue/minute;
	 if(yearC>=1){
	 result=parseInt(yearC) + "年前";
	 }
	 else if(monthC>=1){
	 result= parseInt(monthC) + "个月前";
	 }
	 else if(weekC>=1){
	 result= parseInt(weekC) + "周前";
	 }
	 else if(dayC>=1){
	 result= parseInt(dayC) +"天前";
	 }
	 else if(hourC>=1){
	 result= parseInt(hourC) +"个小时前";
	 }
	 else if(minC>=1){
	 result= parseInt(minC) +"分钟前";
	 }else
	 result="刚刚发表";
	return result;
}
/**
 * 将日期转换成long类型
 * @param  {[type]} string ’2016-10-17 16:00:00‘
 * @return {[type]}        [description]
 */
function dateToUnix(string) {
 	if (string == '') {
 		return "";
 	} else {
 		var f = string.split(' ', 2);
 		var d = (f[0] ? f[0] : '').split('-', 3);
 		var t = (f[1] ? f[1] : '').split(':', 3);
 		return (new Date(
 				parseInt(d[0], 10) || null,
 				(parseInt(d[1], 10) || 1) - 1,
 				parseInt(d[2], 10) || null,
 				parseInt(t[0], 10) || null,
 				parseInt(t[1], 10) || null,
 				parseInt(t[2], 10) || null
 		)).getTime();
 	}
}

/**
 * 获取字符串的hashcode
 * @param str
 * @returns {Number}
 */
function getHashCode(str) {
    var hash = 0;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

/**
 * 限制输入框只能输入正整数
 */
function initNumInput($dom) {
	//限制键盘只能按数字键、小键盘数字键、退格键
	$dom.keydown(function (e) {
	    var code = parseInt(e.keyCode);
	    if (code >= 96 && code <= 105 || code >= 48 && code <= 57 || code == 8) {
	        return true;
	    } else {
	        return false;
	    }
	});
	//文本框输入事件,任何非正整数的输入都重置为1
	$dom.bind("input propertychange", function () {
	    if (isNaN(parseFloat($(this).val())) || parseFloat($(this).val()) <= 0) $(this).val('');
	});
}

/**
 * 从右往左滚动文字
 * @returns {undefined}
 */
$.fn.textScroll = function() {
    // 滚动步长(步长越大速度越快)
    var step_len = 60;
    var this_obj = $(this);
    var child = this_obj.children();
    var this_width = this_obj.width();
    var child_width = child.width();
    var continue_speed = undefined;// 暂停后恢复动画速度
    // 初始文字位置
    child.css({
        left: this_width
    });
 
    // 初始动画速度speed
    var init_speed = (child_width + this_width) / step_len * 1000;
 
    // 滚动动画
    function scroll_run(continue_speed) {
        var speed = (continue_speed == undefined ? init_speed : continue_speed);
        child.animate({
            left: -child_width
        }, speed, "linear", function() {
            $(this).css({
                left: this_width
            });
            scroll_run();
        });
    };
 
    // 鼠标动作
    child.on({
        mouseenter: function() {
            var current_left = $(this).position().left;
            $(this).stop();
            continue_speed = (-(-child_width - current_left) / step_len) * 1000;
        },
        mouseleave: function() {
            scroll_run(continue_speed);
            continue_speed = undefined;
        }
    });
 
    // 启动滚动
    scroll_run();
};



/**
 * 公告上下滚动条
 * @param obj
 */
function scrollNews(obj) { 
	var $self = obj.find("ul"); 
	var lineHeight = $self.find("li:first").height(); 
	$self.animate({ 
		"marginTop": -lineHeight + "px" 
	}, 600, function() { 
		$self.css({ 
			marginTop: 0 
		}).find("li:first").appendTo($self); 
	}); 
} 