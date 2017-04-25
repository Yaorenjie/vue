<template>
  <div class="clearFix aboutDiv">
    <slot class="fl" name="img"></slot>
    <div class="fr">
      <slot name="font1"></slot>
      <slot name="font2"></slot>
    </div>

  </div>
</template>
<style scoped>
.aboutDiv{
width:45%;
margin-top:25px;
margin-right:17px;
}
.aboutDiv:nth-last-child(1){
margin-right:0;
}
.aboutDiv h5{
  font-size:12px;
  color:#333;
  padding-bottom:7px;
  font-weight:500;
}
.aboutDiv p{
  font-size:10px;
  color:#666;

}
.aboutDiv img{
margin-top:5px;
width:27%;
}
.aboutDiv>div{
margin-left:3%;
width:70%;
}
</style>
<script>

</script>
