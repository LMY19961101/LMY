define(["jquery"], function($   ){
    function Carousel(){
        this.defaultSettings = {
            selector : "body",
            imgs : [],
            buttonStyle : "circle",//square 表示索引的样式
            arrowPos : "bottom",//center 表示前后按钮的位置
            speed : 500//表示图片轮换的速度
        };
        this.container = $('<div class="carousel-container"></div>');
        this.imgs = $('<div class="carousel-imgs"></div>');
        this.tab = $('<ul class="carousel-tab"></ul>');
        this.arrows = $('<div class="carousel-arrows"></div>');
        this.prev = $('<span class="carousel-arrows-prev">&lt;</span>');
        this.next = $('<span class="carousel-arrows-next">&gt;</span>');
    }
    Carousel.prototype.init = function(options){
        $.extend(this.defaultSettings, options);
        for(var i=0; i<this.defaultSettings.imgs.length; i++){
            var $img = $("<img src='"+ this.defaultSettings.imgs[i] +"'>");
            this.imgs.append($img);
            var $li = $("<li></li>");
            if(this.defaultSettings.buttonStyle == "square"){
                $li.html(i + 1);
            }else{
                $li.addClass("circle");
            }
            this.tab.append($li);
        }

        $("img", this.imgs).eq(0).addClass("selected");
        $("li", this.tab).eq(0).addClass("selected");
        this.arrows.append(this.prev).append(this.next);
        this.container.append(this.imgs).append(this.tab).append(this.arrows);
        $(this.defaultSettings.selector).append(this.container);

        if(this.defaultSettings.arrowPos == "center"){
            $("span", this.arrows).addClass("center");
            this.arrows.removeClass("carousel-arrows");
        }
        var nowIdx = 0;
        var that = this;
        this.tab.on("mouseover", "li", function(){
            nowIdx = $(this).index();
            changeImg();
        });
        this.prev.on("click", function(){
            nowIdx--;
            if(nowIdx == -1){
                nowIdx = that.defaultSettings.imgs.length - 1;
            }
            changeImg();
        });
        this.next.on("click", function(){
            nowIdx++;
            if(nowIdx == that.defaultSettings.imgs.length){
                nowIdx = 0;
            }
            changeImg();
        });
        this.container.hover(function(){
            clearInterval(that.timer);
        }, function(){
            play();
        });
        play();

        function play(){
            that.timer = setInterval(function(){
                that.next.trigger("click");
            }, that.defaultSettings.speed);
        }

        function changeImg(){//私有方法
            $("li", that.tab).eq(nowIdx).addClass("selected").siblings().removeClass("selected");
            $("img", that.imgs).eq(nowIdx).addClass("selected").siblings().removeClass("selected");
        }
    };
    return Carousel;
});