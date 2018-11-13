const columns = [{
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

module.exports = {
    columns
}