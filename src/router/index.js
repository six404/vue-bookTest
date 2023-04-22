/*
 * @Author: 鹏程 李 1494205676@qq.com
 * @Date: 2023-04-20 22:59:23
 * @LastEditors: 鹏程 李 1494205676@qq.com
 * @LastEditTime: 2023-04-22 17:06:35
 * @FilePath: \2023-04-20\book-front\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/book-add',
    name: 'addBook',
    component: () => import('../views/book-add.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
