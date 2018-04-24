<style lang="less">
    @import '../../styles/common.less';
    @import './access.less';
    @import '../tables/components/table.less';
</style>

<template>


    <Row class="margin-top-10">

        <Col span="24">
        <Card>
            <p slot="title">
                <Icon type="mouse"></Icon>
                点击搜索进行搜索
            </p>
            <Row>
                <Col span="20">
                <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入角色名称..."  />
                </Col>
                <Col span="4">
                <span  style="margin: 0 10px;"><Button type="primary" icon="search">搜索</Button></span>
                <Button @click="handleCancel3" type="ghost" >取消</Button>
                </Col>
            </Row>

        </Card>
        </Col>

        <Col span="24">
        <Card>
            <p slot="title">
                <Icon type="android-remove"></Icon>
                角色管理
            </p>
                <can-edit-table refs="table2" span="1"  v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>

        </Card>
        </Col>
    </Row>
</template>




<script>
    import canEditTable from '../tables/components/canEditTable.vue';
    import tableData from './role_data.js';

    export default {
        name: 'editable-table',
        components: {
            canEditTable
        },
        data () {
            return {
                columnsList: [],
                tableData: [],
                editInlineColumns: [],
                editInlineData: [],
                editIncellColumns: [],
                editIncellData: [],
                editInlineAndCellColumn: [],
                editInlineAndCellData: [],
                showCurrentColumns: [],
                showCurrentTableData: false,
            };
        },
        methods: {
            getData () {
                this.columnsList = tableData.table1Columns;
                this.tableData = tableData.table1Data;
                this.editInlineColumns = tableData.editInlineColumns;
                this.editInlineData = tableData.editInlineData;
                this.editIncellColumns = tableData.editIncellColumns;
                this.editIncellData = tableData.editIncellData;
                this.editInlineAndCellColumn = tableData.editInlineAndCellColumn;
                this.editInlineAndCellData = tableData.editInlineAndCellData;
                this.showCurrentColumns = tableData.showCurrentColumns;
            },
            handleNetConnect (state) {
                this.breakConnect = state;
            },
            handleLowSpeed (state) {
                this.lowNetSpeed = state;
            },
            getCurrentData () {
                this.showCurrentTableData = true;
            },
            handleDel (val, index) {
                this.$Message.success('删除了第' + (index + 1) + '行数据');
            },
            handleCellChange (val, index, key) {
                this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
            },
            handleChange (val, index) {
                this.$Message.success('修改了第' + (index + 1) + '行数据');
            }
        },
       
        created () {
            this.getData();
        }
    };
</script>



