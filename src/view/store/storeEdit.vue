<template>
    <!-- https://lanhuapp.com/web/#/item/project/detailDetach?pid=587c2d75-aa47-4012-97bc-a4c60c0edec8&project_id=587c2d75-aa47-4012-97bc-a4c60c0edec8&image_id=bc83a43b-19a7-41ac-866c-8baa991c4ce3&fromEditor=true -->
    
    <step></step>

    <div class="step_one_center">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="130px"
            status-icon
        >
            <el-form-item label="店铺名称：" prop="storeName">
                <el-input class="ipt_width" v-model="ruleForm.storeName" />
            </el-form-item>
            <el-form-item label="店铺地址：" prop="storeAdress">
                <el-input class="ipt_width" v-model="ruleForm.storeAdress" />
            </el-form-item>
            <el-form-item label="店铺头像：" prop="headerPic">
                <el-input class="ipt_width" v-model="ruleForm.headerPic" />
            </el-form-item>
            <el-form-item label="店铺简介：" prop="headerPic">
                <el-input class="ipt_width" v-model="ruleForm.storeConcise" />
            </el-form-item>
            <el-form-item label="是否营业：" prop="storeOpen">
                <el-switch class="ipt_width" v-model="ruleForm.storeOpen" />
            </el-form-item>
            <el-form-item label="光顾次数：" prop="storeEatCount">
                <el-input class="ipt_width" v-model="ruleForm.storeEatCount" />
            </el-form-item>
            <el-form-item label="上次光顾时间：" prop="storeEatLastTime">
                <el-date-picker
                    v-model="ruleForm.storeEatLastTime"
                    type="date"
                    placeholder="请选择日期"
                    size="large"
                />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitStoreInfo">下一步</el-button>
            </el-form-item>
        </el-form>
    </div>
    
</template>
<script lang="ts" setup>
import { reactive,ref } from 'vue';
import type { FormInstance, FormRules,ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
// type FormRules = InstanceType<typeof ElForm>
import step from "@/component/stepComponent.vue";
import type {storeEditRuleType} from '@/types/storeEditType.d.ts';
// 引入接口
import { storeEdit } from '@/http/store';
const ruleFormRef = ref<InstanceType<typeof FormInstance>>();   // ref获取表格数据
const rules = reactive<InstanceType<typeof FormRules>>({
    storeName:[
        { required: true, message: '请输入店铺名称', trigger: 'blur' },
    ],
    storeAdress:[
        { required: true, message: '请输入店铺地址', trigger: 'blur' },
    ],
    headerPic:[
        { required: true, message: '请输入店铺头像', trigger: 'blur' },
    ],
    storeEatCount:[
        { required: true, message: '请输入光顾次数', trigger: 'blur' },
    ],
    storeEatLastTime:[
        { required: true, message: '请输入上次光顾时间', trigger: 'blur' },
    ]
})
const ruleForm = reactive<storeEditRuleType>({
    storeName:'',
    storeAdress:'',
    headerPic:'',
    storeConcise:'',
    storeOpen:false,
    storeEatCount:0,
    storeEatLastTime:null,
})

const submitStoreInfo = () => {
    ruleFormRef.value?.validate(async (valid:any) => {
        if (valid) {
            console.log({...ruleForm});
            
            // const res = await storeEdit({...ruleForm})
            // if(res.code != 200) return ElMessage.error(res.message);
            console.log('submit!')
        }else{
            console.log('error submit!')
        }
    })
}
</script>
<style lang="scss" scoped>
    .ipt_width{
        width: 416px
    }
    .step_one_center{
        margin: 30px auto;
        display: flex;
        // flex-direction: column;
        justify-content: center;
    }
</style>