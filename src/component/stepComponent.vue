<!-- 步骤条组件 -->
<template>
    <div class="step_box">
        <div class="step select_step">
            <div class="triangle_before"></div>
            <span>1.编辑店铺信息</span>
            <div class="triangle_after"></div>
        </div>
        <div class="step">
            <div class="triangle_before"></div>
            <span>2.编辑分类</span>
            <div class="triangle_after"></div>
        </div>
        <div class="step">
            <span>3.编辑商品</span>
            <!-- <div class="triangle_before"></div> -->
        </div>
    </div>
</template>
<style scoped lang="scss">
.step_box {
    // width: 100%;
    height: 48px;
    margin: 12px 16px;
    background: #fff;
    margin: 16px;
    display: flex;
    // flex: 1;
    .step {
        width: 378px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        background: #F3F3F3;
        position: relative;
        flex: 1;
        .triangle_before {
            width: 0;
            height: 0;
            border: 30px solid transparent;
            border-left-color: #fff;
            position: absolute;
            top: -6px;
            right: -60px;
            z-index: 1;
        }

        .triangle_after {
            width: 0;
            height: 0;
            border: 24px solid transparent;
            border-left-color: #F3F3F3;
            position: absolute;
            top: 0;
            right: -48px;
            z-index: 3;
        }
    }

    .select_step {
        background: #187FE6 !important;
        color: #fff;
        .triangle_after{
            border-left-color: #187FE6 !important;
        }
    }
}</style>