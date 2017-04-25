<template>
  <div class="btn">
    <slot name="content"></slot>
  </div>
</template>
<style scoped>
  .btn{
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:43px;
  font-size:16px;
  color:#333;
  background:#ebca34;
  }
   .btn p{
   line-height:43px;
   font-weight:600;
   text-align: center;
   }
</style>
<script>

</script>
