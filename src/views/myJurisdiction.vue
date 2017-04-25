<template>
  <div class="index">
    <img src="../assets/icon/icon_login.png" />
    <h3>开启微信快捷登录权限</h3>
    <p>请按照提示“开启权限”，获取微信登录能力。</p>
    <div>
      <btn_qx_h>
        <p slot="content">开启权限</p>
      </btn_qx_h>
    </div>
    <kl_footer :active="3"></kl_footer>
  </div>

</template>

<script>
import btn_qx_h from '../single/btn_qx_h.vue'
import kl_footer from '../single/kl_footer.vue'
export default {
  name: 'index',
  data () {
    return {

    }
  },
 methods:{

 },
  components:{
           btn_qx_h,
           kl_footer
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
    padding:80px 0 0 0;
    text-align:center;
}
img{
width:66%;
padding:0 17%;
}
h3{
  padding:40px 0 15px 0;
  font-size:18px;
  color:#333;
}
.index>p{
  font-size:12px;
  color:#999;
}
.index>div:nth-last-child(2){
  padding:42px 50px 0 50px;
}


</style>
