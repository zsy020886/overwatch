//-------------主导航下拉效果--------------------------

$(".mainNav-menu-xiala").click(function () {
    $(this).siblings().find(".mainNav-second").removeClass("mainNav-second-active");
    $(this).siblings().find(".mainNav-arrow").removeClass("mainNav-arrow-active");
    $(this).siblings().find(".mainNav-title").removeClass("mainNav-title-active");

    $(this).find(".mainNav-arrow").toggleClass("mainNav-arrow-active");
    $(this).find(".mainNav-second").toggleClass("mainNav-second-active");

    $(this).find(".mainNav-title").toggleClass("mainNav-title-active");

});

$(".mainNav-menu-xiala li").mouseenter(function () {
    $(this).find(".mainNav-second-icon").addClass("mainNav-second-icon-active");
});
$(".mainNav-menu-xiala li").mouseleave(function () {
    $(this).find(".mainNav-second-icon").removeClass("mainNav-second-icon-active");
});


$(".mainNav-menu>li:not('.mainNav-menu-xiala')").click(function () {
    $(this).addClass("mainNav-menu-xiala-active");
    $(this).siblings(":not('.mainNav-menu-xiala')").removeClass("mainNav-menu-xiala-active");
});
//----------------浏览器尺寸变化--------------------------------



$(window).resize(function () {
    if($(window).width()>=950){
        var shopWidth=$(".shop-tao img").width()*2;
        $(".shop-tao img").css("height",shopWidth);
    }
    else {
        var shopWidth=$(".shop-tao img").width()*2;
        $(".shop-tao img").css("height",shopWidth);
    }

    if($(window).width()>=748){
        if($(window).scrollTop()>=65){
            $(".mainNav").css("top","0px");
            $(".mainNav").css("left","0px");
            $(".mainNav").css("right","0px");
        }else {
            $(".mainNav").css("top","65px");
            $(".mainNav").css("left","20px");
            $(".mainNav").css("right","20px");
        }
    }else {
        $(".mainNav").css("top","0px");
        $(".mainNav").css("left","0px");
        $(".mainNav").css("right","0px");
    }

});
//----------------主导航固定--------------------------------
$(window).scroll(function () {
    if($(window).width()>=748){
        if($(window).scrollTop()>=65){
            $(".mainNav").css("top","0px");
            $(".mainNav").css("left","0px");
            $(".mainNav").css("right","0px");
        }else {
            $(".mainNav").css("top","65px");
            $(".mainNav").css("left","20px");
            $(".mainNav").css("right","20px");
        }
    }else {
        $(".mainNav").css("top","0px");
        $(".mainNav").css("left","0px");
        $(".mainNav").css("right","0px");
    }

});
//------------二级菜单-------------------
$(".second-menu>ul>li").mouseenter(function () {
    $(this).find("span").show();
    $(this).siblings().find("span").hide();
    $(".second-menu>ul>li").eq(1).find("span").show();
});
$(".second-menu>ul>li").mouseleave(function () {
    $(this).find("span").hide();
    $(this).siblings().find("span").hide();
    $(".second-menu>ul>li").eq(1).find("span").show();
});



$(".mainNav-right-media-l").click(function () {
    $(".second-menu").css("left","0");
    $(".mask").css("display","block");
    $("body").css("overflow","hidden");
    $(".second-menu2").css("right","-300px");
});

$(".mainNav-right-media-r").click(function () {
    $(".second-menu2").css("right","0");
    $(".mask").css("display","block");
    $("body").css("overflow","hidden");
    $(".second-menu").css("left","-300px");
});

var secondHeight=$(window).height();
$(".second-menu").css("height",secondHeight);
$(".second-menu2").css("height",secondHeight);

$(window).resize(function () {
    $(".second-menu").css("left","-320px");
    $(".second-menu2").css("right","-320px");
    var secondHeight=$(window).height();
    $(".second-menu").css("height",secondHeight);
    $(".second-menu2").css("height",secondHeight);
    $(".mask").css("display","none");

});

$(".second-menu>ul>li").click(function () {
    $(this).siblings().find(".second-menu-icon").removeClass("second-menu-icon-active");
    $(this).find("ul").slideToggle();
    $(this).find(".second-menu-icon").toggleClass("second-menu-icon-active");
    $(this).siblings().find("ul").slideUp();
});

$(".second-menu2>ul>li>ul").hide();
$(".second-menu2>ul>li").click(function () {
    $(this).siblings().find(".second-menu-icon").removeClass("second-menu-icon-active");
    $(this).siblings().find(".aaa").removeClass("s-menu2-list");
    $(this).find("ul").slideToggle();
    $(this).find(".aaa").toggleClass("s-menu2-list");
    $(this).find(".second-menu-icon").toggleClass("second-menu-icon-active");
    $(this).siblings().find("ul").slideUp();
});


$(".second-menu-close").click(function () {
    $(".second-menu").css("left","-320px");
    $(".mask").css("display","none");
    $("body").css("overflow-y","scroll");
    $(".second-menu2").css("right","-320px");
});

