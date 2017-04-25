/**
 * Created by Feng on 2016/8/9.
 */
//var http = "http://192.168.0.160:8080/klkj/ent/web.do?";
//var http = "http://192.168.0.155:8080/klkj/ent/web.do?";

module.exports = function () {
  var common = {
    //http:"http://120.24.171.173:70/mockjsdata/17/",
/*    http:"/kl-wechat/api/ent?",*/
    http:"/wx/api/ent?",
    //http:"/wxTest/api/ent?",
    ajax: {
      postAjax: function (options) {
        $.ajax({
          url: options.url,
          type: 'post',
          data: options.data,
          success: options.callback
        });
      }
    },
    load:{
      display:function(){
        $("#loadingMask").removeClass("none");
      },
      none:function(){
        $("#loadingMask").addClass("none");
      }
    },
    hint:{
      hint:function(content){
        $(".tt-mask").removeClass("none");
        $(".tt-mask p").html(content);
        setTimeout(function () {
          $(".tt-mask").addClass("none");
        }, 1500);
      },
    }
  };
  return common;
};


