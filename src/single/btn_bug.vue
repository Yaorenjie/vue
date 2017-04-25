<template>
    <div class="btn" @click="url">
        <p class="tc">了解详情</p>
        <img src="../assets/icon/icon_triangle.png" />
    </div>
</template>
<style scoped>
  .btn{
  width:80px;
  height:34px;
  font-size:12px;
  color:#333;
  background:#ebca34;
  position:relative;
  }
   .btn p{
   padding-top:9px;
   }
  .btn img{
  width:3px;
  height:6px;
  position:absolute;
  top:14px;
  right:6px;
  }
</style>
<script>
export default {
  name: 'productInfo',
   props:["id","type","name"],
     mounted: function () {
 // `this` 指向 vm 实例

 },
   methods:{
    url:function(){
    if(this.type==1){
        this.$router.push({ path: 'productInfo2', query: { type: 1,id:this.id} })
    }else if(this.type==2){
        if(this.name == "企航套餐"){
          this.$router.push({ path: 'productInfo1', query: { type: 2,id:this.id} })
        }else{
          this.$router.push({ path: 'productInfo', query: { type: 2,id:this.id} })
        }
    }
 }
}
}
</script>
