<template>
  <div class="div_input clearFix" @click="btn()">
    <div class="fl"  >
      <img v-if="!btnIf"  src="../assets/icon/checkbox2.png" />
      <img v-if="btnIf" src="../assets/icon/checkbox1.png" />
    </div>
    <div class="fl">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style scoped>
  .div_input{
    padding:12px 0;
    margin-left:10px;
      border-bottom: 1px solid #dadada;
  }
  img{
  width:10px;
  margin:1px 10px 0 0 ;
  }
.clearFix:nth-last-child(1){
       border-bottom: 0
}
</style>
<script>
export default {
  name: 'index',
    props:['invoice','invoiceId'],
  data () {
    return {
      btnIf:false
    }
  },
  mounted:function(){

  },
   watch:{
 },
 methods:{
    btn:function(){
    this.btnIf = !this.btnIf;
    this.$emit('ee',this.invoiceId,this.btnIf )
    }
 }
}
</script>
