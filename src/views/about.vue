<template>
  <div class="index">
    <div>
      <div>
        <img src="../assets/banner/banner5.jpg" />
        <div class="single">
          <title_h>
            <p slot="content">关于一企</p>
          </title_h>
          <p>一企，是成都会（kuai）来信息技术有限公司旗下的一个专注企业服务升级的互联网品牌。</p>
        </div>

      </div>
      <div>
        <div class="single">
          <title_h>
            <p slot="content">我们能做些什么</p>
          </title_h>
          <p>我们专注于为初创企业提供工商注册、代理记账等企业服务，解决了公司从筹备期到运营期遇到的各种问题。公司将采用全数字化业务管理模式，能为创业者提供更加安全高效和省时省心的服务。</p>
          <div class="clearFix">
            <aboutDiv class="fl">
              <img slot="img" src="../assets/icon/icon_introduce1.png" />
              <h5 slot="font1">代理记账</h5>
              <p slot="font2">我们提供优质便捷的代理记账服务</p>
            </aboutDiv>
            <aboutDiv class="fl">
              <img slot="img" src="../assets/icon/icon_introduce2.png" />
              <h5 slot="font1">工商注册</h5>
              <p slot="font2">创业开公司，一站式工商注册服务</p>
            </aboutDiv>
          </div>

        </div>

      </div>
      <div class="contact">
        <img src="../assets/banner/banner6.jpg" />
        <p>客服热线：<a href="tel:02886693637">02886693637</a></p>
        <p>邮箱：<span>yiqi@91kuailai.com</span></p>
        <div class="single">
          <title_h>
            <p slot="content">问题咨询</p>
          </title_h>
          <div class="problem_from">
            <div>
              <input  v-model="data.name" placeholder="您的称呼" />
            </div>
            <div>
              <input v-model="data.phone" placeholder="联系电话" />
            </div>
            <div>
              <textarea v-model="data.content" placeholder="请写下您想咨询的问题"></textarea>
            </div>
          </div>
          <btn_counsel :data="data" v-on:close="close"></btn_counsel>
        </div>

      </div>
      <div class="contact">
        <img src="../assets/banner/banner7.jpg" />
        <div class="single pb0">
          <title_h>
            <p slot="content">我们能提供什么</p>
          </title_h>
          <p class="c999">周末双休,朝九晚六,节日福利,加班补助,你能想到的这里都有。</p>
          <p class="pt12 pb26 c999">我们是一个富有活力的移动互联网大家庭,我们培训挖掘你的潜能,提供给你完善的晋升空间，只要有能力，待遇不是问题。</p>
          <title_h >
            <p slot="content">我们在找</p>
          </title_h>
          <about_recruit >
            <h3 slot="title" class="pt0">会计师</h3>
            <aboutRecruit slot="content">
              <h4 slot="title">岗位职责：</h4>
              <p slot="font">1.能独立负责小规模纳税人、一般纳税人的账务处理；报税、财务报表、新公司的建账;</p>
              <p slot="font">2.能独立处理公司全套账务；</p>
              <p slot="font">3.能帮助客户进行账务处理，为客户提供税务咨询；</p>
            </aboutRecruit>
            <aboutRecruit slot="content">
              <h4 slot="title">任职资格：</h4>
              <p slot="font">1.会计、财务管理类专业，有初级会计师职称；</p>
              <p slot="font">2.有一年以上代理记账工作经验；</p>
              <p slot="font">3.熟悉现金管理及银行结算，熟悉财务软件操作；</p>
            </aboutRecruit>
          </about_recruit>
          <about_recruit>
            <h3 slot="title">销售专员</h3>
            <aboutRecruit slot="content">
              <h4 slot="title">岗位职责：</h4>
              <p slot="font">1.利用网络、微博微信或电话等多种渠道进行公司业务推广；</p>
              <p slot="font">2.开发客户资源，寻找潜在客户；</p>
              <p slot="font">3.定期与合作客户进行沟通，建立长期合作关系；</p>
            </aboutRecruit>
            <aboutRecruit slot="content">
              <h4 slot="title">任职资格：</h4>
              <p slot="font">1.有服务类产品销售经验者优先；</p>
              <p slot="font">2.普通话标准，具备较强的沟通能力及语言表达能力，形象身高不限，男女不限；</p>
              <p slot="font">3.具备较强的亲和力，思维敏捷，反应快，有良好的服务意识；</p>
            </aboutRecruit>
          </about_recruit>
          <about_recruit>
            <h3 slot="title">运营总监</h3>
            <aboutRecruit slot="content">
              <h4 slot="title">岗位职责：</h4>
              <p slot="font">1.能全面负责公司运营中心的整体运营工作；</p>
              <p slot="font">2.制定运营计划，收集、分析、总结运营效果，结合市场信息，配合产品进行运营方案调整；</p>
              <p slot="font">3.负责策划推进重大产品和运营计划落实,根据数据分析和用户反馈，制定和提供产品改善策略；</p>
            </aboutRecruit>
            <aboutRecruit slot="content">
              <h4 slot="title">任职资格：</h4>
              <p slot="font">1.三年以上产品运营经验,熟悉移动互联网行业，了解移动互联网的商业模式和用户行为习惯;</p>
              <p slot="font">2.对服务平台有深刻的认知，有较强的市场感知能力，敏锐的把握市场动态，市场方向的能力；</p>
              <p slot="font">3.善于洞察用户心理，擅长活动策划，拥有较强的学习能力和执行力；</p>
            </aboutRecruit>
          </about_recruit>
        </div>
        <hint_mask></hint_mask>
      </div>
    </div>



    <loading></loading>
    <kl_footer :active="2"></kl_footer>
  </div>
