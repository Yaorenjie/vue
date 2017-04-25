<template>
  <div class="index">
    <div>
      <centerTou :img="true">
        <img slot="img" v-if="data.avatar ==''" src="../assets/icon/head.png" />
        <img slot="img" v-if="data.avatar !=''" v-bind:src="data.avatar" />
        <p slot="name">{{data.name}}</p>
      </centerTou>
      <infoDiv>
        <h5 slot="title">个人信息</h5>
        <div_input slot="content">
          <p slot="title">昵称：<span>{{data.nickName}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title"  v-if="!bjIf">姓名：<span>{{data.name}}</span></p>
          <input v-if="bjIf" type="text" slot="input"   v-model="newData.newName"  placeholder="填写您的姓名" />

        </div_input>
        <div_input slot="content">
          <p slot="title">性别：<span>{{data.sex == 1?'男':'女'}}</span></p>
        </div_input>
      </infoDiv>
      <infoDiv>
        <h5 slot="title">联系方式</h5>
        <div_input slot="content">
          <p slot="title">手机号：<span>{{data.phone}}</span></p>
        </div_input>
        <div_input slot="content">
          <p slot="title"  v-if="!bjIf">电子邮箱：<span>{{data.email}}</span></p>
          <input v-if="bjIf" type="text" slot="input"   v-model="newData.email"  placeholder="填写电子邮箱" />
        </div_input>
      </infoDiv>
    </div>

    <btn_h v-if="bjIf">
      <p slot="content" @click="bcBtn()">保存</p>
    </btn_h>
    <btn_h v-if="!bjIf" >
      <p slot="content" @click="bjBtn()">编辑</p>
    </btn_h>
    <hint_mask></hint_mask>
    <loading></loading>
  </div>
</template>

<script>
import kl_footer from '../single/kl_footer.vue'
import infoDiv from '../pack/infoDiv.vue'
import centerTou from '../pack/centerTou.vue'
import div_input from '../single/div_input.vue'
import btn_h from '../single/btn_h.vue'
import hint_mask from '../mask/hint_mask.vue'
import loading from '../mask/loading.vue'
import vue from 'vue'

import common from '../js/common.js'
export default {
  name: 'index',
  data () {
    return {
       data:{},
       newData:{
       },
       bjIf:false
    }
  },
            created: function () {
document.title= "个人资料";
  },
     mounted: function () {
 this.getInfo();

 },
 methods:{
    getInfo:function(){
        var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getUserInfoByOpenId",
                    data:{
                      openid:vue.openid
                    },
                    callback:function(data){
                        if(data.code == 0){
                           self.data=data.data;
                        }else{
                          common().hint.hint(data.msg);
                        }
                    }
             }
             common().ajax.postAjax(options);
    },
    updateUserInfo:function(){
          common().load.display();
          var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=updateUserInfo",
                    data:{
                      openid:vue.openid,
                      email:this.newData.email,
                      name:this.newData.newName,
                      sex:this.data.sex,
                      id:this.data.id
                    },
                    callback:function(data){
                         common().load.none();
                        if(data.code==0){
                             self.bjIf = false;
                            self.data=data.data;
                            common().hint.hint("成功");
                            self.getInfo();
                        }else{
                         common().hint.hint(data.msg);
                        }
                    }
             }
             common().ajax.postAjax(options);
    },
    bjBtn:function(){
      this.newData.newName = this.data.name;
       this.newData.email = this.data.email;
      this.bjIf = true;

    },
    bcBtn:function(){

      this.updateUserInfo();
    }
 },
  components:{
           kl_footer,
           centerTou,
           infoDiv,
           div_input,
           btn_h,
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
  padding-bottom:43px;
}

</style>
