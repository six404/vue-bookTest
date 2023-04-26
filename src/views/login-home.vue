<!--
 * @Author: 鹏程 李 1494205676@qq.com
 * @Date: 2023-04-26 16:55:50
 * @LastEditors: 鹏程 李 1494205676@qq.com
 * @LastEditTime: 2023-04-26 17:30:28
 * @FilePath: \book-front\src\views\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
    <form action="#" class="login-form">
      <h2 class="test">登录</h2>
      <input type="text" name="username" placeholder="用户名">
      <input type="password" name="password" placeholder="密码">
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
    data() {
    //这里存放数据
      return {

      };
    },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

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
<!--  -->
<style lang='scss' scoped>
  //@import url(); 引入公共css类
  @import "../components/style.css";
  
</style>