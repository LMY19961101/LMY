
export const editInlineColumns = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '姓名',
        align: 'center',
        key: 'name',
        width: 100,
        editable: true
    },
    {
        title: '性别',
        align: 'center',
        width: 90,
        key: 'sex'
    },
    {
        title: '职能',
        align: 'center',
        key: 'work',
        editable: true
    },
    {
        title: '部门主管',
        align: 'center',
        width: 90,
        key: 'header'
    },
    {
        title: '操作',
        align: 'center',
        width: 190,
        key: 'handle',
        handle: ['edit', 'delete']
    }
];

export const editInlineData = [
    {
        name: '李洋',
        sex: '男',
        work: 'web前端开发',
        header:'金涛'
    },
    {
        name: '相高强',
        sex: '男',
        work: '人工智能',
        header:'张剑飞'
    },
    {
        name: '吕海龙',
        sex: '男',
        work: '大数据',
        header:'张剑飞'
    },
    {
        name: '刘宇薇',
        sex: '女',
        work: 'web前端开发',
        header:'张剑飞'
    },
    {
        name: '叶司琦',
        sex: '女',
        work: '人力资源',
        header:'金涛'
    },
    {
        name: '金易达',
        sex: '男',
        work: '云计算',
        header:'吴迪'
    },
    {
        name: '杨克扣',
        sex: '男',
        work: '大数据',
        header:'梁伟'
    },
    {
        name: '唐一航',
        sex: '男',
        work: 'java',
        header:'王一萍'
    },
    {
        name: '徐政',
        sex: '男',
        work: '大数据',
        header:'吴迪'
    }

];


const tableData = {
    editInlineColumns: editInlineColumns,
    editInlineData: editInlineData
};

export default tableData;
