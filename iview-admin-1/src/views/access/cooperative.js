
export const editInlineColumns = [
    {
        title: '合作社编号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '合作社名称或个人姓名',
        align: 'center',
        key: 'name',
        width: 90,
        editable: true
    },
    {
        title: '身份证号',
        align: 'center',
        key: 'id',
        width: 230,
        editable: true
    },
    {
        title: '入社时间',
        align: 'center',
        width: 150,
        key: 'time'
    },
    {
        title: '产业规模',
        align: 'center',
        width: 90,
        key: 'scale'
    },
    {
        title: '经营种植地点',
        align: 'center',
        width: 250,
        key: 'place',
        editable: true
    },
    {
        title: '联系电话',
        align: 'center',
        width: 180,
        key: 'phone',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 210,
        key: 'handle',
        handle: ['edit', 'delete']
    }
];

export const editInlineData = [
    {
        name: 'Aresn合作社',
        id: '232323151562479258',
        time: '2018-1-1',
        scale: '中型',
        place: '宁安县',
        phone: '15546465925'
    },
    {
        name: 'Aresn合作社',
        id: '232323151562479258',
        time: '2018-1-1',
        scale: '中型',
        place: '宁安县',
        phone: '15546465925'
    },
    {
        name: 'Aresn合作社',
        id: '232323151562479258',
        time: '2018-1-1',
        scale: '中型',
        place: '宁安县',
        phone: '15546465925'
    },
    {
        name: 'Aresn合作社',
        id: '232323151562479258',
        time: '2018-1-1',
        scale: '中型',
        place: '宁安县',
        phone: '15546465925'
    },
    {
        name: 'Aresn合作社',
        id: '232323151562479258',
        time: '2018-1-1',
        scale: '中型',
        place: '宁安县',
        phone: '15546465925'
    },
    {
        name: 'Aresn合作社',
        id: '232323151562479258',
        time: '2018-1-1',
        scale: '中型',
        place: '宁安县',
        phone: '15546465925'
    }
];
const tableData = {
    editInlineColumns: editInlineColumns,
    editInlineData: editInlineData
};

export default tableData;
