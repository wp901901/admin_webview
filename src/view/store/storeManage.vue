<!-- https://lanhuapp.com/web/#/item/project/detailDetach?tid=65ee08f8-9242-4617-8483-de1accd88cd6&pid=587c2d75-aa47-4012-97bc-a4c60c0edec8&project_id=587c2d75-aa47-4012-97bc-a4c60c0edec8&image_id=ed9af998-15ca-4772-8afd-95b505642e65&fromEditor=true&type=image -->
<template>
    <el-table :data="data" style="width: 100%">
        <el-table-column prop="date" label="" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
    </el-table>
</template>
<script lang="ts" setup>
    import { ref } from "vue";
    const data = ref([{ data: '', name: '', address: '' }]) 
</script>