require(["jquery","carousel"],function($,Carousel){


    var $searchIpt = $("#search-ipt");
    $("#search span").on("click", function(){
        alert($searchIpt.val());
    });
    $searchIpt.on("keypress", function(e){
        if(e.which == 13){//表示点击的是回车
            alert($searchIpt.val());
        }
    });

    var carousel = new Carousel();
    carousel.init({
        selector : "#imgs",
        imgs : ["img/banner01.png",
                "img/banner02.png",
                "img/banner03.png",
                "img/banner04.png"],
        buttonStyle : "circle",//square 表示索引的样式
        arrowPos : "bottom",//center 表示前后按钮的位置
        speed : 500//表示图片轮换的速度
    });
});



