<template>
  <div class="index">
    <div>
      <infoDiv>
        <h5 slot="title">基本信息</h5>
        <div_input slot="content">
          <p slot="title"  v-if="!zcIf">您的姓名<span>{{data.name}}</span></p>
          <input v-if="zcIf" slot="input" v-model="data.name" placeholder="填写您的姓名" />
        </div_input>
        <div_input slot="content">
          <p slot="title"  v-if="!zcIf">联系电话<span>{{data.phone}}</span></p>
          <input v-if="zcIf" type="number" slot="input"   v-model="data.phone" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="填写联系电话" />
        </div_input>
        <div_input slot="content">
          <p slot="title"  @click="dyBtn()">区域选择
            <span v-if="zcIf && (this.address.s_province ==undefined)">请选择</span>
            <span v-if="!zcIf && (this.address.s_province ==undefined)">{{address.c_province}}{{address.c_city}}{{address.c_county}}</span>
            <span v-if="this.address.s_province !=undefined">{{address.c_province}}{{address.c_city}}{{address.c_county}}</span>
          </p>
         <img class="fr" slot="img" src="../assets/icon/icon_arrow2.png" @click="dyBtn()" />
        </div_input>
      </infoDiv>

      <bug_discount v-if="type!=1">
        <discountInfo  slot="info"  :class="{'fl':index%2 == 0,'fr':index%2  == 1}"  :discount.sync="discount" v-on:changeDis="changeDiscount"  :discountId.sync="el.id" v-for="(el,index) in giveServices">
          <h2 slot="title1">{{el.name}}</h2>
          <p slot="title2">{{el.remark}}</p>
        </discountInfo>
      </bug_discount>
      <infoDiv>
        <h5 slot="title">增值服务项目</h5>
        <invoiceDiv  v-if="(el.type == 1) && (el.serviceId == id)"  v-on:ee="changeInvoice"  :invoiceId.sync="el.id" slot="content" v-for="el in invoiceList" >
          <p class="aaaaa" slot="content"  >{{el.name}} {{el.price}}元 {{el.remark == '' ? "":"("+el.remark+")"}}</p>
        </invoiceDiv>
        <invoiceDiv  v-if="(el.type == 2) && (el.serviceId == discount) "  v-on:ee="changeInvoice"  :invoiceId.sync="el.id" slot="content" v-for="el in invoiceList" >
          <p class="aaaaa" slot="content"  >{{el.name}} {{el.price}}元 {{el.remark == '' ? "":"("+el.remark+")"}}</p>
        </invoiceDiv>
      </infoDiv>
    </div>
    <btn_h>
      <p @click="maskBtn" slot="content" class="tc">下一步</p>
    </btn_h>
    <address_div  v-if="adrIf" v-on:addressBtn="addressBtn"></address_div >
    <bug_mask :phone="data.phone" v-if="maskIf" :data="data" v-on:changeMask="changeMaskIf" :orderId="orderId"></bug_mask>
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
import address_div from '../components/address.vue'
import hint_mask from '../mask/hint_mask.vue'
import loading from '../mask/loading.vue'
import vue from 'vue'

