<template>
  <div class="buy_footer ">
    <div class="clearFix">
      <p class="fr">30分钟内未支付将自动取消</p>
    </div>
    <btn_all_h>
      <p slot="content" @click="buy()">立即支付</p>
    </btn_all_h>
    <p><a @click="qxBtn()">取消订单</a></p>
  </div>
</template>
<style scoped>
.buy_footer{

}
.buy_footer .clearFix>p{
   font-size:10px;
   color:#999;
   margin-right:10px;
   margin-bottom:12px;
}
.buy_footer>p{
font-size:12px;
color:#666;
  text-align:center;
  padding:12px 0;
}
.buy_footer a{
 text-decoration:underline;
}
</style>
<script>

import btn_all_h from '../single/btn_all_h.vue'
import vue from 'vue'
import common from '../js/common.js'
export default {
  name: 'index',
 props:["id"],
  data () {
    return {
        data:{}
    }
  },
 methods:{
    qxBtn:function(){
     var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=cancelOrder",
                    data:{
                      orderId:self.id,
                      openid:vue.openid,
                    },
                    callback:function(data){
                    if(data.code==0){
                    common().hint.hint("取消成功");
                                    self.$router.push({ path: 'orderManage' })
                    }else{
                             common().hint.hint(data.msg);
                    }

                    }
             }
             common().ajax.postAjax(options);

    },
      buy:function(){
      this.getWxPayInfo();

},
WeixinJSBridgeL:function(data,self){
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
           }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
       }
   );
},
getWxPayInfo:function(){
 var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getWxPayInfo",
                    data:{
                    openid:vue.openid,
                    orderId:this.id
                    },
                    callback:function(data){
                          if(data.code == 0){
                            self.data = data.data;
                            self.WeixinJSBridgeL(data.data,self);
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
                    orderId:self.id
                    },
                    callback:function(data){
                          if(data.code == 0){
                            if(state == 1){
                             self.$router.push({ path: 'jurisdiction', query: {orderId:self.id}  })
                            } else{
                             self.$router.push({ path: 'orderInfo',query: {id:self.id}})
                            }
                          }else{
                            common().hint.hint(data.msg);
                          }
                    }
             }
             common().ajax.postAjax(options);
}



 },
  components:{
           btn_all_h
        }
}
</script>
