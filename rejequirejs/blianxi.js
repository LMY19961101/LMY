//判断传入的参数是否为数组模块
define(function(){
    function isArray(arr){
        if(arr instanceof Array){
            return true;
        }else{
            return false;
        }
    }
    return isArray;
});