import request from "@/utils/request"
import { login, register } from '@/types/requsetType.d'
import { loginRes } from '@/types/responseType.d'

// 登录
export function login(data: login) {
    return request<loginRes>({
        url: '/admin/api/users/login',
        method: 'post',
        data
    })
}

// 注册
export function register(data: register) {
    return request<{}>({
        url: '/api/users/register',
        method: 'post',
        data
    })
}

// 获取用户信息
export function getUserInfo(data: register) {
    return request<{}>({
        url: '/api/my/current',
        method: 'post',
        data
    })
}

export function upload(data: any) {
    return request({
        url: '/admin/api/closet/uploadImg',
        method: 'post',
        headers:{'content-type': 'multipart/form-data'},
        data
    })
}