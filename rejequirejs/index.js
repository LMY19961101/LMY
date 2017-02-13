/* require.js */
require(["a"], function(arrSort){
    var arr = [3, 2, 5, 1, 11];
    console.log(arrSort(arr));
});

/* sea.js */
define(function(require){
    var arr = [3, 2, 5, 1, 11];
    var arrSort = require("a");
    console.log(arrSort(arr));
});

/*
AMD:requirejs  依赖前置
CMD:seajs  依赖就近



* */