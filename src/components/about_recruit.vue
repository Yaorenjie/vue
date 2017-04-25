<template>
  <div class="about_recruit">
    <div class="one">
      <div></div>
      <slot name="title"></slot>
    </div>
    <slot name="content"></slot>
  </div>
</template>
<style scoped>
.about_recruit{
  border-bottom:1px solid #e6e6e6;
  padding:21px 0 9px 0;
}
.about_recruit:nth-last-child(1){
  border-bottom:0
}
.about_recruit h3{
  font-size:13px;
  color:#333;
font-weight: 500;
margin-left:10px;
margin-bottom:12px;
}
.about_recruit>.one{
  position:relative;
}
.one>div{
position: absolute;
top:6px;
  width:4px;
  height:4px;
border-radius: 50%;
background:#999;
}
</style>
<script>
</script>
