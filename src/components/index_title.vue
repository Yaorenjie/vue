<template>
    <div class="title tc">
      <slot name="header"></slot>
      <slot name="footer"></slot>
    </div>
</template>
<style scoped>
.title{
  padding:33px 0 25px 0;
  color:#333;
}
.title h1{
  font-size:14px;
   margin-bottom: 2px;
}
.title .after{
    margin-bottom: 10px;
    position:relative;
    font-weight: 500;
}
.title .after:after {
    position: absolute;
    top: 26px;
    left: 0;
    right: 0;
    margin: 0 auto;
    content: "";
    width: 39px;
    height: 2px;
    background: #dadada;
}
.after span{
  margin-right:8px;
  position:relative;
}
.after .span-after:after{
 position: absolute;
    top: 2px;
    left: 19px;
    right: 0;
    margin: 0 auto;
    content: "";
    width: 1px;
    height: 12px;
    background: #333;
}
.after span:nth-last-child(1){
  margin-right:0;
}
.title .title-white{
  color:#fff;
}
.title .title-white:after {
    background: #fff;
}
.title-white .span-after:after{
  background: #fff;
}
.title-pro{
padding-top:26px;
}
</style>
<script>

</script>
