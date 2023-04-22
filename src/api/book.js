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