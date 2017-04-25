<template>
    <div class="problem">
      <div class="problem1">
        <div>
          <div class="clearFix">
            <img @click="tcProblem(false)" class="fr" src="../assets/icon/icon_close.png" />
          </div>
          <index_title>
            <h1 slot="header">COUNSELING PROBLEM</h1>
            <h1 class="after" slot="footer">
              <span class="span-after">问</span>
              <span class="span-after">题</span>
              <span class="span-after">咨</span>
              <span>询</span>
            </h1>
          </index_title>
          <div class="problem_from">
            <div>
              <input v-model="data.name" placeholder="您的称呼" />
            </div>
            <div>
              <input v-model="data.phone" placeholder="联系电话" />
            </div>
            <div>
              <textarea v-model="data.content" placeholder="请写下您想咨询的问题"></textarea>
            </div>
          </div>
          <btn_counsel :data="data"  v-on:close="close"></btn_counsel>
          <phone_service></phone_service>
        </div>
      </div>
    </div>
</template>
<style scoped>
.problem{
      position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
  z-index: 1000;
  background: rgba(0,0,0,.5);
  padding:0 10px 30px 10px;
  overflow:auto;
}
.problem1{
 position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:32px;
  background:#fff;
  overflow:auto;
      -webkit-overflow-scrolling: touch;

}
.problem1>div{
  background:#fff;
    padding:0 10px 30px 10px;
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
</style>
<script>
import index_title from '../components/index_title.vue'
import btn_counsel from '../single/btn_counsel.vue'
import phone_service from '../single/phone_service.vue'
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
methods:{
  tcProblem:function(bool){
     this.$emit('ee',bool );

  },
  close:function(b){
     this.$emit('ee',b );
       if(!b){
        this.data.name = "";
        this.data.phone = "";
        this.data.content = "";
     }
  }
 },
  components:{
            index_title,
            btn_counsel,
            phone_service
        }
}
</script>
