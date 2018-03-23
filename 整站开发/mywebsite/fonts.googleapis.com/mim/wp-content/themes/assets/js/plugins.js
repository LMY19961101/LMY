(function($) {
    "use strict";


    // Sticky Menu Bar
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        var AESticky = $('.active-sticky');
        if (scroll < 245) {
            AESticky.removeClass("is-sticky");
        } else {
            AESticky.addClass("is-sticky");
        }
    });


    // Smooth scroll
    $('.smooth-scroll a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            console.log(target);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 750);
                return false;
            }
        }
    });


    // One page Nav
    var OnePNav = $('.mim-one-page');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });
    var CloseMu = $('.close-menu');
    var ExMu = $('.mainmenu-expand');
    var ExMuOp = $('.expand-menu-open');
    CloseMu.on('click', function() {
        $(this).parent(ExMu).removeClass('slide_right');
    });
    ExMuOp.on('click', function() {
        CloseMu.parent(ExMu).addClass('slide_right');
    });
    $(document).on('click', function(e) {
        var $authorSelectorDoc = $('.mainmenu-expand, .expand-menu-open');
        if (!$authorSelectorDoc.is(e.target) && $authorSelectorDoc.has(e.target).length === 0) {
            $('.mainmenu-expand').removeClass("slide_right");
        }
    });
    var $submenu = $('.onepage-nav.mainmenu-box li').has('.sub-menu');
    $submenu.prepend("<span class='menu-click'><i class='menu-arrow fa fa-plus'></i></span>");
    var $mobileSubMenuOpen = $(".menu-click");
    $mobileSubMenuOpen.on("click", function() {
        var $self = $(this);
        $self.siblings(".sub-menu").slideToggle("slow");
        $self.children(".menu-arrow").toggleClass("menu-extend");
    });



    // Progress Bar
    var ProWey = $('.skill-progress');
    if (ProWey.length > 0) {
        ProWey.waypoint(function() {
            jQuery('.skill-bar').each(function() {
                jQuery(this).find('.progress-content').animate({
                    width: jQuery(this).attr('data-percentage')
                }, 2000);
                jQuery(this).find('.progress-mark').animate({
                    left: jQuery(this).attr('data-percentage')
                }, {
                    duration: 2150,
                    step: function(now, fx) {
                        var data = Math.round(now);
                        jQuery(this).find('.percent').html(data + '%');
                    }
                });
            });
        }, {
            offset: '90%'
        });
    }



    //Portfolio Filtering
    var ProjMli = $('.portfolio-menu li');
    var ProjGrid = $('.portfolio-grid');
    ProjMli.on('click', function() {
        ProjMli.removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        ProjGrid.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
    });



    // Fancybox Popup
    $('.fancybox').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        padding: 0,
        closeBtn: true,
        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {},
            overlay: {
                locked: false
            }
        }
    });

    $(".fancybox-single").fancybox({
        openEffect  : 'none',
        closeEffect : 'none'
    });

    $(".various").fancybox({
        'padding': 0,
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'fade',
        closeEffect: 'fade'
    });


    // Slick
    $('.one-item').slick({
        dots: true,
        arrows: false,
    });


    // Scroll To Top
    $.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

})(jQuery);


// Loading Portfolios
jQuery(window).on('load', function() {
    var preeLoad = jQuery('#loading');
    preeLoad.fadeOut(1000);
    var IsoGriddoload = jQuery('.portfolio-grid');
    IsoGriddoload.isotope({
        itemSelector: '.grid-item',
        masonryHorizontal: {
            rowHeight: 100
        }
    });
});