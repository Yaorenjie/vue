<template>
  <div class="clearFix aboutDiv"  @click="url">
    <slot class="fl" name="img"></slot>
    <div class="fr clearFix">
      <slot name="name"></slot>
      <img v-if="!img" class="fr" slot="img" src="../assets/icon/icon_arrow2.png" />
    </div>
  </div>
</template>
<style scoped>
.aboutDiv{
  width:100%;
  height:90px;
  background:#fff;
  border-bottom:1px solid #dadada;
  margin-bottom:8px;
}
.aboutDiv:nth-last-child(1){
margin-right:0;
}
.aboutDiv>img{
  padding:15px 15px 15px 10px;
  height:60px;
  width:60px;
  border-radius:50%;
}
.aboutDiv>div{
width:70%;
}
.aboutDiv p{
    font-size:18px;
    color:#333;
    line-height:90px;
}
.aboutDiv .fr img{
  margin-top:-52px;
  padding-right:10px;
  width:8px;
}
</style>
<script>
export default {
  name: 'productInfo',
  props:['img'],
   methods:{
    url:function(){
    if(!this.img){
      this.$router.push({ path: 'myInfo' })
    }
    }
 }
}
</script>
