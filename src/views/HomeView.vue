<!--
 * @Author: 鹏程 李 1494205676@qq.com
 * @Date: 2023-04-20 22:59:23
 * @LastEditors: 鹏程 李 1494205676@qq.com
 * @LastEditTime: 2023-04-26 22:05:32
 * @FilePath: \book-front\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: 鹏程 李 1494205676@qq.com
 * @Date: 2023-04-20 22:59:23
 * @LastEditors: 鹏程 李 1494205676@qq.com
 * @LastEditTime: 2023-04-24 23:12:17
 * @FilePath: \2023-04-20\book-front\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: 鹏程 李 1494205676@qq.com
 * @Date: 2023-04-20 22:59:23
 * @LastEditors: 鹏程 李 1494205676@qq.com
 * @LastEditTime: 2023-04-22 15:59:47
 * @FilePath: \2023-04-20\book-front\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="mod-user">
      <el-form :inline="true" :model="dataForm" @keyup.enter="getDataList()" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="dataForm.name" placeholder="请输入要查询的图书" clearable></el-input>
        </el-form-item> 
        <el-form-item>
          <el-button type="warning" plain @click="getDataList()">查询</el-button>
          <el-button type="succuss" plain @click="addBook()">新增</el-button>
        </el-form-item>
      </el-form>


      <el-table :data="dataList" border v-loading="dataListLoading" style="width: 100%">
        <el-table-column prop="id" header-align="center" align="center" width="120" label="序号"></el-table-column>
        <el-table-column header-align="center" align="center" width="120" label="图片">
          <template v-slot="scope">
            <img v-if="scope.row.picture != undefined" :src="scope.row.picture" lazy style="width: 100px; height: 80px;" />
          </template>
        </el-table-column>
        <el-table-column prop="name" header-align="center" align="center" width="180" label="书名"></el-table-column>
        <el-table-column prop="auth" header-align="center" align="center" width="180" label="作者"></el-table-column>
        <el-table-column prop="introduce" header-align="center" align="center" width="340" label="介绍"></el-table-column>
        <el-table-column prop="publish" header-align="center" align="center" width="180" label="出版社"></el-table-column>
        <el-table-column prop="price" header-align="center" align="center" width="70" label="价格"></el-table-column>
        <el-table-column prop="gmtCreate" header-align="center" align="center" width="200" label="出版时间"></el-table-column>
        <el-table-column fixed="right" header-align="center" align="center" width="150" label="操作">
          <template v-slot="scope">
            <el-button type="success" plain size="small" @click="updBookInfo(scope.row)">修改</el-button>
            <el-button type="danger" plain size="small" @click="deleteBookInfoById(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>


      <el-pagination
        @size-change="sizeChanHanle"
        @current-change="currentChangeHanle"
        :current-page="current"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage">
      </el-pagination>

    </div>
  </div>
</template>

<script>
  import { getBookInfoList, delOneBookInfo } from '@/api/book';
  export default {
    emits:{

    },
    data() {
      return {
        dataForm:{
          name:''
        },
        dataList: [],
        param:{},
        current:0,
        pageSize:10,
        totalPage:0,
        dataListLoading:false,
      }
    },
    //方法编写区
    methods: {
      getDataList() {
        console.log("进入getbook方法");
        this.param = {
          "name":this.dataForm.name
        }
        this.dataListLoading = true;
        getBookInfoList(this.current, this.pageSize, this.param).then((resp)=>{
          console.log("getbookInfoList数据：",resp.data);
          const{code, data} = resp.data
          if(code === "00000" && data){
            this.dataList = data.records
            this.totalPage = data.total
          }
          else{
            this.dataList = [];
          }
          this.dataListLoading = false
        })
      },

      sizeChanHanle(val){
        this.pageSize = val
        this.current = 1
        this.getDataList()
      },
      currentChangeHanle(val){
        this.current = val
        this.getDataList()
      },
      addBook(){
        this.$router.push({path:'book-add'})
      },
      updBookInfo(row){
        console.log("修改书本信息的数据是：",row);
        this.$router.push({path:'book-upd/'+row.id})
      },
      deleteBookInfoById(row){
        console.log("删除书本信息的数据是：",row);
        this.param = {
          'id':row.id
        }
        console.log(this.param);
        this.$confirm('确定删除吗？','提示',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type:'warning',
        }).then(()=>{
          delOneBookInfo(row).then((resp)=>{
            console.log("调用del接口信息：",resp.data);
            const{code} = resp.data
            if(code === '00000'){
              this.$message({
                message: '删除成功！',
                type: 'success',
                duration : 1500,
                onClose:()=>{
                  this.getDataList()
                }
              });
            }else{
              this.$message({
                message:'删除失败！',
                duration:1500,
                onClose:()=>{
                  this.getDataList()
                }
              })
            }
          })
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    //生命周期 创建完成
    created() {
      this.getDataList();
    }
  }
</script>