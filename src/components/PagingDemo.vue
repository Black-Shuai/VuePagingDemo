<template>
  <el-card>
    <div class="table-container">
      <el-table :data="tableDataEnd" style="width: 100%" empty-text="暂无数据" size="medium" class="table-data"
                :header-cell-style="{background:'rgb(242, 246, 250)',color:'rgb(102, 102, 102)'}">
        <el-table-column prop="number" label="业务编号" align="center"></el-table-column>
        <el-table-column prop="flowName" label="流程名称" align="center"></el-table-column>
        <el-table-column prop="origin" label="始发地" align="center"></el-table-column>
        <el-table-column prop="destination" label="目的地" align="center"></el-table-column>
        <el-table-column prop="senderName" label="发货人" align="center"></el-table-column>
        <el-table-column prop="senderPhone" label="发货人号码" align="center"></el-table-column>
        <el-table-column prop="consigneeName" label="收货人" align="center"></el-table-column>
        <el-table-column prop="consigneePhone" label="收货人号码" align="center"></el-table-column>
        <el-table-column prop="orderSource" label="注册方式" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.orderSource==1">页面</span>
            <span v-if="scope.row.orderSource==2">批量申请</span>
            <span v-if="scope.row.orderSource==3">接口</span>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="注册时间" align="center"></el-table-column>
      </el-table>
      <div class="block" style="text-align: center">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[1, 2, 3, 4]"
          :page-size="1"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalItems">
        </el-pagination>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'PagingDemo',
  data () {
    return {
      tableData: [{
        number: '001',
        flowName: 'flow1',
        createTime: '2019-11-08 13:58:43',
        origin: '北京东城区',
        destination: '大同新荣区',
        senderName: '12345678944',
        senderPhone: '12345678944',
        consigneeName: '11111111111',
        consigneePhone: '11111111111',
        orderSource: '3'
      }, {
        number: '002',
        flowName: 'flow2',
        createTime: '2019-11-08 13:58:43',
        origin: '北京东城区',
        destination: '大同新荣',
        senderName: '12345678944',
        senderPhone: '12345678944',
        consigneeName: '11111111111',
        consigneePhone: '11111111111',
        orderSource: '3'
      }, {
        number: '003',
        flowName: 'flow3',
        createTime: '2019-11-08 13:58:43',
        origin: '北京东城',
        destination: '大同新荣',
        senderName: '12345678944',
        senderPhone: '12345678944',
        consigneeName: '11111111111',
        consigneePhone: '11111111111',
        orderSource: '3'
      }, {
        number: '004',
        flowName: 'flow4',
        createTime: '2019-11-06 13:58:43',
        origin: '北京东城区',
        destination: '大同新荣区',
        senderName: '12345678944',
        senderPhone: '12345678944',
        consigneeName: '11111111111',
        consigneePhone: '11111111111',
        orderSource: '3'
      }],
      totalItems: 0, // 数据表格总个数
      pageSize: 1, // 数据表格每一页显示的数量
      tableDataEnd: [], // 数据表格每一页显示的数据
      currentPage: 1, // 数据表格显示的当前页数
      options: [{
        value: '0',
        label: '全部'
      }, {
        value: '1',
        label: '页面'
      }, {
        value: '2',
        label: '批量申请'
      }, {
        value: '3',
        label: '接口'
      }]
    }
  },

  created () {
    this.tableDataShow(this.tableData)
  },
  methods: {
    // 表格初始化显示
    tableDataShow (list) {
      this.totalItems = list.length
      if (this.totalItems > this.pageSize) {
        for (let index = 0; index < this.pageSize; index++) {
          this.tableDataEnd.push(list[index])
        }
      } else {
        this.tableDataEnd = list
      }
    },
    // 分页
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.handleCurrentChange(this.currentPage)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      // 需要判断是否检索
      if (!this.flag) {
        this.currentChangePage(this.tableData)
      } else {
        this.currentChangePage(this.filterTableDataEnd)
      }
    },
    currentChangePage (list) {
      this.tableDataEnd = []
      let from = (this.currentPage - 1) * this.pageSize
      let to = this.currentPage * this.pageSize
      for (; from < to; from++) {
        if (list[from]) {
          this.tableDataEnd.push(list[from])
        }
      }
      // this.tableDataShow(this.tableDataEnd)
    }
  }
}
</script>

<style scoped>

</style>
