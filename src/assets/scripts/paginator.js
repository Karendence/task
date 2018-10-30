//列表默认查询条件
var pageParams = {
	page:1,         //当前页码
	pageSize:10,    //每页条数
	totalCount:0    //总数
};

/**
 * @des 设置分页
 * pageParams 分页参数
 * reloadPageData 切换分页加载数据方法
 * params 加载数据方法参数对象
 * $pageDom 分页dom对象
 * @author QIAN
 * @since 2016年6月6日
 * @return
 */
function setPaginator(pageParams, reloadFn, params, $pageDom){
	var options = {
		bootstrapMajorVersion:3,
        currentPage: pageParams.page,
        totalPages: (pageParams.totalCount + pageParams.pageSize -1) / pageParams.pageSize,
        alignment:'right',
        itemTexts: function (type, page, current) {
            switch (type) {
            case "first":
                return "首页";
            case "prev":
                return "上一页";
            case "next":
                return "下一页";
            case "last":
                return "末尾页";
            case "page":
                return page;
            }
        },
        tooltipTitles: function (type, page, current) {
            switch (type) {
            case "first":
                return "前往首页";
            case "prev":
                return "前往上一页";
            case "next":
                return "前往下一页";
            case "last":
                return "前往末尾页";
            case "page":
                return page;
            }
        },
        onPageClicked: function(e,originalEvent,type,page) {
        	pageParams.page = page;
        	reloadFn(params);
        }
    };
	$pageDom.bootstrapPaginator(options);
}