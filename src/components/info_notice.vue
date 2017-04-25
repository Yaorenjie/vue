<template>
  <div class="content">
      <h3>客户须知</h3>
      <slot name="content"></slot>
  </div>
</template>
<style scoped>
.content{
   margin: 12px 0 4px 0;
   color:#666;
}
h3{
font-size:13px;
  margin-bottom:10px;
  font-weight:500;
}
p{
  font-size:12px;
  margin-bottom:10px;
  line-height:14px;
}


</style>
<script>
export default {
  data () {
    return {

    }
  },
 methods:{

 },
  components:{

        }
}
</script>