</template>

<script>
import title_h from '../single/title_h.vue'
import aboutDiv from '../pack/aboutDiv.vue'
import kl_footer from '../single/kl_footer.vue'
import btn_counsel from '../single/btn_counsel.vue'
import about_recruit from '../components/about_recruit.vue'
import aboutRecruit from '../pack/aboutRecruit.vue'
import hint_mask from '../mask/hint_mask.vue'
import loading from '../mask/loading.vue'

import common from '../js/common.js'


export default {
  name: 'index',
  data () {
    return {
    data:{
        name:"",
    phone:"",
    content:""
    }

    }
  },
created: function () {
document.title= "关于我们";

  },
  methods:{

  close:function(b){
       if(!b){
        this.data.name = "";
        this.data.phone = "";
        this.data.content = "";
     }
  }

 },
  components:{
            title_h,
            aboutDiv,
            kl_footer,
            btn_counsel,
            about_recruit,
            aboutRecruit,
            hint_mask,
            loading
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  background:#f8f8f8;
  margin-bottom:50px;
}
.index>div:nth-child(1){
  background:#fff;
margin-bottom: 50px;
 position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  overflow: auto;
      -webkit-overflow-scrolling: touch;
}
.index>div:nth-last-child(1){
margin-bottom: 0;
}
.index>div>div>img{
  width:100%;
}
.single{
  padding:18px 10px;
}
.single>p{
  font-size:12px;
  color:#666;
  line-height:16px;
}
.contact>p{
  padding:5px 10px 0 10px;
  margin:16px 0;
  font-size:12px;
  color:#666;
}
.contact>p>a{
  color:#ebca34;
  text-decoration:underline;
}
.contact>p>span{
color:#333;
}
.contact>p:nth-child(3){
  padding-top:0;
}
.problem{
  margin:15px 0 30px 0;
}
.problem>div:nth-child(1){
  padding-top:20px;
}
.problem>div:nth-child(1) img{
  width:13px;
  height:13px;
}
.problem_from{
  margin-bottom:25px;
}
.problem_from>div{
 background:#f6f6f6;
   border:1px solid #e6e6e6;
   width:99%;
     margin-bottom:15px;
}
input,textarea{
  width:100%;
  box-sizing:border-box;
  background:#f6f6f6;
  color:#333;
  font-size:12px;
  padding-left: 9px;
  height:30px;

}
textarea{
  height:70px;
  padding-top:5px;
}
.pt12{
  padding-top:12px;
}
.pb26{
  padding-bottom:26px;
}
.single .c999{
  color:#999;
}
</style>
