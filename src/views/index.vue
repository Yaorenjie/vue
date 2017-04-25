<template>
  <div class="index">
      <div id="main">
        <div>
          <img src="../assets/banner/banner1.jpg" />
        </div>
        <div>
          <index_title>
            <h1 slot="header">BOOKKEEPING SERVICES</h1>
            <h1 class="after" slot="footer">
              <span class="span-after">记</span>
              <span class="span-after">账</span>
              <span class="span-after">服</span>
              <span>务</span>
            </h1>
          </index_title>
          <index_package :data="data">
            <img src="../assets/banner/banner2.jpg" slot="img"/>
          </index_package>
        </div>
        <div>
          <index_title>
            <h1 slot="header">COMPANY REGISTRY</h1>
            <h1 class="after" slot="footer">
              <span class="span-after">工</span>
              <span class="span-after">商</span>
              <span class="span-after">服</span>
              <span>务</span>
            </h1>
          </index_title>
          <index_package2 :data="data">
            <img src="../assets/banner/banner3.jpg" slot="img"/>
          </index_package2>
        </div>
        <div>
          <index_title>
            <h1 slot="header">SERVICE PROCESS</h1>
            <h1 class="after" slot="footer">
              <span class="span-after">服</span>
              <span class="span-after">务</span>
              <span class="span-after">流</span>
              <span>程</span>
            </h1>
          </index_title>
          <index_process></index_process>
        </div>
        <div class="banner4">
          <index_title class="title-pro">
            <h1 slot="header" class="title-white">PROFESSIONAL QUALITY</h1>
            <h1 class="after title-white" slot="footer">
              <span class="span-after">专</span>
              <span class="span-after">业</span>
              <span class="span-after">品</span>
              <span>质</span>
            </h1>
          </index_title>
          <index_profess></index_profess>
        </div>
        <div class="safety">
          <index_title>
            <h1 slot="header">SAFETY GUARANTEE</h1>
            <h1 class="after" slot="footer">
              <span class="span-after">安</span>
              <span class="span-after">全</span>
              <span class="span-after">保</span>
              <span>障</span>
            </h1>
          </index_title>
          <p>放心使用服务，数据安全有保障；</p>
          <p>平台提供服务的价格公开透明，保障服务无差价，明</p>
          <p>码标价拒绝其他隐形收费；</p>
          <p>售后问题100%解决，确保客户满意度！</p>
        </div>


      </div>
    <div class="consult" @click="tcProblem(true)">
      <img src="../assets/icon/icon_consult.png" />
    </div>
    <kl_footer :active="1"></kl_footer>
    <transition name="bounce">
      <index_problem v-if="tcIf"  v-on:ee="incrementTotal"></index_problem>
    </transition>
    <hint_mask></hint_mask>
    <loading></loading>
  </div>
</template>

<script>
import vue from 'vue'
import index_title from '../components/index_title.vue'
import index_package from '../components/index_package.vue'
import index_package2 from '../components/index_package2.vue'
import index_process from '../components/index_process.vue'
import index_profess from '../components/index_profess.vue'
import kl_footer from '../single/kl_footer.vue'
import index_problem from '../components/index_problem.vue'
import hint_mask from '../mask/hint_mask.vue'
import loading from '../mask/loading.vue'

import common from '../js/common.js'
export default {
  name: 'index',
  data () {
    return {
      banner1:"./src/assets/banner1.jpg",
      tcIf:false,
      tc:"",
      data:{}
    }
  },
    created: function () {
document.title= "首页";

  },
   mounted: function () {
 this.getInfo();
 },
 methods:{
  tcProblem:function(bool){
        $("#main").css("overflow","hidden");
      this.tcIf = bool;
  },
   incrementTotal: function (b) {
            $("#main").css("overflow","auto");
              this.tcIf  = b;
            },
     getInfo:function(){
            var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=findServicePackages",
                    data:{
                      openid:vue.openid
                    },
                    callback:function(data){
                          if(data.code==0){
                             self.data=data.data;
                          }else{
                            common().hint.hint(data.msg);
                          }

                    }
             }
             common().ajax.postAjax(options);
        }
 },

 watch:{
    tc:function(){

    }

 },
  components:{
            index_title,
            index_package,
            index_package2,
            index_process,
            index_profess,
            kl_footer,
            index_problem,
            hint_mask,
            loading
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
 position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    overflow:hidden;
}
  .index img{
    width:100%;
  }
  .index>div:nth-child(1){
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .banner4{
    background:url('../assets/banner/banner4.jpg') repeat;
    background-size:cover;
  }
  .safety p{
    font-size:12px;
    color:#999;
    padding-bottom:5px;
    text-align:center;
  }
  .safety{
    padding-bottom:60px;
  }
  .consult{
    position:absolute;
    bottom:100px;
    right:10px;
    width:22px;
    height:22px;
    padding:11px;
    background:#000;
    border-radius:50%;
    box-shadow: 0px 3px 3px rgba(0,0,0,.2);
transition: all .6s;
/* Firefox 4 */
-moz-transition:all .6s;
/* Safari and Chrome */
-webkit-transition:all .6s;
/* Opera */
-o-transition:all .6s;

  }
  .consult{
     animation: shake .4s;
    -o-animation: shake .4s;
    -webkit-animation: shake .4s;
    -moz-animation: shake .4s;
  }
  @keyframes shake {
    0%, 100% {
        -webkit-transform: translateX(0);
    }

    50% {
        -webkit-transform: translateX(-3px);
    }
    25%,
    75% {
        -webkit-transform: translateX(3px);
    }
}
@-o-keyframes shake {
    /* Opera */
    0%, 100% {
        -webkit-transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: translateX(-3px);
    }
    20%,
    40%,
    60%,
    80% {
        -webkit-transform: translateX(3px);
    }
}
@-webkit-keyframes shake {
    /* Safari 和 Chrome */
    0%, 100% {
        -webkit-transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: translateX(-3px);
    }
    20%,
    40%,
    60%,
    80% {
        -webkit-transform: translateX(3px);
    }
}
@-moz-keyframes shake {
    /* Firefox */
    0%, 100% {
        -moz-transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
        -moz-transform: translateX(-3px);
    }
    20%,
    40%,
    60%,
    80% {
        -moz-transform: translateX(3px);
    }
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes bounce-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}
</style>
