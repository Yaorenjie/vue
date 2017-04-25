<template>
  <div class="productInfo">
    <div>
      <div>
        <img src="../assets/banner/bg.jpg" />
      </div>
      <div class="main" id="main" >
        <info_content :type="type"   :id="data.id">
          <h1  slot="title">{{data.name}} </h1>
          <p  slot="price"><span>￥{{data.prePrice}}</span> 元</p>
          <p slot="range">请参考咨询师提出的建议，选择适合您的套餐购买。</p>
          <ul  slot="content">
            <li><div></div><span>核准名称：公司注册名称核准一般是指工商字号的核准。</span></li>
            <li><div></div><span>提交材料：我们会把您的资料提交给市场监督局，并把市场监督局反馈的电子文档发送给您。通知您在线签名。然后进行工商审核，把您签名完成的电子文档再次提交给市场监督局，接受市场监督局的审核。时间在3-5个工作日。</span></li>
            <li><div></div><span>办理执照：审核完成后会发送审核回执，根据回执用户领取执照。</span></li>
            <li><div></div><span>办理刻章：雕刻公司所用三章，公章，财务章，法人章并备案。</span></li>
          </ul>
        </info_content>
        <div  class="main_t">
          <info_notice>
            <p slot="content">您需要准备:</p>
            <p slot="content">1.公司名字请提供4-5个;    2.办公地址、固定电话和邮箱等;    3.公司经营范围;    4.注册资本;
              5.法人股东身份证原件复印件;    6.公司监事人信息;    7.股权比例.</p>
          </info_notice>
          <info_commit>

            <div_view slot="content">
              <p slot="title">价格透明</p>
              <p slot="content">在套餐服务项目内，我们绝不额外加收任何费用。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">专人服务</p>
              <p slot="content">一对一专员服务，提供合理长效的财税规划，提高整体财税服务质量。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">安全保障</p>
              <p slot="content">所有资料和证件移交给对方时，一律需要双方确认。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">贴心提醒</p>
              <p slot="content">服务动态，微信实时推送提醒。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">售后保障</p>
              <p slot="content">服务质量问题，24小时专人处理，确保及时解决。</p>
            </div_view>
          </info_commit>
          <info_problem></info_problem>
          <info_common>
            <div_view slot="content">
              <p slot="title">公司注册包含了哪些服务？</p>
              <p slot="content">服务内容包括：核名，网上申报，工商局预约，递交材料，取得执照，刻章等。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">公司注册需要提交哪些材料？</p>
              <p slot="content">主要包括：公司名称、股东信息、注册资本、注册地址、经营范围、董事监事经理、法定代表人信息等。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">公司注册是不是都需要交房产税？</p>
              <p slot="content">如果自己提供地址的话就不需要，因为自己租房会有租房税票。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">个体工商户申请办理停业最长期限是多少？</p>
              <p slot="content">纳税人的停业期限不得超过一年。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">请问一下注册一家公司，房产税是怎么算的？</p>
              <p slot="content">您好！按照规定来说，房产税是一次性缴完，如果租金是每月五千以下，是按照租金的万分之四来缴的。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">子公司成立办理周期？</p>
              <p slot="content">注册周期一个月左右，一般由企业法人自己出资，不做垫资。</p>
            </div_view>
          </info_common>
        </div>
      </div>
    </div>

    <counse_footer>
      <p @click="url()" slot="content">立即购买</p>
    </counse_footer>
    <hint_mask></hint_mask>
    <loading></loading>
  </div>
</template>

<script>
import info_content from '../components/info_content.vue'
import info_notice from '../components/info_notice.vue'
import info_commit from '../components/info_commit.vue'
import info_problem from '../components/info_problem.vue'
import info_common from '../components/info_common.vue'
import div_view from '../single/div_view.vue'
import counse_footer from '../single/counse_footer.vue'
import hint_mask from '../mask/hint_mask.vue'
import loading from '../mask/loading.vue'
import common from '../js/common.js'
import vue from 'vue'
export default {
  name: 'productInfo',
  data () {
    return {
            data:{},
      contIf:true,
      type:""
    }
  },
    created: function () {
document.title= "产品详情";
  },
  mounted: function () {
  this.type = this.$route.query.type;
        this.id = this.$route.query.id;
          this.getInfo();
      var self = this;
      $("#main").scroll(function(){
        if( $("#main").scrollTop() !=0 ){

        }else if ($("#main").scrollTop() ==115){
        }else if ($("#main").scrollTop() ==509){
        }else{

        };
      });
  },
 methods:{
    getInfo:function(){
            var self = this;
             var options = {
                    url:common().http+"apiVersion=1&method=getServicePackageInfo",
                    data:{
                      id:this.id,
                      openid:vue.openid
                    },
                    callback:function(data){
                          self.data=data.data;
                    }
             }
             common().ajax.postAjax(options);
        },
                 url:function(){
      this.$router.push({ path: 'buyService', query: {id:this.data.id,type:this.type} })
    }
 },

  components:{
    info_content,
    info_notice,
    info_commit,
    info_problem,
    info_common,
    div_view,
    counse_footer,
    hint_mask,
    loading
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productInfo>div:nth-child(1){
 position:absolute;
 top:0;
 left:0;
 right:0;
 bottom:0;
  z-index: -100;
  background:#f8f8f8;
  overflow:auto;
      -webkit-overflow-scrolling: touch;
}
.main{
  margin-top:53px;

}
.main_c{
margin-top:160px;
}
.main_t{
      background:#f8f8f8;
        padding:0 10px;
}
  img{
 position:absolute;
 top:0;
 left:0;
 right:0;
  width:100%;
  z-index: -1;
  }
</style>
