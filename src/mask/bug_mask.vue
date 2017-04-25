<template>
    <div class="mask">
      <div class="bug_mask">
        <div class="clearFix">
          <img @click="close()" class="fr" src="../assets/icon/icon_close.png" />
        </div>
        <h2>请输入验证码</h2>
        <p v-if="yzmIf" class="yzm">请输入正确的验证码</p>
        <p>已发送至:{{phone}}</p>
        <btn_b :phone="phone"></btn_b>
        <div class="clearFix">
          <div class="fl active"> <input type="number" oninput="if(value.length>1)value=value.slice(0,1)" v-model="text1" /></div>
          <div class="fl"> <input type="number"  oninput="if(value.length>1)value=value.slice(0,1)" v-model="text2" /></div>
          <div class="fl"> <input type="number"  oninput="if(value.length>1)value=value.slice(0,1)" v-model="text3" /></div>
          <div class="fl"> <input type="number"  oninput="if(value.length>1)value=value.slice(0,1)" v-model="text4" /></div>
        </div>
      </div>
    </div>
</template>
<style scoped>
.bug_mask{
position:absolute;
  top:42px;
  left:50%;
  right:0;
  width:248px;
  margin-left:-124px;
  background:#fff;
  overflow:auto;
  }
  .clearFix{
    padding:15px;
  }
  .clearFix:nth-child(1){
    padding:15px 15px 0 0;
  }
  .clearFix>img{
    width:15px;
  }
  h2{
    text-align:center;
    font-size:16px;
    color:#333;
    padding:5px 0 14px 0;
  }
  p{
   text-align:center;
    font-size:12px;
    color:#999;
    padding:12px 0;
  }
  .clearFix .fl{
    border:1px solid #dadada;
    width:45px;
    height:45px;
    margin-left:10px;
  }
  .yzm{
  position:fixed;
  text-align:center;
  color:#e02e3a;
  font-size:10px;
  top:101px;
  left:0;
  right:0;
      padding: 0;
  }
.clearFix .active{
  border:1px solid #ebca34;
}
    .clearFix .fl:nth-child(1){
    margin-left:0;
    }
    .clearFix .fl input{
    width:23px;
    height:100%;
    font-size:40px;
    margin-left:11px;
    }
</style>
<script>
import btn_b from '../single/btn_b.vue'
import vue from 'vue'
import common from '../js/common.js'
export default {
  name: 'index',
     props:["orderId","data","phone"],
  data () {
    return {
      yzmIf:false,
      text1:"",
      text2:"",
      text3:"",
      text4:"",
    }
  },
mounted: function () {
    $(".mask input")[0].focus();
    $(".mask input").focus(function(){
      $(this).parent().addClass("active");
      $(this).parent().siblings().removeClass("active")
     });
$(".mask input").bind("input propertychange", function() {
if(0 != $(this).parent().next().length ){
  if($(this).val()!=""){
  $(this).parent().next().find("input")[0].focus();
  }
}
});
    },

 watch:{
    text4:function(){
      if(this.text4 != ""){
            this.buy();
      }
    }
 },

 methods:{
close:function(){
  this.$emit('changeMask',false);
},
buy:function(){
  this.checkSsmCode();
},
createOrder:function(){
       var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=createOrder",
                    data:this.data,
                    callback:function(data){
                       common().load.none();
                      if(data.code==0){
                             self.$router.push({ path: 'bugInfo', query: { orderId:data.data.orderInfo.id}  })
                      }else{
                          common().hint.hint(data.msg);
                      }
                    }
             }
    common().ajax.postAjax(options);
},
checkSsmCode:function(){
common().load.display();
 var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=checkSsmCode",
                    data:{
                      phone:self.phone,
                      openid:vue.openid,
                       code:self.text1+self.text2+self.text3+self.text4
                    },
                    callback:function(data){
                       if(data.code==0){
                         self.$emit('changeMask',false);
                          self.wxRegistUser();
                       }else{
                       common().load.none();
                       self.text1 = "";
                       self.text2 = "";
                       self.text3 = "";
                          self.text4 = "";
                          $(".bug_mask").find("input")[0].focus();
                          common().hint.hint(data.msg);
                       }
                    }
             }
             common().ajax.postAjax(options);
},
bindWxUser:function(userId){
 var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=bindWxUser",
                    data:{
                      openid:vue.openid,
                      userId:userId,
                      phone:this.phone
                    },
                    callback:function(data){
                       if(data.code==0){
                          self.createOrder();
                       }else{
                                              common().load.none();
                          common().hint.hint(data.msg);
                       }
                    }
             }
             common().ajax.postAjax(options);
},
wxRegistUser:function(){
 var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=wxRegistUser",
                    data:this.data,
                    callback:function(data){
                       if(data.code==0){
                           self.bindWxUser(data.data.id);
                       }else if(data.code == 10020){
                          self.bindWxUser("");
                       }else{
                                              common().load.none();
                          common().hint.hint(data.msg);
                       }

                    }
             }
             common().ajax.postAjax(options);
}

 },
  components:{
          btn_b
        }
}
</script>
