<template>
  <div class="bug_info_btn clearFix">
    <div class="fl clearFix">
      <p class="fr">订单总价：<span>￥{{countPrice}}</span></p>
    </div>
    <p class="tc fl" @click="buy()">立即购买</p>
  </div>
</template>
<style scoped>
  .bug_info_btn{
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:46px;
  font-size:16px;
  color:#333;
  background:#ebca34;
  }
 .bug_info_btn .clearFix{
      width:55%;
      background:#fff;
  }
   .bug_info_btn .clearFix p{
      margin-right:15px;
         line-height:43px;
               font-size:12px;
  }
   .bug_info_btn .clearFix span{
      font-size:16px;
      font-weight:600;

   }
    .bug_info_btn>p{
    width:45%;
   line-height:43px;
        font-weight:600;
         border-top:1px solid #ebca34;;
   }
   .bug_info_btn .fl{
    border-top:1px solid #e6e6e6;
   }
</style>
<script>
import common from '../js/common.js'
import vue from 'vue'
export default {
  name: 'index',
       props:["countPrice","orderId"],
  data () {
    return {
      data:{}
    }
  },
 methods:{
  buy:function(){
  this.getWxPayInfo();

},

WeixinJSBridge:function(data,self){
if (typeof WeixinJSBridge == "undefined"){
   if( document.addEventListener ){
       document.addEventListener('WeixinJSBridgeReady', self.onBridgeReady(data,self), false);
   }else if (document.attachEvent){
       document.attachEvent('WeixinJSBridgeReady', self.onBridgeReady(data,self));
       document.attachEvent('onWeixinJSBridgeReady', self.onBridgeReady(data,self));
   }
}else{
   self.onBridgeReady(data,self);
}

},
onBridgeReady:function(data,self){
WeixinJSBridge.invoke(
       'getBrandWCPayRequest', {
       "appId":data.appId,
       "timeStamp":data.timeStamp,
        "nonceStr":data.nonceStr,
       "package":data.package,
        "signType":data.signType,
       "paySign":data.sign
       },
       function(res){
           if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                 self.syncCheckPay(self,1);
           }else{
                 self.syncCheckPay(self,0);
           }       // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
       }
   );
},
getWxPayInfo:function(){
 var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getWxPayInfo",
                    data:{
                    openid:vue.openid,
                    orderId:this.orderId
                    },
                    callback:function(data){
                          if(data.code == 0){
                            self.data = data.data;
                            self.WeixinJSBridge(data.data,self);
                          }else{
                            common().hint.hint(data.msg);
                          }
                    }
             }
             common().ajax.postAjax(options);

},
syncCheckPay:function(self,state){
             var options = {
                    url:common().http+"apiVersion=1&method=syncCheckPay",
                    data:{
                    payType:"2",
                    state:state,
                    orderId:self.orderId
                    },
                    callback:function(data){
                          if(data.code == 0 ){
                             if(state == 1){
                             self.$router.push({ path: 'jurisdiction', query: {orderId:self.orderId}  })
                            } else{
                             self.$router.push({ path: 'orderInfo',query: {id:self.orderId}})
                            }
                          }else{
                            common().hint.hint(data.msg);
                          }
                    }
             }
             common().ajax.postAjax(options);

}
 }
}
</script>
