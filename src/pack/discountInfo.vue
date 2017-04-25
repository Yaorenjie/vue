<template>
  <div class="discount" @click="btn()">
    <img v-if="discount != discountId" src="../assets/icon/line1.png" />
    <img v-if="discount == discountId" src="../assets/icon/line2.png" />
    <div>
      <slot name="title1"></slot>
      <slot name="title2"></slot>
    </div>
    <img src="../assets/icon/line3.png" />
    <div class="clearFix">
      <img  v-if="discount == discountId" class="fl" src="../assets/icon/radio1.png" />
      <img  v-if="discount != discountId" class="fl" src="../assets/icon/radio2.png" />
      <p v-if="discount != discountId" class="fl">未选择</p>
      <p v-if="discount == discountId" class="fl">已选择</p>
    </div>

  </div>
</template>
<script>
 export default{
        data(){
            return{
                imgIf:false
            }
        },
props:['discount','discountId'],
     mounted: function () {
 // `this` 指向 vm 实例

 },
methods:{
    btn:function(bool){
      if(!this.imgIf)
          this.imgIf = !this.imgIf
       if(this.imgIf){
         this.$emit('changeDis',this.discountId )
      }
    }
 },
 components:{

        }
    }
</script>
<style scoped>
.discount{
  width:48%;
  padding-bottom:10px;
}
.discount>img{
  width:100%!important;
}
.discount>div{
text-align: center;
border-left:1px solid #e6e6e6;
border-right:1px solid #e6e6e6;
}
.discount>div:nth-last-child(1){
border-bottom:1px solid #e6e6e6;
}
.info .discount h2{
font-size:15px;
color:#333;
margin-top:-3px;
padding:13px 0 0 0;
}
.info .discount p{
font-size:11px;
color:#666;
margin-bottom:-3px;
padding:12px 0;
}
.clearFix{
margin-top:-3px;
  padding:10px;
}
.clearFix img{
    width:14px;
    margin-right:5px;
}
.info .discount .clearFix p{
  padding:0;
}
</style>

