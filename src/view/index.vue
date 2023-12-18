<template>
    <span>首页</span>
    <el-upload 
        action="#" 
        list-type="picture-card" 
        :auto-upload="true"
        :http-request="uploadSectionFile"
    >
        <el-icon>
            <Plus />
        </el-icon>

    </el-upload>

    <el-button type="danger">上传</el-button>
</template>
<script setup  lang="ts">
import { upload } from '@/http/index'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'

const imageUrl = ref('')    

const uploadSectionFile = async (params:any) => {
    console.log(params);
    const formData = new FormData()
    formData.append('file',params.file)
    const res = await upload(formData)
    console.log(res)
    
}




</script>