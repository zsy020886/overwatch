//头部开始
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



var falt=true;

$('.box a').on('click',function(){
    var text=$(this).text();
    console.log(text);
    if(falt==false){
        $(this).find('span').css('background-position','-147px -131px');
        $('.nav-bottom').css('display','none');
    }
    if(falt==true){

        if(text=='游戏'){
            $('.nav-bottom').css('display','none');
            $('.nav-bottom').eq(0).css('display','block').next().css('display','none');
            $('.body-div').css('display','block');
        }
        if(text=='电子竞技'){
            $('.nav-bottom').css('display','none');
            $('.nav-bottom').eq(1).css('display','block').prev().css('display','none');
            $('.body-div').css('display','block');
        }



        $(this).find('span').css('background-position','-147px -145px');}
    falt=!falt;
});

$('.animation-delay-1').on({
    'mousemove':function(e){
        e.preventDefault();
        $('.Navbar-esport-sub').css({
            'width':'100%','opacity':'1'
        });
    },
    'mouseout':function(e){
        e.preventDefault();
        $('.Navbar-esport-sub').css({
            'width':'2px','opacity':'0'
        });
    }
})
$('.nav-right-div').click(function(){
    if($('.nav_head').css('display')=='none'){
        $('.nav-bottom').css('display','none');
        $('.nav_head').css('display','block');
        $('body').css(' background','rgba(255,255,255,.9)');
    }else{
        $('.nav_head').css('display','none');
    }

});



//头部结束


window.onscroll=function(){
    var wScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(wScrollTop>270){
        $('.top').css('display','block');
    }else{
        $('.top').css('display','none');
    }
};
$('.top').click(function(){
    $('body,html').animate({scrollTop:0},1000);
});

$('.blog-sidebar-box-lis li').click(function(e){

    e.preventDefault();
    var index=$(this).index();
    var top=$('[data="blog-body"]').eq(index).offset().top;
    $('body,html').animate({scrollTop:top},'fast');
})

$('[id="btn"]').click(function(e){
    e.preventDefault();
    $('body,html').animate({scrollTop:0},'fast');
})


$('.btn').click(function(){
    var plq = $('.plq_1:lt(6)').clone(true);
    $('.row').append($(plq));
   // console.log(row);
});

