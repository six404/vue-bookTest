/*
 * @Author: 鹏程 李 1494205676@qq.com
 * @Date: 2023-04-21 20:57:12
 * @LastEditors: 鹏程 李 1494205676@qq.com
 * @LastEditTime: 2023-04-25 22:15:57
 * @FilePath: \book-front\src\api\book.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import requset from '../utils/request'
 
// 获取书城列表分页条件查询
export function getBookInfoList(current,pageSize,param){
    return requset({
        url: `/book/list/${current}/${pageSize}`,
        method: 'post',
        data:param
    })
}

// 新增数据
export function addOneBookInfo(param){
    return requset({
        url: `/book/add-one-book`,
        method: 'post',
        data:param
    })
}

// 修改
export function updOneBookInfo(param){
    return requset({
        url: `/book/upd-one-book`,
        method: 'post',
        data:param
    })
}

// 删除
export function delOneBookInfo(param){
    return requset({
        url: `/book/delete-one-book`,
        method: 'post',
        data:param
    })
}

// 查询
export function getBookInfoById(id){
    return requset({
        url: `/book/get-one-book/${id}`,
        method: 'get',
    })
}