import common from '../js/common.js'
export default {
  name: 'index',
  data () {
    return {
      maskIf:false,
      invoiceIf:false,
      invoiceList:[],
      invoice:[],
      giveServices:[],
      discountId:"0",
      discount:"-1",
      id:"",
      data:{
      openid:"",
      province:"",
      city:"",
      county:"",
      name:"",
      phone:"",
      addedServiceIds:"",
      giveServiceId:"",
      serviceId:""
      },
      address:{

      },
      orderId:"",
      zcIf:false,
      adrIf:false,
      type:""

    }
  },
        created: function () {
document.title= "购买服务";
  },
    mounted: function () {
    this.id = this.$route.query.id;
    this.type = this.$route.query.type;
  this.data.openid = vue.openid;
  this.data.serviceId = this.$route.query.id;
  this.getUserInfoByOpenId();
  },
 methods:{
    addressBtn:function(e){
     this.adrIf = e.adrIf;
    if(e.addIf){
     this.address = e;
      this.data.province = e.s_province;
      this.data.city = e.s_city;
      this.data.county = e.s_county;
    }
    },
    changeInvoice:function(e,b){
    if(b){
        this.invoice.push(e);
    }
    else{
    for(var i=0; i<this.invoice.length; i++) {
    if(this.invoice[i] == e) {
      this.invoice.splice(i, 1);
      break;
    }
  }
    }
    },
    changeMaskIf:function(e){
      this.maskIf  = e;
    },
    changeDiscount:function(e){
      this.invoice=[];
      this.discount  = e;
    },
    maskBtn:function(){
      if(this.data.province == "" || this.data.city == "" || this.data.county == ""){
          common().hint.hint("请选择区域");
      }else if(this.data.name == ""){
       common().hint.hint("请填写姓名");
      }else if(this.data.phone == ""){
         common().hint.hint("请填写电话");
      }else if(this.data.phone.length != 11){
        common().hint.hint("手机号输入错误");
      }else{
      this.data.giveServiceId = this.discount;


      if($(".aaaaa").length != 0){
            for(var i=0;i<this.invoice.length;i++){
         if(i==(this.invoice.length-1))
            this.data.addedServiceIds += this.invoice[i]
         else
          this.data.addedServiceIds += this.invoice[i]+","
      }
      }
      if(this.zcIf){
            this.sendSsmCode();
          this.maskIf = true;
      }else{
        this.createOrder();
      }
      }
    },
    dyBtn:function(){
        this.adrIf = true;
    },
    getAddedServices:function(){
     var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getServiceContent",
                    data:{
                      openid:vue.openid,
                      serviceId:this.id
                    },
                    callback:function(data){
                          if(data.code == 0){
                            self.invoiceList=data.data.addServices;
                            self.giveServices = data.data.giveServices;
                            self.discount = data.data.giveServices[0].id

                          }else{
                            common().hint.hint(data.msg);
                          }

                    }
             }
             common().ajax.postAjax(options);
    },
    getUserInfoByOpenId:function(){
      var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getUserInfoByOpenId",
                    data:{
                        openid:vue.openid
                    },
                    callback:function(data){
                        self.getAddedServices();
                          if(data.code == 0){
                             self.data.name = data.data.name;
                             self.data.phone = data.data.phone;
                             self.data.province = data.data.province;
                            self.data.city = data.data.city;
                            self.data.county = data.data.county;
                             self.address.c_province = data.data.provinceStr;
                            self.address.c_city = data.data.cityStr;
                            self.address.c_county = data.data.countyStr;
                             self.zcIf = false;
                          }else if(data.code == 10024){
                             self.zcIf = true;
                          }else{
                            common().hint.hint(data.msg);
                          }
                    }
             }
             common().ajax.postAjax(options);
    },
getRegions:function(){
     var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getRegions",
                    data:{
                        openid:vue.openid
                    },
                    callback:function(data){
                          if(data.code == 0){
                             self.data.name = data.data.name;
                             self.data.phone = data.data.phone;

                          }else{
                            common().hint.hint(data.msg);
                          }
                    }
             }
             common().ajax.postAjax(options);

},
sendSsmCode:function(){
  var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=sendSsmCode",
                    data:{
                        openid:vue.openid,
                        phone:this.data.phone
                    },
                    callback:function(data){
                          if(data.code == 0){
                            common().hint.hint("发送短信成功");
                          }else{
                            common().hint.hint(data.msg);
                          }
                    }
             }
             common().ajax.postAjax(options);
},
    createOrder:function(){
                        common().load.display();
            var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=createOrder",
                    data:this.data,
                    callback:function(data){
                    if(data.code == 0){
                                        common().load.none();
                                           vue.order = data.data;
                      self.$router.push({ path: 'bugInfo', query: { orderId:data.data.orderInfo.id}  })
                    }else{
                      common().hint.hint(data.msg);
                    }

                    }
             }
             common().ajax.postAjax(options);

},

 },
watch:{
    invoice:function(){

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
           address_div,
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
  padding-bottom:36px;
}
.fl10{
  color:#999;
    margin-left:10px;
}

.discountInfo{
padding:0 10px;
}

</style>
