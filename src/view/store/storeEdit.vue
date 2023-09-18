<template>
    <!-- https://lanhuapp.com/web/#/item/project/detailDetach?pid=587c2d75-aa47-4012-97bc-a4c60c0edec8&project_id=587c2d75-aa47-4012-97bc-a4c60c0edec8&image_id=bc83a43b-19a7-41ac-866c-8baa991c4ce3&fromEditor=true -->
    
    <step></step>

    <div class="step_one_center">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
            status-icon
        >
            <el-form-item label="店铺名称：" prop="storeName">
                <el-input v-model="ruleForm.storeName" />
            </el-form-item>
            <el-form-item label="店铺地址：" prop="storeAdress">
                <el-input v-model="ruleForm.storeAdress" />
            </el-form-item>
            <el-form-item label="店铺名称：" prop="headerPic">
                <el-input v-model="ruleForm.headerPic" />
            </el-form-item>
            <el-form-item label="店铺简介：" prop="headerPic">
                <el-input v-model="ruleForm.headerPic" />
            </el-form-item>
            <el-form-item label="是否营业：" prop="storeOpen">
                <el-switch v-model="ruleForm.storeOpen" />
            </el-form-item>
            <el-form-item label="光顾次数：" prop="storeEatCount">
                <el-input v-model="ruleForm.storeEatCount" />
            </el-form-item>
            <el-form-item label="上次光顾时间：" prop="storeEatLastTime">
                <el-date-picker
                    v-model="ruleForm.storeEatLastTime"
                    type="date"
                    placeholder="请选择日期"
                    size="large"
                />
            </el-form-item>
        </el-form>
    </div>
    
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import type { FormInstance, FormRules,ElForm } from 'element-plus'
type FormRules = InstanceType<typeof ElForm>
import step from "@/component/stepComponent.vue";
const rules = reactive<FormRules>({})
const ruleForm = reactive({
    storeName:'',
    storeAdress:'',
    headerPic:'',
    storeConcise:'',
    storeOpen:false,
    storeEatCount:0,
    storeEatLastTime:'',
})

</script>
<style lang="scss" scoped></style>