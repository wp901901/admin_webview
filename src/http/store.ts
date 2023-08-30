import request from "@/utils/request";
import {storeListRes,getAllStoreRes} from "@/types/responseType.d";

export function getStoreList(data:string){
    return request<storeListRes>({
        url: '/store/getStoreList',
        method: 'post',
        data
    })
}

export function getAllStoreList(data?:null){
    return request<getAllStoreRes>({
        url: '/store/getAllStoreList',
        method: 'post',
        data
    })
}