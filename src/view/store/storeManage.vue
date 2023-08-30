<!-- https://lanhuapp.com/web/#/item/project/detailDetach?tid=65ee08f8-9242-4617-8483-de1accd88cd6&pid=587c2d75-aa47-4012-97bc-a4c60c0edec8&project_id=587c2d75-aa47-4012-97bc-a4c60c0edec8&image_id=ed9af998-15ca-4772-8afd-95b505642e65&fromEditor=true&type=image -->
<template>
    <el-table :data="storeTaberData" style="width: 100%">
        <el-table-column label="" width="180"></el-table-column>
        <el-table-column label="店铺信息" width="180">
            <template #default="{row}">
                <el-image :src="getImage(row.store_headerpic)"></el-image>
                <span>{{ row.store_name }}</span>
                <span>{{ row.store_address }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="store_concise" label="店铺简介" />
        <el-table-column prop="store_eat_count" label="光顾次数" />
        <el-table-column prop="store_last_eat_date" label="上次光顾时间" />
    </el-table>
</template>
<script lang="ts" setup>
import { getAllStoreList } from '@/http/store'
import { allStoreTabelList } from "@/types/responseType.d";
import { ref,reactive,Ref } from "vue";
let storeTaberData:Ref<allStoreTabelList> = ref([]);

// 获取全部店铺信息
const _getAllStoreList = async () => {
    const res = await getAllStoreList()
    storeTaberData.value = res.content.list
}
_getAllStoreList()

const getImage = (url:string)=>{
   console.log(url);
   // 把现在的图片连接传进来，返回一个不受限制的路径
   if(url !== undefined){
   	    return url.replace(/^(http)[s]*(\:\/\/)/,'https://images.weserv.nl/?url=');
   }
}


</script>