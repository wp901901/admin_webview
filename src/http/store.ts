import request from "@/utils/request";
import {storeListRes,getAllStoreRes} from "@/types/responseType.d";
import {storeEditRuleType} from "@/types/storeEditType.d";

// 获取单个店铺数据
export function getStoreList(data:string){
    return request<storeListRes>({
        url: '/store/getStoreList',
        method: 'post',
        data
    })
}

// 获取全部店铺列表
export function getAllStoreList(data?:null){
    return request<getAllStoreRes>({
        url: '/store/getAllStoreList',
        method: 'post',
        data
    })
}

// 写入店铺信息
export function storeEdit(data:storeEditRuleType){
    return request({
        url: '/store/addStore',
        method: 'post',
        data
    })
}