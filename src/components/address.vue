<template>
  <div class="address">
    <div>
      <div>
        <select v-model="s_province" @change="provinceBtn('510000')">
          <option value="510000,四川省">四川省</option>
        </select>  
        <select v-model="s_city" >
          <option value="510100,成都市">成都市</option>
        </select>  
        <select v-model="s_county">
          <option v-bind:value="el.code+','+el.name" v-for="el in county">{{el.name}}</option>
        </select>
      </div>
      <div class="clearFix">
        <div class="btn fr">
          <p @click="qdBtn()">确定</p>
        </div>
        <div class="btn fr">
          <p @click="qxBtn()">取消</p>
        </div>
      </div>

    </div>


  </div>
</template>

<script>

import vue from 'vue'
import common from '../js/common.js'
export default {
  name: 'index',
  data () {
    return {
    s_province:"510000,四川省",
    s_city:"510100,成都市",
    s_county:"510104,锦江区",
    province:[],
    city:[],
    county:[],
    id:"",
    address:{
    }
    }
  },
  mounted:function(){
      this.id = this.$route.query.id;
     this.getInfo(0);
     this.cityBtn(510100);
  },
   methods:{
    qxBtn:function(){
        this.address.adrIf = false;
        this.address.addIf = false;
        this.$emit('addressBtn',this.address);
    },
    qdBtn:function(){

    this.address.c_province = this.s_province.split(',')[1];
    this.address.s_province = this.s_province.split(',')[0];
    this.address.c_city = this.s_city.split(',')[1];
    this.address.s_city = this.s_city.split(',')[0];
    this.address.c_county = this.s_county.split(',')[1];
    this.address.s_county = this.s_county.split(',')[0];
    this.address.adrIf = false;
    this.address.addIf = true;
        this.$emit('addressBtn',this.address)
    },
    getInfo:function(code){
       var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getRegions",
                    data:{
                      code:code,
                      openid:vue.openid
                    },
                    callback:function(data){
                          self.province=data.data;
                    }
             }
             common().ajax.postAjax(options);
    },
    provinceBtn:function(code){
       var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getRegions",
                    data:{
                      code:code,
                      openid:vue.openid
                    },
                    callback:function(data){
                          self.city=data.data;
                    }
             }
             common().ajax.postAjax(options);

    },
    cityBtn:function(code){
    common().load.display();
      var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getRegions",
                    data:{
                      code:code,
                      openid:vue.openid
                    },
                    callback:function(data){
                         common().load.none();
                          if(data.code == 0){

                          self.county=data.data;
                           self.s_county = data.data[0].code+','+data.data[0].name;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.address{
  position: fixed;
 top:0;
 left:0;
 right:0;
 bottom:0;
 background: rgba(0,0,0,.5);
 z-index:10002;

}

  .address>div{
    position: fixed;
 top:30px;
 left:10px;
 right:10px;
     background:#f8f8f8;
  }
 .address>div>div{

  margin:10px auto;
    width:90%;

  }
  .btn{
  text-align:center;
    width:80px;
        border:1px solid #e6e6e6;
        height:25px;
        margin-left:10px;
  }
  .btn p{
  font-size:12px;
  line-height:26px;
  }
  .btn:nth-child(1){
        border:1px solid #ebca34;
  color:#333;
  background:#ebca34;
  }
  select{
  margin:10px 0;
    width:100%;
    padding:5px;
    border:1px solid #e6e6e6;
    font-size:14px;
  }

</style>
