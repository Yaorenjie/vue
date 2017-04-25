<template>
  <div class="productInfo">
    <div>
      <div>
        <img src="../assets/banner/bg.jpg" />
      </div>
      <div class="main" id="main" >
        <info_content :type="type"  :id="data.id">
          <h1  slot="title">{{data.name}} </h1>
          <p  slot="price"><span>￥{{data.prePrice}}</span> 元 / 月</p>
          <p slot="range">请参考咨询师提出的建议，选择适合您的套餐购买。</p>
          <ul  slot="content">
            <li><div></div><span>整理原始单据、记账凭证；（如月均票据量较多时，建议预先与会计师沟通）</span></li>
            <li><div></div><span>每月出具财务报表（资产负债表、损益表）；</span></li>
            <li><div></div><span>每月纳税申报及税款交纳；</span></li>
            <li><div></div><span>每月发票代购一次；</span></li>
            <li><div></div><span>新公司赠送国地税报道；</span></li>
            <li><div></div><span>每月报税定期提醒服务（微信）；</span></li>
          </ul>
        </info_content>
        <div  class="main_t">
          <info_notice>
            <p slot="content">1.该套餐服务，单次购买时长至少为一年；</p>
            <p slot="content">2.您需要准备营业执照复印件、报税密码、所有原始单据、发生额及余额表（需要到末级科目）或者总账明细账等。</p>
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
              <p slot="title">“代理记账”包括哪些服务？</p>
              <p slot="content">每月票据分类、整理、装订，做帐，出具凭证、报表，账本，报税。解答财税疑难问题、规避财税风险等。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">什么票据可以做账？</p>
              <p slot="content">原始票据（收入、费用、成本类）、银行回单、银行对账单、其他账目原始凭证等。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">必须是会计才能记账吗？我自己做可不可以？</p>
              <p slot="content">不行，《会计法》规定从事会计工作的人员都必须取得会计从业资格证书，必须是会计才能做账。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">发票必须得当月票当月报吗？</p>
              <p slot="content">不绝对，你开给别人的发票（收入票）必须是当月票当月报，别人开给你的发票当年即可。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">为什么一定要记账报税，不报税行不行？</p>
              <p slot="content">稽查部门会稽查企业以往年度的账务，并追究责任。任何企业都需要面临着国税和地税两个税务机关的稽查，如果不记账报税的话，会对企业的征信带来很大影响。</p>
            </div_view>
            <div_view slot="content">
              <p slot="title">我是新开的公司如何记账报税啊？</p>
              <p slot="content">公司的主要税种，国税：主要是增值税和企业所得税。地税主要是营业税以及附加，增值税的附加税和个人所得税。这是最主要的税种。</p>
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
  background:#f8f8f8;
  overflow:auto;
   -webkit-overflow-scrolling: touch;
     z-index: -2;
}
.main{

  padding-top:53px;
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
