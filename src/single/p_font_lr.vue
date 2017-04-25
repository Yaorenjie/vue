
<template>
  <div class="clearFix">
    <slot name="fl" ></slot>
    <slot name="fr" ></slot>
  </div>
</template>
<style scoped>
.list .clearFix{
  padding:12px 10px 12px 0;
    border-bottom:1px solid #e6e6e6;
}
.list .clearFix:nth-child(1)>p{
  line-height:14px;
    font-size:12px;
    color:#999;
}
.list .clearFix:nth-child(1)>p:nth-child(1){
    font-size:14px;
    color:#333;
}
.list .clearFix:nth-last-child(1){
    border-bottom:0;
}

.list .clearFix:nth-child(2)>p span{
    font-size:16px;
    font-weight:600;
    color:#333;
}
.list .clearFix:nth-child(2)>p:nth-child(1){
    font-size:10px;
    color:#999;
}
.list .clearFix:nth-child(2)>p:nth-child(2){
    font-size:12px;
    color:#ebca34;
}
</style>
<script>
import btn_counsel from '../single/btn_counsel.vue'
export default {
  name: 'index',

  components:{
            btn_counsel
        }
}
</script>

