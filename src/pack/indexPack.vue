<template>
    <div class="pack clearFix">
        <div class="fl">
          <slot name="title"></slot>
          <slot name="info"></slot>
        </div>
        <div class="fr">
          <btn_bug :id="id" :type="type" :name="name"></btn_bug>
        </div>
    </div>
</template>
<style scoped>
.pack{
padding:15px 20px 15px 20px;
border-bottom:1px solid #e6e1cc;
}
.pack:nth-last-child(1){
border-bottom:0;
}
 .fl{
width:60%;
}
 .fl>p:nth-child(1){
  font-size:15px;
  color:#333;
  margin-bottom: 5px;
}
.fl>p:nth-child(2){
  font-size:10px;
  color:#666;

}
.fl p span{
font-size:13px;
margin-right:2px;
}
</style>
<script>
import btn_bug  from '../single/btn_bug.vue'
export default {
  data () {
    return {

    }
  },
 props:["id","type","name"],
 mounted: function () {
 },
  components:{
      btn_bug
        }
}
</script>
