function slide(){

    var wid = 0; //슬라이드 가로값(브라우저100%)
    var i = 0; //현재 인덱스
    var slide_length = 0;//슬라이드,인디케이터의 갯수(인덱스)

    //초기화
    function init(){
        wid = $(".slide").width(); //브라우저의 너비(100%)
        i = $(".img-indi > li.indi-on").index();//인디케이터(on)의 인덱스
        slide_length = $(".img-indi>li").length;//인디케이터의 갯수
    }

    //슬라이드 실행(왼쪽이동,인디케이터가 활성화 되는 상태)
    function slideMove(){
        $(".img-panel").animate({"margin-left": -wid * i});
        $(".img-indi > li").removeClass("indi-on");
        $(".img-indi > li").eq(i).addClass("indi-on");
    }

    //자동 실행(진짜 이동, 진짜 활성화-인덱스를 찾아주는 함수)
    function autoMove(){
        setInterval(function(){
            if(i== slide_length - 1){
                i = 0;
            }else{
                i++;
            }
            slideMove();
        },4000);
    }
    //인디케이터를 클릭했을 때(인덱스가 일치되서 활성화)
    function indicator(){
        $(".img-indi>li").click(function(){
            i = $(this).index();
            slideMove();
        });
    }
    //화면크기 재설정
    function autoResize(){
        $(window).resize(function(){
            init();
            $(".img-panel").animate({"margin-left": -wid * i});
        });
    };

    init();
    autoMove();
    indicator();
    autoResize();
}

$(document).ready(function(){
    slide();
});


// nav
$(function(){
    $(".gnb").on("mouseover focus", function(){
        $(".sub-menu").show()
        $("#header").addClass("menu-bg")
    });

    $(".gnb").on("mouseout blur", function(){
        $(".sub-menu").hide()
        $("#header").removeClass("menu-bg")
    });
});



//contents 1 hover 고양이 등장
$(function(){
    $(".cont1-left > ul > li").hover(function(){

        var i = Math.floor(Math.random()*5);
        var iconImages = new Array();


        iconImages[0]='<img src="http://www.caffebene.co.kr/images/common/cat1.png" class="hovercat">';
        iconImages[1]='<img src="http://www.caffebene.co.kr/images/common/cat2.png" class="hovercat">';
        iconImages[2]='<img src="http://www.caffebene.co.kr/images/common/cat3.png" class="hovercat">';
        iconImages[3]='<img src="http://www.caffebene.co.kr/images/common/cat4.png" class="hovercat">';
        iconImages[4]='<img src="http://www.caffebene.co.kr/images/common/cat5.png" class="hovercat">';


        $(this).append(iconImages[i]);
    },function(){
        $(".hovercat").remove();
    }
    );
});

//icon li를 hover 했을 때 html로 img태그가 작성되는 것




    // $(function(){

    //     var num = 0;
    
    //     setInterval(function(){
    //         if(num<4){ //이미지가 3개 이므로 2
    //             num++;
    //         }else{
    //             num=0;
    //         }
    
    //         var slideMove = num * (-258)+"px";
    
    //         $(".slides").animate({'marginLeft':slideMove},500) 
    //     },3000);
    // });
    
    $(function(){
        $(".top-btn").click(function(){
            $("html, body").animate({
                scrollTop : 0
            },700);
            return false;
        });
    });
