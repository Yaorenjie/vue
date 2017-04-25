<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import vue from 'vue'
export default {
  name: 'app',
   data () {
    return {
      transitionName: ''
    }
  },
  created: function () {
if(undefined != this.$route.query.openid){
  sessionStorage.setItem("openid", this.$route.query.openid);
}
    vue.openid=sessionStorage.getItem("openid");
    //vue.openid="oRg4YwAlhJBvyUAaAP_yeSK3RTVY";
  },
  mounted: function () {
},
 watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
switch(toDepth.name)
{
case "index":
document.title= "首页";
  break;
default:
document.title= "首页";

}

    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
  }
}
}
</script>

<style>
*{
  margin:0;
  padding:0;
  border:0;
    -webkit-touch-callout:none; /*系统默认菜单被禁用*/
  -webkit-user-select:none; /*webkit浏览器*/
  -khtml-user-select:none; /*早期浏览器*/
  -moz-user-select:none;/*火狐*/
  -ms-user-select:none; /*IE10*/
  user-select:none;
  }
  input,textarea {
  -webkit-user-select:auto; /*webkit浏览器*/
  outline: none;
}
html,body{
    font-size: 62.5%;
}
p{
word-wrap:break-word;
 word-break:normal;
 }

body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.slide-left-enter-active {
transition: transform .5s ease;
}
.slide-left-leave-active {
transform: translate(-100%,0);
}
.slide-left-enter, .slide-left-leave-active {
transform: translate(100%,0);
}
.slide-right-enter-active {
transition: transform .5s ease;
}
.slide-right-leave-active {
transform: translate(100%,0);
}
.slide-right-enter, .slide-right-leave-active {
transform: translate(-100%,0);
}

/*定义浮动*/
.fl{
    float: left!important;
}
.fr{
    float: right!important;
}
/*清除浮动*/
.clearFix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
/*字体加粗*/
.fb{
    font-weight: bolder!important;
}
.oh{
    overflow: hidden!important;
}
/*定义字体大小*/
.f10{
    font-size: 1rem!important;
}
.f11{
    font-size: 1.1rem!important;
}
.f12{
    font-size: 1.2rem!important;
}
.f13{
    font-size: 1.3rem!important;
}
.f14{
    font-size: 1.4rem!important;
}
.f15{
    font-size: 1.5rem!important;
}
.f16{
    font-size: 1.6rem!important;
}
.f17{
    font-size: 1.7rem!important;
}
.f18{
    font-size: 1.8rem!important;
}
.f19{
    font-size: 1.9rem!important;
}
.f20{
    font-size: 2rem!important;
}
.f21{
    font-size: 2.1rem!important;
}
.f22{
    font-size: 2.2rem!important;
}
.f23{
    font-size: 2.3rem!important;
}
.f24{
    font-size: 2.4rem!important;
}
.f25{
    font-size: 2.5rem!important;
}
/*文本居中 左对齐 右对齐*/
.tc{
    text-align: center!important;
}
.tl{
    text-align: left!important;
}
.tr{
    text-align: right!important;
}
/*遮罩层*/
.mask{
    position: fixed;
    top:0;bottom: 0;
    left: 0;right: 0;
    background: rgba(0,0,0,.7);
    z-index: 999;
}
/*隐藏*/
.none{
    display: none;
}
/*显示省略号*/
.fontEllipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/*整体*/
body{
    margin: 0;
}
.cent{
    text-align: center;
}

a:link {
    text-decoration: none;
    color: #757575;
}
a:visited {
    text-decoration: none;
}
a:hover {
    text-decoration: none;
}
a:active {
    text-decoration: none;
}
.ie8mask{
    position: fixed;
    background:#888888;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;

}
.ie8mask div{
    position: absolute;
    background: #ffffff;
    top: 50%;
    left: 50%;
    height: 100px;
    width: 400px;
    margin: -50px 0 0 -200px;
}
.ie8mask p {
    color: #919191;
    margin-top: 30px;
    font-size: 2.5rem;
}

.hint-mask{
    position: fixed;
    top:50%;
    bottom: 0;
    left: 50%;
    right: 0;
    background: rgba(0,0,0,.7);
    z-index: 10000;
    width: 120px;
    height: 120px;
    margin-top: -60px;
    margin-left: -60px;

}
.hint-mask img{
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -25px;
    height: 50px;
    width: 50px;
}
/*显示省略号*/
.fontEllipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/*上传文件*/
.fileBtn{
    padding: 8px 10px;
    line-height: 20px;
    position: relative;
    cursor: pointer;
    background: #249f7b;
    border: 1px solid #ddd;
    overflow: hidden;
    *zoom: 1;
    color: #ffffff;
    text-align: center;
    font-size: 14px;
}
.fileBtn input{
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer
}
.fileBtn input:hover {
    color: #444;
    background: #eee;
    border-color: #ccc;
    text-decoration: none
}
.dialog-mask{
    position: fixed;
    top:50%;
    bottom: 0;
    left: 50%;
    right: 0;
    background: #FFFFFF;
    z-index: 10000;
    width: 360px;
    height: 200px;
    margin-top: -100px;
    margin-left: -180px;
}

.qx-mask{
    position: fixed;
    top:50%;
    bottom: 0;
    left: 50%;
    right: 0;
    background: #FFFFFF;
    z-index: 10000;
    width: 500px;
    height: 400px;
    margin-top: -250px;
    margin-left: -200px;
}
.bb0{
  border-bottom:0!important;
}
.mbp0{
 border:0!important;
  margin:0!important;
   padding:0!important;
}
.pb0{
  padding-bottom:0!important;
}
.pt0{
  margin-top:-21px!important;
}
</style>
