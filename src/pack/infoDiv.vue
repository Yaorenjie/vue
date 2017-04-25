<template>
    <div class="info">
          <div>
            <slot name="title"></slot>
          </div>
          <slot name="content"></slot>
    </div>
</template>
<style scoped>
.info{
  background:#fff;
  margin-bottom:8px;
  color:#333;
  font-size:12px;
 border-bottom:1px solid #dadada;
  border-top:1px solid #dadada;
}
.info>div:nth-child(1){
  padding:12px 10px;
  border-bottom: 1px solid #dadada;
}
h5{
  font-size:13px;
  font-weight:500;
}
</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        }
    }
</script>
