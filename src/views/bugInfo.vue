<template>
  <div class="index">
    <div>
      <infoDiv>
        <h5 slot="title">订单详情</h5>
        <div_input slot="content">
          <p slot="title">服务类别：<span>{{data.orderInfo.type == 1?"工商注册服务":"代理记账服务"}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title">选择套餐：<span>{{data.orderInfo.title}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title">赠送：<span>{{data.orderInfo.giveService =="" ? "无":data.orderInfo.giveService}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title">增值服务项目：
            <span v-if="data.orderInfo.addedService.length == 0">无</span>
            <span v-if="data.orderInfo.addedService.length != 0" v-for="el in data.orderInfo.addedService">{{el.content}}<br/></span>
          </p>
        </div_input>
        <div_input slot="content">
          <p slot="title">服务价格：
            <span  v-if="data.orderInfo.type != 1">￥{{data.orderInfo.servicePrice}}元 / 月</span>
            <span  v-if="data.orderInfo.type == 1">￥{{data.orderInfo.servicePrice}}元</span>
          </p>
        </div_input>
        <div_input slot="content">
          <p slot="title">服务数：
            <span  v-if="data.orderInfo.type != 1">{{data.orderInfo.serviceCount}}个月</span>
            <span  v-if="data.orderInfo.type == 1">{{data.orderInfo.serviceCount}}</span>
          </p>
        </div_input>
        <div_input slot="content">
          <p slot="title">总价：<span>￥{{data.orderInfo.countPrice}}元</span></p>
        </div_input>
      </infoDiv>
      <infoDiv>
        <h5 slot="title">用户信息</h5>
        <div_input slot="content">
          <p slot="title">客户姓名：<span>{{data.userInfo.name}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title">联系电话：<span>{{data.userInfo.phone}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title">服务区域：<span>{{data.userInfo.province}}{{data.userInfo.city}}{{data.userInfo.county}}</span></p>
        </div_input>
      </infoDiv>
    </div>
    <bugInfo_footer :orderId="data.orderInfo.id" :countPrice="data.orderInfo.countPrice"></bugInfo_footer>
    <loading></loading>
    <hint_mask></hint_mask>
  </div>
</template>

<script>
import div_input from '../single/div_input.vue'
import infoDiv from '../pack/infoDiv.vue'
import invoiceDiv from '../pack/invoiceDiv.vue'
import btn_h from '../single/btn_h.vue'
import discountInfo from '../pack/discountInfo.vue'
import bug_discount from '../components/bug_discount.vue'
import bug_mask from '../mask/bug_mask.vue'
import bugInfo_footer from '../components/bugInfo_footer.vue'
import hint_mask from '../mask/hint_mask.vue'
import loading from '../mask/loading.vue'

import common from '../js/common.js'
import vue from 'vue'
export default {
  name: 'index',
  data () {
    return {
        data:{}
    }
  },
          created: function () {
document.title= "购买服务";
  },
mounted: function () {
    this.orderId = this.$route.query.orderId;
    this.getInfo();
  },
 methods:{
    getInfo:function(){
     var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getOrderById",
                    data:{
                      orderId:this.orderId,
                      openid:vue.openid
                    },
                    callback:function(data){
                          if(data.code == 0){
                            self.data = data.data;
                             console.log( self.data)
                          }else{
                            common().hint.hint(data.msg);
                          }
                    }
             }
             common().ajax.postAjax(options);


    }

},
  components:{
           div_input,
           infoDiv,
           invoiceDiv,
           btn_h,
           discountInfo,
           bug_discount,
           bug_mask,
           bugInfo_footer,
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
  padding-bottom:46px;
}
.fl10{
  color:#999;
}
.fl10 img{
  width:6px;
  margin-right:10px;
}
.discountInfo{
padding:0 10px;
}

</style>
