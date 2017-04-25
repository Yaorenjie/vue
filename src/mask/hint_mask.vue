<style scoped>
.tt-mask{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
z-index: 10001;
}
.tt-mask>div{
    position: fixed;
    top:40%;
    left: 50%;
    right: 0;
    background: rgba(0,0,0,.7);
    z-index: 10001;
    width: 180px;
    margin-left: -90px;
    border-radius: 5px;
}
.tt-mask p{
    color: #ffffff;
    text-align: center;
    font-size: 1.4rem;
    margin: 0;
    padding: 10px;
}

</style>
<template>
  <div class="tt-mask none">
    <div>
      <p></p>
    </div>
  </div>
</template>

<script>
    export default{


    }
</script>
