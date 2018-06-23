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
//----------------------------------------------------------------------


//----------------------------------------------------------------------
node = {
    abscissa: function (obj) {
        return obj.offset().left - parseInt(obj.css("margin-left").replace("px", ""));
    },
    ordinate: function (obj) {
        return obj.offset().top - parseInt(obj.css("margin-top").replace("px", ""));
    },

};










var flag=0,count1=0,count2=0,count3=0,count4=0;
var oldLiAll=$(".hero-person li");
var newLiAll=oldLiAll.clone(true,true);

$(".hero-console li").eq(0).addClass("li-active");
$(".hero-console li").eq(0).click(function (e) {
    flag=0; count1=0;count2=0;count3=0;count4=0;
    e.preventDefault();

    //--------------------------------

    $(this).addClass("li-active");
    $(this).siblings().removeClass("li-active");

//-----所有的li 绝对定位--------------

        newLiAll.appendTo($(".hero-person")).each(function (index,ele) {
            $(ele).css({ "position": "absolute", "top": node.ordinate(oldLiAll.eq(index)), "left": node.abscissa(oldLiAll.eq(index)) });
            $(ele).find("span").removeClass("span-active-b");
            $(ele).find("a").removeClass("a-active");
            $(ele).find(".hp-li-mask").removeClass("hp-li-mask-hui");
        });
        oldLiAll.css("opacity",0);

});


$(".hero-console li").eq(1).click(function (e) {
    flag=1;count2=0;count3=0;count4=0;
    e.preventDefault();
    if(count1==0){

        count1=1;
  //--------------------------------

        $(this).addClass("li-active");
        $(this).siblings().removeClass("li-active");
//-----所有的li 绝对定位--------------

        newLiAll.appendTo($(".hero-person")).each(function (index,ele) {
            $(ele).css({ "position": "absolute", "top": node.ordinate(oldLiAll.eq(index)), "left": node.abscissa(oldLiAll.eq(index)) });
            $(ele).find("span").removeClass("span-active-b");
            $(ele).find("a").removeClass("a-active");
            $(ele).find(".hp-li-mask").removeClass("hp-li-mask-hui");
        });
        oldLiAll.css("opacity",0);

        var temp1=newLiAll.find(".hero-person-icon1").parent().parent().parent();
        $(temp1).each(function (index,ele) {
            //-------防御往前走--------------
            $(ele).animate({  top: node.ordinate(oldLiAll.eq(index)), left: node.abscissa(oldLiAll.eq(index)) }, 500, function () {
                //-----------突击变色---------------

                $(ele).find("span").addClass("span-active-b");
                $(ele).find("a").addClass("a-active");
                $(ele).find(".hp-li-mask").removeClass("hp-li-mask-hui");

            });

        });

        setTimeout(function () {
            temp1.siblings().find(".hp-li-mask").addClass("hp-li-mask-hui");
        },480);



    }

});


$(".hero-console li").eq(2).click(function (e) {
    flag=2;count1=0;count3=0;count4=0;
    e.preventDefault();
    if(count2==0){

        count2=1;
 //--------------------------------

        $(this).addClass("li-active");
        $(this).siblings().removeClass("li-active");
//-----所有的li 绝对定位--------------

        newLiAll.appendTo($(".hero-person")).each(function (index,ele) {
            $(ele).css({ "position": "absolute", "top": node.ordinate(oldLiAll.eq(index)), "left": node.abscissa(oldLiAll.eq(index)) });
            $(ele).find("span").removeClass("span-active-b");
            $(ele).find("a").removeClass("a-active");
            $(ele).find(".hp-li-mask").removeClass("hp-li-mask-hui");
        });
        oldLiAll.css("opacity",0);



        var temp2=newLiAll.find(".hero-person-icon2").parent().parent().parent();
        var temp1=newLiAll.find(".hero-person-icon1").parent().parent().parent();
        $(temp2).each(function (index,ele) {
            //-------防御往前走--------------
            $(ele).animate({  top: node.ordinate(oldLiAll.eq(index)), left: node.abscissa(oldLiAll.eq(index)) }, 500, function () {
                //-----------防御变色---------------

                $(ele).find("span").addClass("span-active-b");
                $(ele).find("a").addClass("a-active");
                $(ele).find(".hp-li-mask").removeClass("hp-li-mask-hui");

            });

        });

        setTimeout(function () {
            temp2.siblings().find(".hp-li-mask").addClass("hp-li-mask-hui");
        },480);

        //-------其他往后走--------------
        $(temp1).each(function (index,ele) {
            index+=6;
            $(ele).animate({  top: node.ordinate(oldLiAll.eq(index)), left: node.abscissa(oldLiAll.eq(index)) },500);
        });
    }

});



