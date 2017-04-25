<template>
  <div class="list" @click="url()">
    <slot name="content"></slot>
  </div>
</template>
<style scoped>
.list{
  background:#fff;
  padding-left:10px;
    border-top:1px solid #dadada;
    border-bottom:1px solid #dadada;
    margin-bottom:8px;
}

</style>
<script>
  import order_list from '../components/order_list.vue'
import p_font_lr from '../single/p_font_lr.vue'
import loading from '../mask/loading.vue'
import vue from 'vue'
import common from '../js/common.js'
export default {
  name: 'index',
  data () {
    return {
        data:[]
    }
  },
     props:["id"],
 methods:{
    url:function(){
       this.$router.push({ path: 'orderInfo',query: {id:this.id}})
    },

 }
}
</script>
