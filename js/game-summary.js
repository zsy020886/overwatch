
    var falst=0;

    $('.nav-ul li').on('click',function(){
        falst = 1;
        var index=$(this).index();
        console.log(index);
        console.log(this);
        var top=$('section').eq(index).offset().top;

        $('body,html').animate({scrollTop:top},'fast',function(){
            falst=0;
        });
        $(this).addClass('active').siblings().removeClass('active');
        console.log(index);
    });

    window.onscroll=function(){
        if(falst==0) {
            var windeoTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(windeoTop>=230){
                $('[id="btn"]').show();
            }else{
                $('[id="btn"]').hide();
            }
            $('section').each(function (index) {
                if (windeoTop >= $(this).offset().top-10) {
                    $('.nav-ul li').removeClass('active').eq(index).addClass('active');
                }
            })
        }
    }
    $('[id="btn"]').click(function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop:0},'fast');
    })



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
    });
    $('.nav-right-div').click(function(){
        if($('.nav_head').css('display')=='none'){
            $('.nav-bottom').css('display','none');
            $('.nav_head').css('display','block');
            $('body').css(' background','rgba(255,255,255,.9)');
        }else{
            $('.nav_head').css('display','none');
        }

    })


