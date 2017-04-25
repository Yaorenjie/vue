<template>
  <div class="process clearFix">
      <indexProcess >
        <img src="../assets/icon/icon_problem.png" slot="img"/>
        <p slot="font">问题咨询</p>
      </indexProcess>
    <div class="fl">
      <img class="arrow"  src="../assets/icon/icon_arrow1.png" slot="img"/>
    </div>
    <indexProcess >
      <img src="../assets/icon/icon_choose.png" slot="img"/>
      <p slot="font">选择服务</p>
    </indexProcess>
    <div class="fl">
      <img class="arrow"  src="../assets/icon/icon_arrow1.png" slot="img"/>
    </div>
    <indexProcess >
      <img src="../assets/icon/icon_buy.png" slot="img"/>
      <p slot="font">下单购买</p>
    </indexProcess>

    <indexProcess class="fl20">
      <img src="../assets/icon/icon_service.png" slot="img"/>
      <p slot="font">开始服务</p>
    </indexProcess>
    <div class="fl">
      <img class="arrow"  src="../assets/icon/icon_arrow1.png" slot="img"/>
    </div>
    <indexProcess >
      <img src="../assets/icon/icon_comment.png" slot="img"/>
      <p slot="font">订单评价</p>
    </indexProcess>
  </div>
</template>
<style scoped>
.process{
  padding:4px 20px 23px 20px;
}
.arrow{
  width:40%;
  margin-top:34px;
  margin-left:30%;
}
p{
  font-size:12px;
}
.fl20{
  margin-left:20%;
}
.fl{
width:20%;
}
</style>
<script>
import indexProcess  from '../pack/indexProcess.vue'
export default {
  data () {
    return {

    }
  },
  components:{
     indexProcess
        }
}
</script>
