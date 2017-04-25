<template>
  <div class="content">
    <slot name="title"></slot>
    <slot  name="price"></slot>
    <div class="contIf">
      <div>
        <slot  name="range"></slot>
      </div>

      <div  class="clearFix">
        <div class="fl h1"></div>
        <div class="fl">服务内容</div>
        <div class="fl h1"></div>
      </div>
      <div  @click="buy">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content{
margin:0 10px;
  background:#fff;
  padding-bottom:20px;
box-shadow: 0px 5px 5px rgba(0,0,0,.1);
border-radius:3px;

}
h1{
text-align: center;
font-size:15px;
color:#333;
font-weight: 500;
padding:20px 0 10px 0;
}
p:nth-child(2){
  text-align: center;
  color:#999;
  font-size:10px;
  margin-bottom:18px;
}
p:nth-child(2) span{
  color:#333;
  font-size:16px;
  font-weight: 600;
}
p{
  margin-left:12px;
  font-size:12px;
  color:#999;
  margin-bottom:25px;
}
.clearFix{
  margin:0 12px;
  text-align:center;
  font-size:14px;
  color:#333;
}
.clearFix .fl{
  width:33.3%;
}
.h1{
  height:1px;
  background:#dadada;
  margin:8px 0;
}
 ul{
  margin:18px 10px 0 10px;
  font-size:12px;
  color:#666;
}
 ul li{
list-style:none;
margin-bottom:15px;
position:relative;
}
 ul li:nth-last-child(1){
margin-bottom:0;
}
ul li>div{
position:absolute;
top:5px;
  height:4px;
  width:4px;
  border-radius: 50%;
  background:#dadada;
}
 ul li>span{
  padding:0 12px ;
  line-height:15px;
   word-break:normal;
 width:auto;
 display:block;
 white-space:pre-wrap;
 word-wrap : break-word ;
 overflow: hidden ;
}
.contIf>div:nth-child(1) p{
  text-align:center;
}

</style>
<script>
import btn_bug_h from '../single/btn_bug_h.vue'
export default {
  name: 'productInfo',
  props:['contIf',"id","type"],
 methods:{
    buy:function(){
      console.log(this.contIf);
    }
 },
 watch:{
 contIf:function(){

 }
 },
  components:{
    btn_bug_h
        }
}
</script>
