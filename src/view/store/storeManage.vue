<!-- https://lanhuapp.com/web/#/item/project/detailDetach?tid=65ee08f8-9242-4617-8483-de1accd88cd6&pid=587c2d75-aa47-4012-97bc-a4c60c0edec8&project_id=587c2d75-aa47-4012-97bc-a4c60c0edec8&image_id=ed9af998-15ca-4772-8afd-95b505642e65&fromEditor=true&type=image -->
<template>
    <el-row class="row_style">
        <el-col :span="24">
            <el-button type="primary" @click="editCommodity">新增店铺信息</el-button>
        </el-col>
    </el-row>
    
    <el-table :data="storeTaberData" style="width: 100%">
        <el-table-column label="" width="280" align="center">
            <template #default="{row}">
                <el-button type="primary">编辑</el-button>
                <el-button type="primary">上架</el-button>
                <el-button type="primary">删除</el-button>
            </template>
        </el-table-column>
        <el-table-column label="店铺信息" width="180" align="center">
            <template #default="{row}">
                <!-- <el-image :src="getImage(row.store_headerpic)"></el-image> -->
                <div class="store_info">
                    <el-image class="store_image" :src="row.store_headerpic"></el-image>
                    <div class="store_name">
                        <div>{{ row.store_name }}</div>
                        <div>{{ row.store_address }}</div>
                    </div>
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="store_concise" label="店铺简介"  align="center"/>
        <el-table-column prop="store_eat_count" label="光顾次数"  align="center">
            <template #default="{row}">
                <span>{{ row.store_eat_count ? row.store_eat_count : 0 }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="store_last_eat_date" label="上次光顾时间"  align="center">
            <template #default="{row}">
                <span>{{ row.store_last_eat_date ? row.store_last_eat_date : 0 }}</span>
            </template>
        </el-table-column>
    </el-table>
</template>
<script lang="ts" setup>
import { getAllStoreList } from '@/http/store'
import { allStoreTabelList } from "@/types/responseType.d";
import { ref,reactive } from "vue";
import type {Ref} from 'vue'
import { useRouter } from 'vue-router';
let storeTaberData:Ref<allStoreTabelList> = ref([]);
const router = useRouter();

// 获取全部店铺信息
const _getAllStoreList = async () => {
    const res = await getAllStoreList()
    storeTaberData.value = res.content.list
}
_getAllStoreList()

// 店铺信息编辑页
const editCommodity = ()=>{
    router.push({
        path: '/storeEdit'
    })
}

// const getImage = (url:string)=>{
//    console.log(url);
//    // 把现在的图片连接传进来，返回一个不受限制的路径
//    if(url !== undefined){
//    	    return url.replace(/^(http)[s]*(\:\/\/)/,'https://images.weserv.nl/?url=');
//    }
// }


</script>
<style lang="scss" scoped>
.row_style{
    margin: 20px;
}
.store_info{
    display: flex;
    .store_image{
        width: 64px;
        height: 64px;
        margin-right: 8px;
    }
    .store_name{
        display: flex;
        flex-direction: column;
        div{
            &:first-child{
                color: #303133;
            }
            &:last-child{
                font-size: 12px;
                color: #999;
                display: flex;
                flex: 1;
                flex-flow: row wrap;
                align-items: end;
            }
        }
    }
}

</style>