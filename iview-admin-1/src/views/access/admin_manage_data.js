
export const editInlineColumns = [
    {
        title: '操作员编号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '操作员名称',
        align: 'center',
        key: 'name',
        width: 290,
        editable: true
    },
    {
        title: '性别',
        align: 'center',
        width: 90,
        key: 'sex'
    },
    {
        title: '角色',
        align: 'center',
        width: 90,
        key: 'role'
    },
    {
        title: '职能',
        align: 'center',
        key: 'function',
        editable: true
    },
    {
        title: '操作',
        align: 'operation',
        width: 190,
        key: 'handle',
        handle: ['edit', 'delete']
    }
];

export const editInlineData = [
    {
        name: 'Aresn',
        sex: '男',
        role: '前端1开发',
        function: '啦啦啦'
    },
    {
        name: 'Aresn',
        sex: '男',
        role: '前端1开发',
        function: '啦啦啦'
    },
    {
        name: 'Aresn',
        sex: '男',
        role: '前端1开发',
        function: '啦啦啦'
    }
];
const tableData = {
    editInlineColumns: editInlineColumns,
    editInlineData: editInlineData
};

export default tableData;
