<template>
  <div class="btn">
    <div class="yd"  >
      <div ></div> <slot name="title"></slot>
    </div>
    <slot name="content"></slot>
  </div>
</template>
<style scoped>
p{
  margin-left:12px;
  margin-bottom:16px;
  color:#666;
  font-size:12px;
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
  border-radius: 50%;
}
.yd{
  position:relative;
}
</style>
<script>

</script>
