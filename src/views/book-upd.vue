<!--  -->
<template>
    <h3 class="dialog-head">修改图书</h3>
    <div class='mody-body'>
      <el-form v-model="dataForm" :rules="dataRure" ref="dataForm" label-width="120px">
          <el-form-item label="书本编号" prop="id">
            <el-input v-model="dataForm.id" type="input" style="width:350px;" disabled></el-input>
          </el-form-item>
          <el-form-item label="书本图片" prop="picture">
            <el-upload
              class="upload-demo"
              action="http://localhost:8877/book/upload"
              :on-preview="handlePreview"
              :on-success="handlPictureSuccess"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="书名" prop="name">
            <el-input v-model="dataForm.name" type="input" placeholder="请填写书名" style="width:350px;"></el-input>
          </el-form-item>
          <el-form-item label="作者" prop="auth">
            <el-input v-model="dataForm.auth" type="input" placeholder="请填写作者名" style="width:350px;"></el-input>
          </el-form-item>
          <el-form-item label="出版社" prop="publish">
            <el-input v-model="dataForm.publish" type="input" placeholder="请填写出版社名称" style="width:350px;"></el-input>
          </el-form-item>
          <el-form-item label="介绍" prop="introduce">
            <el-input v-model="dataForm.introduce" type="textarea" :row="2" placeholder="请填写图书介绍" style="width:350px;"></el-input>
          </el-form-item>
          <el-form-item label="价格" prop="price">
            <el-input v-model="dataForm.price" type="input" placeholder="请填写图书价格" style="width:350px;"></el-input>
          </el-form-item>
        </el-form>
        <span class="dialog-footer">
          <el-button type="primary" @click="dataFormSubmit()">确定修改</el-button>
        </span>
    </div>
  </template>
  
  <script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import { updOneBookInfo, getBookInfoById } from '@/api/book';
  
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
      data() {
        var validateContent = (rule, value, callback) => {
            if (!this.dataForm.content && !/\S/.test(value)) {
              callback(new Error('内容不能为空'))
            } else {
              callback()
            }
          }
      //这里存放数据
        return {
          dataForm:{
            id:'',
            name:'',
            auth:'',
            publish:'',
            introduce:'',
            price:''
          },
          fileList:[],
          dataRule:{
            name:[
            {required:true,message:'不能为空',trigger:'blur'}
            ],
            auth:[
            {required:true,message:'不能为空',trigger:'blur'}
            ],
            introduce:[
            {required:true,message:'不能为空',trigger:'blur'}
            ],
            publish:[
            {required:true,message:'不能为空',trigger:'blur'}
            ],
            price:[
            {required:true,message:'不能为空',trigger:'blur'}
            ]
          }
        };
      },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      backDataList(){
        const id = this.$route.params.id
        console.log("修改页面的数据",id);
        getBookInfoById(id).then((resp)=>{
          console.log("调用getBookInmfoById接口返回的数据是：",resp.data);
          const{code, data} = resp.data
          if(code === '00000'){
            this.dataForm.id = data.id
            this.dataForm.auth = data.auth
            this.fileList = [{url:data.picture}]
            this.dataForm.name = data.name
            this.dataForm.introduce = data.introduce
            this.dataForm.price = data.price
            this.dataForm.publish = data.publish         
          }
        }).catch((error)=>{
          console.log(error);
        })
      },
      handleRemove(file, fileList) {
          console.log(file, fileList);
        },
      handlePreview(file) {
        console.log(file);
      },
      handlPictureSuccess(res,file){
        console.log(file);
        this.dataForm.picture = file.response.data
      },
      dataFormSubmit(){
        this.param = {
          'id':this.dataForm.id,
          'picture':this.dataForm.picture,
          'name':this.dataForm.name,
          'introduce':this.dataForm.introduce,
          'publish':this.dataForm.publish,
          'auth':this.dataForm.auth,
          'price':this.dataForm.price
        }
        updOneBookInfo(this.param).then((resp)=>{
          console.log("调用updOneBookInfo方法返回的数据:", resp.data);
          const{code, message} = resp.data
          if(code === '00000'){
            this.$message({
              message: message,
              type: 'success',
              duration : 1500,
              onClose:()=>{
                this.dataForm = {}
                this.$router.push({path:'/'})
              }
            });
          }
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      this.backDataList();
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
  
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeUnmount() {}, //生命周期 - 销毁之前
    unmounted() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
  </script>
  
  <style lang="scss" scoped>
  .dialog-footer{
    margin-left: 70%;
  }
  
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  </style>