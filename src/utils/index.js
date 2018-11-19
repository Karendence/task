//场景表头
const situationCol = [{
    title: '',
    key: 'operation',
    render: () => {
        return '';
    }
}, {
    title: '场景编号',
    key: 'number',
}, {
    title: '描述',
    key: 'label',
}, {
    title: '优先级',
    key: 'priority',
}, {
    title: '影响服务',
    key: 'tags',
    render: (record, text) => {
        return `<a href='www.baidu.com'>${text}111</a>`;
    }
}, {
    title: '生成时间',
    key: 'createTime',
}, {
    title: '告警数量',
    key: 'alarmCount',
}, {
    title: '分派人',
    key: 'id',
}];

//告警表头
const AlarmCol = [{
    title: '',
    key: 'operation',
    render: () => {
        return '';
    }
}, {
    title: '发生时间',
    key: 'creationTime'
}, {
    title: '告警内容',
    key: 'alarmContent'
}, {
    title: '主机',
    key: 'host'
}, {
    title: '告警对象',
    key: 'entityName'
}, {
    title: '分派人',
    key: 'contactNames',
    render: (record,text)=>{
        var str;
        $.each(text,function(index,item){
            if(index<text.length-1){
                str+=text[i]+"、";
            }else{
                str+=text[i];
            }
        });
        debugger;
        return `<span></span>`
    }
}, {
    title: '分类',
    key: 'alarmCount'
}];

module.exports = {
    situationCol,
    AlarmCol
}