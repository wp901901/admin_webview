<template>
    <div class="container">
        <div class="image_box">
            <el-image class="image_avatar" :src="userInfo.getterUserInfo.avatar" fit="fill" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref,Ref, watchEffect } from 'vue'
import {loginUser} from '@/store/users'
import { userInfoPinia } from '@/types/responseType.d'
const userInfo = loginUser();

console.log(userInfo.getterUserInfo)
</script>
<style lang="scss" scoped>
.container{
    padding: 40px 20px;
    .image_box{
        .image_avatar{
            width: 100px; 
            height: 100px;
            border-radius: 8px;
        }
    }
}
</style>
<!-- https://lanhuapp.com/web/#/item/project/detailDetach?pid=dc6d4ca0-30ba-45ab-a67c-c4a732dee396&project_id=dc6d4ca0-30ba-45ab-a67c-c4a732dee396&image_id=70ce65ee-bb72-47ec-a077-f08e781d83de&fromEditor=true -->