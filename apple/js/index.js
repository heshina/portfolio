$(document).ready(function(){

    /*global navigation bar mobile menu*/
    // $("#gnb2 .fa-bars").click(function(){
    //     $("#gnb2-list").slideToggle();
    // });   
    $("#gnb2").delegate(".fa-bars","click",function(){   
        console.log($(this)); 
        $("#gnb2-list").slideToggle(); 
        $(this).removeClass("fa-bars");
        $(this).addClass("fa-times");                        
    });            
    $("#gnb2").delegate(".fa-times","click",function(){   
        console.log($(this)); 
        $("#gnb2-list").slideToggle(); 
        $(this).removeClass("fa-times");
        $(this).addClass("fa-bars");                        
    }); 

    /*slick slider*/
    $( '#content6 .slider' ).slick( {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        centerPadding:"300px",
        arrow:true,
        pauseOnFocus: false, 
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,                  
            }
            }
        ]
    });
    $( '#content6-1 .slider' ).slick( {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        centerPadding:"120px",
        arrow:true,
        pauseOnFocus: false, 
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,                  
            }
            }
        ]
    });

    /*footer mobile 이벤트 처리*/
    $("#btn1").on("click",function(){
        $("#btn1+ul").slideToggle();
    });
    $("#btn2").on("click",function(){
        $("#btn2+ul").slideToggle();
    });
    $("#btn3").on("click",function(){
        $("#btn3+ul").slideToggle();
    });
    $("#btn4").on("click",function(){
        $("#btn4+ul").slideToggle();
    });
    $("#btn5").on("click",function(){
        $("#btn5+ul").slideToggle();
    });
    $("#btn6").on("click",function(){
        $("#btn6+ul").slideToggle();
    });
    $("#btn7").on("click",function(){
        $("#btn7+ul").slideToggle();
    });
    $("#btn8").on("click",function(){
        $("#btn8+ul").slideToggle();
    });
    $("#btn9").on("click",function(){
        $("#btn9+ul").slideToggle();
    });
    $("#btn10").on("click",function(){
        $("#btn10+ul").slideToggle();
    });
});