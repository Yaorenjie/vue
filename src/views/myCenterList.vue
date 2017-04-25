<template>
  <div class="index">
    <div>
      <centerTou :img="zcIf">
        <img v-if="zcIf && !zaIf" slot="img" src="../assets/icon/head.png" />
        <img  v-if="!zcIf" slot="img" v-bind:src="data.avatar" />
        <img  v-if="zaIf" slot="img" v-bind:src="data.avatar" />
        <p v-if="!zcIf" slot="name">{{data.name}}</p>
        <p  v-if="zaIf" slot="name">{{data.nickName}}</p>
      </centerTou>
      <div class="info">
        <div class="clearFix">
          <p @click="url">订单管理</p>
          <img class="fr" slot="img" src="../assets/icon/icon_arrow2.png" />
        </div>
        <div class="clearFix" v-if="(orderState.notPayOrder !=0) && (!zcIf)" @click="url">
          <p>您有未支付的订单</p>
        </div>
        <div class="clearFix" v-if="zcIf">
          <p>您未下过订单</p>
        </div>
      </div>
    </div>

    <kl_footer :active="3"></kl_footer>
    <loading></loading>
    <hint_mask></hint_mask>
  </div>
</template>

<script>
import kl_footer from '../single/kl_footer.vue'
import centerTou from '../pack/centerTou.vue'
import hint_mask from '../mask/hint_mask.vue'
import loading from '../mask/loading.vue'
import vue from 'vue'
import common from '../js/common.js'
export default {
  name: 'index',
  data () {
    return {
        zcIf:true,
        zaIf:false,
        data:{},
        orderState:{}
    }
  },
          created: function () {
document.title= "个人中心";
  },
 mounted: function () {
  this.getInfo();
  },
 methods:{
  url:function(){
  if(!this.zcIf)
        this.$router.push({ path: 'orderManage' })
    },
getInfo:function(){
var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getUserInfoByOpenId",
                    data:{
                        openid:vue.openid
                    },
                    callback:function(data){
                          if(data.code == 0){
                             self.data = data.data;
                             self.zcIf = false;
                              self.getOrderState();
                          }else if(data.code == 10024){
                             self.zcIf = true;
                             self.getUserInfo();
                          }else{
                           self.zcIf = true;
                            common().hint.hint(data.msg);
                          }
                    }
             }
             common().ajax.postAjax(options);
    },
    getUserInfo:function(){
    var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getWxUserInfo",
                    data:{
                        openid:vue.openid
                    },
                    callback:function(data){
                          if(data.code == 0){
                             self.data = data.data;
                             self.zaIf = true;
                             self.getOrderState();
                          }else{
                           self.zaIf = false;
                            common().hint.hint(data.msg);
                          }
                    }
             }
             common().ajax.postAjax(options);
    },
    getOrderState:function(){
       var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getOrderState",
                    data:{
                        openid:vue.openid
                    },
                    callback:function(data){
                          if(data.code == 0){
                             self.orderState = data.data;
                          }else{
                            common().hint.hint(data.msg);
                          }
                    }
             }
             common().ajax.postAjax(options);
    }
 },
  components:{
           kl_footer,
           centerTou,
            hint_mask,
            loading
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index>div:nth-child(1){
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:#f8f8f8;
  overflow: auto;
  margin-bottom:50px;
}
.index .info{
  background:#fff;
  border-bottom:1px solid #dadada;
  padding-left:10px;
}
.index .info .clearFix{
  padding:12px 0;
  border-bottom:1px solid #e6e6e6;
}
.index .info p{
  font-size:12px;
  color:#999;
}
.index .info .clearFix:nth-last-child(1){
  padding:10px 0;
  border-bottom:0;
}
.index .info .clearFix:nth-child(1) p{
  font-size:13px;
  color:#333;
}
.index .info .clearFix:nth-child(1) img{
  width:7px;
  padding-right:10px;
  margin-top:-14px;
}

</style>
