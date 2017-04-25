<template>
  <div class="aboutRecruit">
    <slot name="title"></slot>
    <slot name="font"></slot>
  </div>
</template>
<style scoped>
.aboutRecruit{
padding:0 10px;
}
.aboutRecruit>h4{
  font-size:12px;
  color:#333;
  padding:4px 0 12px 0;
  font-weight:500;
}
.aboutRecruit>p{
  font-size:12px;
  color:#999;
  margin-bottom:12px;
  line-height:15px;
}
</style>
<script>

</script>
