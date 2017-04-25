<template>
  <div class="btn">
    <p class="tc" @click="cfBtn()">{{yzm}}</p>
  </div>
</template>
<style scoped>
  .btn{
  width:80px;
  height:29px;
  font-size:12px;
  color:#333;
  background:#fff;
  position:relative;
  border:1px solid #dadada;
  margin:0 auto;
  }
   .btn p{
   line-height:29px
   }
</style>
<script>
import vue from 'vue'
import common from '../js/common.js'
export default {
  name: 'index',
  props:["phone"],
    data () {
    return {
      countdown:60,
      yzmIs:true,
      yzm:"重新发送",
    }
  },
 methods:{
cfBtn:function(){
if( this.yzmIs){
  this.checkSsmCode();
}
},
checkSsmCode:function(){

var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=sendSsmCode",
                    data:{
                        openid:vue.openid,
                        phone:this.phone
                    },
                    callback:function(data){
                          if(data.code == 0){
                            common().hint.hint("发送短信成功");
                            self.setTimeout();
                          }else{
                            common().hint.hint(data.msg);
                          }
                    }
             }
             common().ajax.postAjax(options);
},
setTimeout:function(){
        if (this.countdown == 0) {
            this.yzmIs=true;
            this.yzm="重新发送";
            this.countdown = 60;
        } else {
            this.yzmIs=false;
            this.yzm=this.countdown+"s";
            this.countdown--;
        }
        var self = this;
        setTimeout(function() {
            if(!self.yzmIs)
                self.setTimeout()
        },1000)
    },
 }
}

</script>
