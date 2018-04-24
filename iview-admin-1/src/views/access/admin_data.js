
export const editInlineColumns = [
    {
        title: '部门编号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '部门名称',
        align: 'center',
        key: 'name',
        width: 290,
        editable: true
    },
    {
        title: '部门主管',
        align: 'center',
        width: 90,
        key: 'master'
    },
    {
        title: '部门成员',
        align: 'center',
        width: 90,
        key: 'member'
    },
    {
        title: '职能',
        align: 'center',
        key: 'work',
        editable: true
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
        name: '垂直业务部',
        master: '张三',
        member: '李四',
        work: '垂直业务查询'

    },
    {
        name: '市场部',
        master: '王五',
        member: '赵六',
        work: '市场管理'

    }, {
        name: '宣传部',
        master: '侯伟',
        member: '王丽',
        work: '业务宣传'

    }, {
        name: '人事部',
        master: '李维嘉',
        member: '古尔丹',
        work: '人力资源管理'

    }
];
const tableData = {
    editInlineColumns: editInlineColumns,
    editInlineData: editInlineData
};

export default tableData;
