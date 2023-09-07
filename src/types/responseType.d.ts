export interface httpRes<T> {
    code: number,
    message: string,
    content: T
}


export interface loginRes {
    token: string
}

export interface userInfo {
    avatar:string
    date:Date|string
    email:string
    exp:number
    iat:number
    id:number
    identity:string
    name:string
    password:null
    password2:null,
}

// export interface getUserInfo{
//     id:number,
//     identity:string
// }

export interface userInfoPinia{
    user:userInfo,
    token:string,
}

// 获取店铺列表
export type storeListRes = getStore<StoreRes>

export interface StoreRes{
    "store_id":number,
    "store_name":string,
    "store_address":string,
    "store_headerpic":string,
    "store_concise":string,
    "store_is_open": string,
    "store_eat_count": null | Date,
    "store_last_eat_date": null | Date
}
export interface getStore<T>{
    count:number,
    list:T[]
}

export interface getAllStoreRes{
    list:StoreRes[]
}
// 所有店铺tabeldata的类型声明
export type allStoreTabelList = StoreRes[];
