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



//头部结束
// /************************top按钮**********************************/
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
})
// /************************top按钮结束**********************************/
    // $('.btn1>img').click(function(){
    //     $(this).css('border','1px solid green ');
    //     console.log(1)
    // })

//************************tab菜单开始**********************************/
$('.erji ol li').mouseover(function(){
    $(this).addClass('shou').siblings().removeClass('shou');
    $(this).css('display','block');
    // console.log($(this));
});
$('.erji ol li').mouseout(function(){
    $(this).removeClass('shou');
    // console.log($(this));
});
$('.erji ol li').click(function(){
    $(this).addClass('show').siblings().removeClass('show');
    var _this = $(this).index();
    // console.log(_this);
    $('.d>div:nth-child('+(_this+1)+')').addClass('go').siblings().removeClass('go');
});

// /************************tab菜单结束**********************************/

// /***********************点击放大的图片开始*****************************/
var s1 = $('.js span').text();

$('.tp2>a>img').click(function(){
    $('.tp22').css({'height':'650px','width':'90%'});
    s1=2;
    $('.js span').text(s1);
    $('.big>img').attr('src','../images/news_download/big'+s1+'.jpg');
    $('.big>img').css('width','60%');
});
$('.tp3>a>img').click(function(){
    $('.tp22').css({'height':'650px','width':'90%'});
    s1=3;
    $('.js span').text(s1);
    $('.big>img').attr('src','../images/news_download/big'+s1+'.jpg');
    $('.big>img').css('width','60%');
});
$('.tp1>a>img').click(function(){

    $('.tp22').css({'height':'650px','width':'90%'});
    s1=1;
    $('.js span').text(s1);
    $('.big>img').attr('src','../images/news_download/big'+s1+'.jpg');
    $('.big>img').css('width','30%');
});


// 右边
$('.n2 a img').click(function(){
    s1++;
    if(s1>3){
        s1=1;
    }
    // console.log(s1);
// $('.big img').src='images/big'+s1+'.jpg';

    $('.js span').text(s1);
    $('.big>img').attr('src','../images/news_download/big'+s1+'.jpg');
    if(s1==2||s1==3){
        $('.big>img').css('width','60%');
    }else{
        $('.big>img').css('width','30%');

    }
});
// 左边
$('.n1 a img').click(function(){
    s1--;
    if(s1<1){
        s1=3;
    }
    $('.js span').text(s1);
    $('.big>img').attr('src','../images/news_download/big'+s1+'.jpg');
    if(s1==2||s1==3){
        $('.big>img').css('width','60%');
    }else{
        $('.big>img').css('width','30%');

    }
});
$('.js a img').click(function(){
    $(this).parent().parent().parent().css({'height':'0','width':'0'});

});
// /***********************点击放大的图片结束*****************************/



// /***********************提交按钮开始***********************************/

var num = 2;
$('.tj').click(function(){
    var i = $('.commentArea').val();
    // console.log(i);
    if(i == ''){

    }else{

        var cl1 = $('.d1_1').first().clone(true);
        var cl2 = $('.d1_1').first().clone(true);
        var cl3 = $('.d1_1').first().clone(true);
        cl1.find('.content').text(i);
        cl1.find('.d1_2 a').text('自己');
        cl2.find('.content').text(i);
        cl2.find('.d1_2 a').text('自己');
        cl3.find('.content').text(i);
        cl3.find('.d1_2 a').text('自己');
        // console.log(cl1);
        var timer = new Date();
        // console.log(timer);
        var year = timer.getFullYear();
        var month = timer.getMonth()+1;
        var day = timer.getDate();
        var hours = timer.getHours();
        var min = timer.getMinutes();
        var sec = timer.getSeconds();
        if(min<10){
            min = '0'+min;
        }
        if(hours<10){
            hours='0'+hours;
        }
        if(sec<10){
            sec='0'+sec;
        }
        cl1.find('.d1_2 span').text(year+'年'+month+'月'+day+'日'+ +hours+':'+min+':'+sec);
        cl2.find('.d1_2 span').text(year+'年'+month+'月'+day+'日'+ +hours+':'+min+':'+sec);
        cl3.find('.d1_2 span').text(year+'年'+month+'月'+day+'日'+ +hours+':'+min+':'+sec);
        num++;
        var qwe=$('.num').text(num);
        $('.commentArea').val('');
    }
        $('.d1').prepend(cl1);
        $('.d2').prepend(cl2);
        $('.d3').prepend(cl3);
         // console.log(cl1);

        // console.log($('.d2').text(''));
        // $('.d3').text('');


});

// /***********************提交按钮结束***********************************/

//顶部设置
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