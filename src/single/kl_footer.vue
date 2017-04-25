<template>
    <div class="clearFix">
      <router-link class="fl" to="/index">
        <img v-if="active != 1" src="../assets/icon/icon_home1.png" />
        <img v-if="active == 1" src="../assets/icon/icon_home2.png" />
        <p :class="{'active':active == 1}">首页</p>
      </router-link>
      <router-link class="fl" to="/aboutUs">
        <img v-if="active != 2" src="../assets/icon/icon_about1.png" />
        <img v-if="active == 2" src="../assets/icon/icon_about2.png" />
        <p :class="{'active':active == 2}">关于我们</p>
      </router-link>
      <router-link class="fl"  to="/personalCenter">
        <img v-if="active != 3" src="../assets/icon/icon_my1.png" />
        <img v-if="active == 3" src="../assets/icon/icon_my2.png" />
        <p :class="{'active':active == 3}">我的</p>
      </router-link>
    </div>
</template>
<style scoped>
.clearFix{
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  text-align:center;
  z-index: 999;
  background:#fff;
  height:49px;
  border-top:1px solid #dadada;
}
img{
  width:22px;
  height:22px;
}
.active{
  color:#ebca34;
}
.clearFix>a{
  padding-top:6px;
  width:33.3%;
}
p{
  font-size:9px;
  padding-top:2px;
  color:#666;
}
</style>
<script>
export default {

  props:['active'],

}
</script>
