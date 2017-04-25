<template>
  <div class="div_input clearFix">
    <slot  name="title"></slot>
    <slot name="input"></slot>
    <slot name="img"></slot>
  </div>
</template>
<style scoped>
.div_input{

    margin-left:10px;
      border-bottom: 1px solid #dadada;
  }
.div_input:nth-last-child(1){
    border-bottom: 0;
}
 p{
    color:#666;
    font-size:12px;
    padding:12px 0;
  }
p>span{
  margin-left:96px;
   color:#666;
   }
  input{
    color:#666;
    font-size:12px;
    width:100%;
    padding:12px 0;

  }
  p>span:nth-child(1){
       margin-left:5px;
  }
img{
  width:8px;
  padding-right:10px;
  padding-left:30%;
  margin-top:-27px;
}
</style>
<script>
import vue from 'vue'
import common from '../js/common.js'
export default {
  name: 'index',
  data () {
    return {

    }
  },
props:["dyBtn"],
     mounted: function () {
 },
  methods:{
}
}
</script>
