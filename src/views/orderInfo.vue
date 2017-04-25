<template>
  <div class="index">
    <div>
      <infoDiv>
        <h5 slot="title">订单详情</h5>
        <div_input slot="content">
          <p slot="title">服务类别：<span>{{data.serviceType == 1? '工商注册服务':'代理记账服务'}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title">选择套餐：<span>{{data.serviceName}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title">赠送：<span>{{data.giveServiceName == "" ? "无":data.giveServiceName}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title">增值服务项目：
            <span v-if="data.addServices.length == 0">无</span>
            <span v-if="data.addServices.length != 0" v-for="el in data.addServices">{{el.content}}<br/></span>
          </p>
        </div_input>
        <div_input slot="content">
          <p slot="title">总价：<span>￥{{data.price}}元</span></p>
        </div_input>
      </infoDiv>
      <infoDiv>
        <h5 slot="title">用户信息</h5>
        <div_input slot="content">
          <p slot="title">客户姓名：<span>{{data.name}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title">联系电话：<span>{{data.phone}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title">服务区域：<span>{{data.province}}{{data.city}}{{data.county}}</span></p>
        </div_input>
      </infoDiv>

      <infoDiv>
        <h5 slot="title">支付信息</h5>
        <div_input slot="content">
          <p slot="title">订单号：<span>{{data.orderNumber}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title">创建时间：<span>{{data.createTime | date}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title">支付状态：
            <span v-if="data.payState == 0">无效</span>
            <span v-if="data.payState == 1">未支付</span>
            <span v-if="data.payState == 2">已支付</span>
            <span v-if="data.payState == 3">已取消</span>
            <span v-if="data.payState == 4">已过期</span>
            <span v-if="data.payState == 5">支付中</span>
          </p>
        </div_input>
      </infoDiv>
  <buy_footer v-if="data.payState == 1" :id="id"></buy_footer>
    </div>
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
import buy_footer from '../single/buy_footer.vue'
import loading from '../mask/loading.vue'
import vue from 'vue'
import common from '../js/common.js'
export default {
  name: 'index',
  data () {
    return {
        id:"",
        data:{}
    }
  },
    created: function () {
document.title= "订单详情";
  },
       mounted: function () {
       this.id = this.$route.query.id;
 this.getInfo();

 },
 methods:{
 getInfo:function(){
     var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=orderInfo",
                    data:{
                    openid:vue.openid,
                    id:this.id
                    },
                    callback:function(data){
                    console.log(data.data)
                          self.data=data.data;
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
           buy_footer,
           loading
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  background:#f8f8f8;
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
