<template>
    <div class="clearFix">
      <indexProfess >
          <h1 slot="title">企业服务咨询</h1>
          <p slot="info">一对一上门服务</p>
          <p slot="info">节约你宝贵的时间</p>
      </indexProfess>
      <indexProfess >
        <h1 slot="title">专属会小盒</h1>
        <p slot="info">所有资料一一归档</p>
        <p slot="info">封存你人生的第一次</p>
        <p slot="info">创业决定</p>
      </indexProfess>
    </div>
</template>
<style scoped>
div{
  padding:0 0 15px 0;
  margin:0 auto;
  width:259px;
}
.clearFix>div:nth-last-child(1){
  margin-left:39px;
}
</style>
<script>
   import indexProfess  from '../pack/indexProfess.vue'
export default {
  data () {
    return {

    }
  },
  components:{
     indexProfess
        }
}
</script>
