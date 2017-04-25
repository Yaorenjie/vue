<template>
  <div class="index">
    <img src="../assets/icon/icon_empty.png" />
    <h3>您还没有订单</h3>
    <div class="btn">
      <p slot="content" @click="url()">前往下单</p>
    </div>

  </div>

</template>

<script>
import btn_qx_h from '../single/btn_qx_h.vue'

export default {
  name: 'index',
  data () {
    return {
        orderId:""
    }
  },
created: function () {
document.title= "个人中心";
  },
 methods:{
url:function(){
 this.$router.push({ path: 'index'})
}
 },
  components:{
           btn_qx_h
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
    padding:50px 0 0 0;
    text-align:center;
}
img{
width:60%;
padding:0 20%;
}
h3{
  padding:25px 0 15px 0;
  font-size:18px;
  color:#333;
  font-weight:500;
}
.index>p{
  font-size:12px;
  color:#999;
}

.index .btn{
  width:220px;
  height:43px;
  border-radius: 5px;
  margin:15px auto;
  background:#ebca34;
}
.index .btn p{
line-height:43px;
font-size:16px;
color:#333;
text-align:center;
}


</style>
