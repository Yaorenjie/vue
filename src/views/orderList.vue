<template>
  <div class="index">
    <order_list v-for="el in data" :id="el.id">
      <p_font_lr slot="content">
            <p slot="fl" class="fl" >{{el.type==1?'工商注册服务':'代理记账服务'}}</p>
            <p slot="fr" class="fr">{{el.time | date }}</p>
      </p_font_lr>
      <p_font_lr slot="content">
        <p slot="fl" class="fl"><span>￥{{el.price}}</span> 元</p>
        <p slot="fr" class="fr" v-if="el.state == 0">无效</p>
        <p slot="fr" class="fr" v-if="el.state == 1">未支付</p>
        <p slot="fr" class="fr"  v-if="el.state == 2">已支付</p>
        <p slot="fr" class="fr"   v-if="el.state == 3">已取消</p>
        <p slot="fr" class="fr"  v-if="el.state == 4">已过期</p>
        <p slot="fr" class="fr"  v-if="el.state == 5">支付中</p>

      </p_font_lr>
    </order_list>
  </div>
</template>

<script>
import order_list from '../components/order_list.vue'
import p_font_lr from '../single/p_font_lr.vue'
import loading from '../mask/loading.vue'
import vue from 'vue'
import common from '../js/common.js'
export default {
  name: 'index',
  data () {
    return {
        data:[]
    }
  },
      created: function () {
document.title= "订单管理";
  },
     mounted: function () {
 // `this` 指向 vm 实例
 this.getList();

 },
 methods:{
    url:function(id){
       this.$router.push({ path: 'orderInfo',query: {id:id}})
    },
    getList:function(){
     var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=findOrders",
                    data:{
                    openid:vue.openid
                    },
                    callback:function(data){
                    if(data.code ==0){
                       if(data.data.length == 0){
                          common().hint.hint("您没有订单");
                          self.$router.push({ path: 'orderNull' })
                       }else{
                           self.data=data.data;
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
           order_list,
           p_font_lr,
           loading
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:#f8f8f8;
  overflow: auto;
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
