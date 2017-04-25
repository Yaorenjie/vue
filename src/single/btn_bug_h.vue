<template>
  <div class="btn" @click="url">
    <p class="tc">立即购买</p>
  </div>
</template>
<style scoped>
  .btn{
  width:140px;
  height:36px;
  margin:0 auto;
  font-size:14px;
  color:#333;
  background:#ebca34;
  border-radius:20px;
  }
   .btn p{
   line-height:36px;
   }
</style>
<script>
export default {
  name: 'productInfo',
    props:["id","type"],
   methods:{
    url:function(){
      this.$router.push({ path: 'buyService', query: {id:this.id,type:this.type} })
    }
 }
}
</script>