$(".hero-console li").eq(3).click(function (e) {
    flag=3;count1=0;count2=0;count4=0;
    e.preventDefault();
    if(count3==0){

        count3=1;
//--------------------------------

        $(this).addClass("li-active");
        $(this).siblings().removeClass("li-active");
//-----所有的li 绝对定位--------------

        newLiAll.appendTo($(".hero-person")).each(function (index,ele) {
            $(ele).css({ "position": "absolute", "top": node.ordinate(oldLiAll.eq(index)), "left": node.abscissa(oldLiAll.eq(index)) });
            $(ele).find("span").removeClass("span-active-b");
            $(ele).find("a").removeClass("a-active");
            $(ele).find(".hp-li-mask").removeClass("hp-li-mask-hui");
        });
        oldLiAll.css("opacity",0);


        var temp3=newLiAll.find(".hero-person-icon3").parent().parent().parent();
        var temp2=newLiAll.find(".hero-person-icon2").parent().parent().parent();
        var temp1=newLiAll.find(".hero-person-icon1").parent().parent().parent();
        $(temp3).each(function (index,ele) {
            //-------重装往前走--------------
            $(ele).animate({  top: node.ordinate(oldLiAll.eq(index)), left: node.abscissa(oldLiAll.eq(index)) }, 500, function () {
                //-----------重装变色---------------

                $(ele).find("span").addClass("span-active-b");
                $(ele).find("a").addClass("a-active");
                $(ele).find(".hp-li-mask").removeClass("hp-li-mask-hui");

            });

        });

        setTimeout(function () {
            temp3.siblings().find(".hp-li-mask").addClass("hp-li-mask-hui");
        },480);


        //-------其他往后走--------------
        $(temp2).each(function (index,ele) {
            index+=14;
            $(ele).animate({  top: node.ordinate(oldLiAll.eq(index)), left: node.abscissa(oldLiAll.eq(index)) },500);
        });
        $(temp1).each(function (index,ele) {
            index+=6;
            $(ele).animate({  top: node.ordinate(oldLiAll.eq(index)), left: node.abscissa(oldLiAll.eq(index)) },500);
        });
    }

});



$(".hero-console li").eq(4).click(function (e) {
    flag=4;count1=0;count2=0;count3=0;
    e.preventDefault();
    if(count4==0){

        count4=1;
 //--------------------------------

        $(this).addClass("li-active");
        $(this).siblings().removeClass("li-active");
//-----所有的li 绝对定位--------------

        newLiAll.appendTo($(".hero-person")).each(function (index,ele) {
            $(ele).css({ "position": "absolute", "top": node.ordinate(oldLiAll.eq(index)), "left": node.abscissa(oldLiAll.eq(index)) });
            $(ele).find("span").removeClass("span-active-b");
            $(ele).find("a").removeClass("a-active");
            $(ele).find(".hp-li-mask").removeClass("hp-li-mask-hui");
        });
        oldLiAll.css("opacity",0);

        var temp4=newLiAll.find(".hero-person-icon4").parent().parent().parent();
        var temp3=newLiAll.find(".hero-person-icon3").parent().parent().parent();
        var temp2=newLiAll.find(".hero-person-icon2").parent().parent().parent();
        var temp1=newLiAll.find(".hero-person-icon1").parent().parent().parent();
        $(temp4).each(function (index,ele) {
            //-------支援往前走--------------
            $(ele).animate({  top: node.ordinate(oldLiAll.eq(index)), left: node.abscissa(oldLiAll.eq(index)) }, 500, function () {
                //-----------支援变色---------------

                $(ele).find("span").addClass("span-active-b");
                $(ele).find("a").addClass("a-active");
                $(ele).find(".hp-li-mask").removeClass("hp-li-mask-hui");

            });

        });
        setTimeout(function () {
            temp4.siblings().find(".hp-li-mask").addClass("hp-li-mask-hui");
        },480);



        //-------其他往后走--------------
        $(temp3).each(function (index,ele) {
            index+=21;
            $(ele).animate({  top: node.ordinate(oldLiAll.eq(index)), left: node.abscissa(oldLiAll.eq(index)) },500);
        });
        $(temp2).each(function (index,ele) {
            index+=15;
            $(ele).animate({  top: node.ordinate(oldLiAll.eq(index)), left: node.abscissa(oldLiAll.eq(index)) },500);
        });
        $(temp1).each(function (index,ele) {
            index+=7;
            $(ele).animate({  top: node.ordinate(oldLiAll.eq(index)), left: node.abscissa(oldLiAll.eq(index)) },500);
        });
    }

});


