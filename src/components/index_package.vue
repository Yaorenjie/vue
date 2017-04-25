<template>
    <div>
      <slot name="img"></slot>
        <indexPack v-for="el in data" v-if="el.type == 2" :id="el.id" :type="el.type" :name="el.name">
          <p slot="title">{{el.name}}</p>
          <p slot="info"><span>￥{{el.prePrice}}</span>元/月</p>
        </indexPack>
    </div>
</template>
<style scoped>
div{
background: #f9f7ec;
}
img{
width:100%;
}
</style>
<script>
import indexPack  from '../pack/indexPack.vue'
export default {
  data () {
    return {

    }
  },
   props:["data"],
mounted: function () {
    console.log(this.data);
 },

  components:{
     indexPack
        }
}
</script>
