/**
 * Created by Administrator on 2016/12/27.
 */
module.exports = function (value,type) {
  console.log(111);
    var result = value;
    if (type == "yy-mm-dd" && value != undefined){
        result = value.substring(0,11);
    }else if(type == "yy-mm-dd hh:mm:ss" && value != undefined){
        result = value.substring(0,19);
    }
    return result;
};
