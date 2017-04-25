<template>
  <div class="title">
    <slot name="content"></slot>
  </div>
</template>
<style scoped>
  .title{
font-size: 13px;
color:#333;
position:relative;
padding-bottom:30px;
  }
.title p:after{
    position: absolute;
    top:23px;
    left: 0;
    right: 0;
    content: "";
    width: 21px;
    height: 2px;
    background: #ebca34;
}

</style>
<script>

</script>
