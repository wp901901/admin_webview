<!-- 步骤条组件 -->
<template>
    <div class="step_box">
        <div class="step">
            <div class="triangle_small"></div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.step_box {
    // width: 100%;
    height: 48px;
    margin: 12px 16px;
    background: #fff;

    .step {
        width: 378px;
        height: 48px;
        background: #F3F3F3;
        position: relative;
        .triangle_before{
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 10px solid black;
            position: absolute;
            top: 0;
            right:0;
        }
    }
}
</style>