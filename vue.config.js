/*
 * @Author: 鹏程 李 1494205676@qq.com
 * @Date: 2023-04-20 22:59:23
 * @LastEditors: 鹏程 李 1494205676@qq.com
 * @LastEditTime: 2023-04-20 23:35:48
 * @FilePath: \2023-04-20\book-front\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = {
  lineOnSave:false,
  devServer:{
      port:8020, // 启动端口号
      open:true  // 启动后是否自动打开网页
  }
} 