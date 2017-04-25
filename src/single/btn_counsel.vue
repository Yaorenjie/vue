<template>
  <div class="btn">
    <p class="tc" @click="btn()">提交咨询</p>
  </div>
</template>
<style scoped>
  .btn{
  width:220px;
  height:40px;
  font-size:16px;
  color:#333;
  border:1px solid #999;
  margin:0 auto;
  border-radius:30px;
  }
   .btn p{
   height:40px;
   line-height: 40px;
   }
</style>
<script>
import common from '../js/common.js'
export default {
  name: 'index',
  props:["data",""],
   mounted: function () {
 },
 methods:{

    btn:function(){
     if(this.data.phone == "" || this.data.name==""){
        common().hint.hint("手机号或者称呼不能为空");
     }else if(this.data.phone.length != 11){
        common().hint.hint("手机号输入错误");
     }else{
        this.add();
     }
    },
     add:function(){
      common().load.display();
            var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=addConsult",
                    data:this.data,
                    callback:function(data){
                          common().load.none();
                         if(data.code == 1){
                               common().hint.hint("提交成功");

                         }else{
                            common().hint.hint(data.msg);
                         }
                         self.$emit('close',false )
                    }
             }
             common().ajax.postAjax(options);
        }
 }
 }
</script>