//-----------------------------------------------------------------

newLiAll.mouseenter(function () {

    console.log(100);
    $(this).find(".hero-person-icon1").addClass("hero-person-icon1-active");
    $(this).find(".hero-person-icon2").addClass("hero-person-icon2-active");
    $(this).find(".hero-person-icon3").addClass("hero-person-icon3-active");
    $(this).find(".hero-person-icon4").addClass("hero-person-icon4-active");
    $(this).css({
        transform: 'scale(1.15,1.15)',
        zIndex: '10'
    });
    $(this).find("span").addClass("span-active-w");
    $(this).find(".hp-li-mask").removeClass("hp-li-mask-hui");
    $(this).find("a").removeClass("a-active");
});


newLiAll.mouseleave(function () {
    $(this).css({
        transform: 'scale(1,1)',
        zIndex: '5'
    });
    $(this).find(".hero-person-icon1").removeClass("hero-person-icon1-active");
    $(this).find(".hero-person-icon2").removeClass("hero-person-icon2-active");
    $(this).find(".hero-person-icon3").removeClass("hero-person-icon3-active");
    $(this).find(".hero-person-icon4").removeClass("hero-person-icon4-active");
    $(this).find("span").removeClass("span-active-w");
    $(this).find(".hp-li-mask").addClass("hp-li-mask-hui");
    if(flag==0){
        $(this).find(".hp-li-mask").removeClass("hp-li-mask-hui");
    }
    if(flag==1){
        $(this).find(".hero-person-icon1").parent().next().removeClass("hp-li-mask-hui");
        $(this).find(".hero-person-icon1").parent().parent().addClass("a-active");
    }
    if(flag==2){
        $(this).find(".hero-person-icon2").parent().next().removeClass("hp-li-mask-hui");
        $(this).find(".hero-person-icon2").parent().parent().addClass("a-active");
    }
    if(flag==3){
        $(this).find(".hero-person-icon3").parent().next().removeClass("hp-li-mask-hui");
        $(this).find(".hero-person-icon3").parent().parent().addClass("a-active");
    }
    if(flag==4){
        $(this).find(".hero-person-icon4").parent().next().removeClass("hp-li-mask-hui");
        $(this).find(".hero-person-icon4").parent().parent().addClass("a-active");
    }
});

oldLiAll.mouseenter(function () {

    console.log(100);
    $(this).find(".hero-person-icon1").addClass("hero-person-icon1-active");
    $(this).find(".hero-person-icon2").addClass("hero-person-icon2-active");
    $(this).find(".hero-person-icon3").addClass("hero-person-icon3-active");
    $(this).find(".hero-person-icon4").addClass("hero-person-icon4-active");
    $(this).css({
        transform: 'scale(1.15,1.15)',
        zIndex: '10'
    });
    $(this).find("span").addClass("span-active-w");
    $(this).find(".hp-li-mask").removeClass("hp-li-mask-hui");
    $(this).find("a").removeClass("a-active");
});


oldLiAll.mouseleave(function () {
    $(this).css({
        transform: 'scale(1,1)',
        zIndex: '5'
    });
    $(this).find(".hero-person-icon1").removeClass("hero-person-icon1-active");
    $(this).find(".hero-person-icon2").removeClass("hero-person-icon2-active");
    $(this).find(".hero-person-icon3").removeClass("hero-person-icon3-active");
    $(this).find(".hero-person-icon4").removeClass("hero-person-icon4-active");
    $(this).find("span").removeClass("span-active-w");
    $(this).find(".hp-li-mask").addClass("hp-li-mask-hui");
    if(flag==0){
        $(this).find(".hp-li-mask").removeClass("hp-li-mask-hui");
    }
    if(flag==1){
        $(this).find(".hero-person-icon1").parent().next().removeClass("hp-li-mask-hui");
        $(this).find(".hero-person-icon1").parent().parent().addClass("a-active");
    }
    if(flag==2){
        $(this).find(".hero-person-icon2").parent().next().removeClass("hp-li-mask-hui");
        $(this).find(".hero-person-icon2").parent().parent().addClass("a-active");
    }
    if(flag==3){
        $(this).find(".hero-person-icon3").parent().next().removeClass("hp-li-mask-hui");
        $(this).find(".hero-person-icon3").parent().parent().addClass("a-active");
    }
    if(flag==4){
        $(this).find(".hero-person-icon4").parent().next().removeClass("hp-li-mask-hui");
        $(this).find(".hero-person-icon4").parent().parent().addClass("a-active");
    }
});