<template>
  <div class="content">
    <index_title>
      <h1 slot="header">SERVICE COMMITMENT</h1>
      <h1 class="after" slot="footer">
        <span class="span-after">服</span>
        <span class="span-after">务</span>
        <span class="span-after">承</span>
        <span>诺</span>
      </h1>
    </index_title>
    <slot name="content"></slot>
  </div>
</template>
<style scoped>
.content{
   margin: 12px 0 48px 0;
   color:#666;
}
p{
  margin-left:12px;
  margin-bottom:16px;
}
.yd p{
font-size:13px;
  margin-bottom:9px;
  color:#333;
}
.yd>div{
  position:absolute;
  top:5px;
  width:4px;
  height:4px;
  background:#666;
}
.yd{
  position:relative;
}

</style>
<script>
import index_title from '../components/index_title.vue'
export default {
  data () {
    return {

    }
  },
 methods:{

 },
  components:{
  index_title
        }
}
</script>
