<style scoped>

    .hint-mask{
        position: fixed;
        top:50%;
        bottom: 0;
        left: 50%;
        right: 0;
        background: rgba(0,0,0,.7);
        z-index: 10000;
        width: 120px;
        height: 120px;
        margin-top: -60px;
        margin-left: -60px;

    }
    .hint-mask img{
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -25px;
        margin-left: -25px;
        height: 50px;
        width: 50px;
    }
    .loadingMask{
        position: fixed;
        top:0;bottom: 0;
        left: 0;right: 0;
        z-index: 1000;
    }
</style>
<template>
    <div class="loadingMask none" id="loadingMask" >
        <div class="hint-mask">
            <img src="../assets/icon/loading.gif"/>
        </div>
    </div>
</template>

<script>

</script>

