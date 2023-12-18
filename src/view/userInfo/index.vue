<template>
    <div class="container">
        <div class="image_box">
            <el-image class="image_avatar" :src="userInfo.avatar" fit="fill" />
            <div class="users">
                <span>{{ userInfo.name }}</span>
                <el-tag class="ml-2" type="success">{{userInfo.identity}}</el-tag>
            </div>
        </div>
        <div class="create_date">
            <span>账号创建时间：{{ dispostDate(userInfo.date) }}</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref,Ref, computed } from 'vue'
import {loginUser} from '@/store/users'
import { userInfoPinia } from '@/types/responseType.d'

const userPinia = loginUser();
const userInfo = userPinia.getterUserInfo;

const dispostDate:any = computed(()=>{
    return (time:Date) =>{
        const date = new Date(time)
        const year = date.getUTCFullYear();
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
        const day = date.getUTCDate().toString().padStart(2, '0');
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        const seconds = date.getUTCSeconds().toString().padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
})
</script>
<style lang="scss" scoped>
.container{
    padding: 40px 20px;
    .image_box{
        display: flex;
        .image_avatar{
            width: 100px; 
            height: 100px;
            border-radius: 8px;
        }
        .users{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 15px;
            span:first-child{
                font-weight: bold;
                margin-bottom: 10px;
            }
        }
    }
    .create_date{
        margin-top: 32px;
    }
}
</style>
<!-- https://lanhuapp.com/web/#/item/project/detailDetach?pid=dc6d4ca0-30ba-45ab-a67c-c4a732dee396&project_id=dc6d4ca0-30ba-45ab-a67c-c4a732dee396&image_id=70ce65ee-bb72-47ec-a077-f08e781d83de&fromEditor=true -->