

$(document).ready(function(){

    var prevScrollpos = window.scrollY;
    
    $(this).scroll(function() {
        if ($(this).scrollTop() >  100) {
            var currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
                $(".header").addClass("header-move");
                $(".header").css("transform", "translateY(0px)");
            } else {
                $(".header").css("transform", "translateY(-100px)");
            }
            prevScrollpos = currentScrollPos;

        } else if($(this).scrollTop() <= 10) {
            $(".header").removeClass("header-move");
        }
        prevScrollpos = window.scrollY;
    });

    const items = document.querySelectorAll(".animate-here");
    const observer = new IntersectionObserver(
        entries => {
        entries.forEach(entry => {
            // entry.target.classList.toggle("animate__animated animate__backInUp", entry.isIntersecting);
            if(entry.isIntersecting) {
                // entry.target.classList.add(entry.target.getAttribute("data-ani"))
                entry.target.classList.add("start-animate")
                observer.unobserve(entry.target)
            }
        })
    },
    {
        threshold: 0.3,
    })

    items.forEach(item=>{
        observer.observe(item);
    });

    $(".share-btn").click(function(){ 
        
        var sharetext = $("title").text();
        var shareurl = window.location.href;

        if (navigator.share && typeof sharetext != "undefined" && typeof shareurl != "undefined" && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            navigator.share({
                title: sharetext,
                text: sharetext,
                url: shareurl
            });
        } else {
            $(this).next(".share-list").toggle();
        }
    }); 

    var owl = $(".stories-slider .slider")

    if ( $(window).width() < 1181 ) {
        owl.trigger('destroy.owl.carousel');
        owl.addClass('off');
    } 
    else{
        owl.owlCarousel({
        margin:25,
        loop:false,
        autoplay:false,
        nav:false,
        dots:true,  

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        
        lazyLoad:true,

        responsive:{
            0:{
                items:2.3,
                slideBy:1
            },
            600:{
                items:3.5,
                slideBy:1
            },
            1000:{
                items:4.5,
                slideBy:4
            },
            1200:{
                items:4,
                nav:true,
                dots: false,
                navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
                slideBy:4
            }
        }
    });
    }
    

    
    let x =  818;
    let y = 577;
    var newwidth = 0;
    var newHeight = 0
    if($( window ).width() > 817){
        newwidth = (x / y) * ($(window).height() - 150);
        newHeight = $(window).height() - 150
        $(".map .scroll-images").css("width", newwidth)
        $(".map .scroll-images").css("height", newHeight)

    }
    else{
        newwidth = $(window).width() - 0;
        newHeight = (y / x) * ($(window).width() - 0)
        $(".map .scroll-images").css("width", newwidth)
        $(".map .scroll-images").css("height", newHeight)
    }
    // else{
    //     var newwidth = $(window).width() - 0;
    //     var newHeight = (y / x) * ($(window).width() - 0)
    //     $(".map .scroll-images").css("width", "100%")
    //     $(".map .scroll-images").css("height", "100%")
    // }
    // if($( window ).width() > 570){
    //     $(".map .scroll-images").css("width", "100%")
    //     $(".map .scroll-images").css("height", "500px")
    // }
    var scrollStep = 150;
     if($(window).width() < 570){
        scrollStep = 75
    }


    const flowOneTop = $("#flow-one").offset().top;
    var f1imgs = document.querySelectorAll('#flow-one img')
    var flimgsStep = 0;
    var startScroll = flowOneTop;
    var flowone_scrollHeight = startScroll + $("#flow-one").outerHeight()
    var f1Indicators = $('#flow-one .indicator .progress-bar')
    var f1IndicatorsStep = 100 / (f1imgs.length - 4);


    $("#flow-one").css("height", "calc(100vh + "+f1imgs.length*scrollStep+"px)")
    $("#flow-one .play-area").css("height", "100vh")

    if($(window).width() < 570){
        $("#flow-one").css("height", newHeight + f1imgs.length*scrollStep+"px)")
        $("#flow-one .play-area").css("height", "500px")
    }
    

    addEventListener("scroll", (event) => {
        if(window.scrollY > startScroll && window.scrollY < (startScroll + $("#flow-one").outerHeight())){
            startScroll = startScroll + scrollStep;
            flimgsStep++;
            if(flimgsStep != 0){
                f1imgs[flimgsStep].classList.remove("show");
            }
        }
        else{
            startScroll = startScroll - scrollStep;
            flimgsStep--;
            if(flimgsStep != 0){
                f1imgs[flimgsStep].classList.add("show");
            }
            // if(flimgsStep > 3){
            //     f1Indicators[flimgsStep - 4].classList.remove("disabled")
            // }
        }
    });

    addEventListener("scroll", (event) => {
        if(window.scrollY > (flowOneTop - 50)){
            if(!$(".scroll-tip").hasClass("done")){
                $(".scroll-tip").addClass("done")
                $(".scroll-tip").addClass("show")
                setTimeout(function () { 
                    $(".scroll-tip").removeClass("show");
                }, 2000);
            }
        }
        // else{
        //     $(".scroll-tip").removeClass("show")
        // }
    });

    



    const flowTwoTop = $("#flow-two").offset().top;
    var f2imgs = document.querySelectorAll('#flow-two img')
    var f2imgsStep = 0;
    var start2Scroll = flowTwoTop;
    var flowtwo_scrollHeight = start2Scroll + $("#flow-two").outerHeight()
    var f2Indicators = document.querySelectorAll('#flow-two .indicator span')


    $("#flow-two").css("height", "calc(100vh + "+f2imgs.length*scrollStep+"px)")
    $("#flow-two .play-area").css("height", "100vh")

    if($(window).width() < 570){
        $("#flow-two").css("height", "calc(500px + "+f2imgs.length*scrollStep+"px)")
        $("#flow-two .play-area").css("height", "500px")
    }

    addEventListener("scroll", (event) => {
        if(window.scrollY > start2Scroll && window.scrollY < (start2Scroll + $("#flow-two").outerHeight())){
            start2Scroll = start2Scroll + scrollStep;
            // alert("2")
            f2imgsStep++;
            if(f2imgsStep > 1){
                f2imgs[f2imgsStep].classList.remove("show");
            }
            if(f2imgsStep > 3){
                f2Indicators[f2imgsStep - 4].classList.add("disabled")
            }
        }
        else{
            start2Scroll = start2Scroll - scrollStep;
            f2imgsStep--;
            if(f2imgsStep > 1){
                f2imgs[f2imgsStep].classList.add("show");
            }
            if(flimgsStep > 3){
                f2Indicators[f2imgsStep - 4].classList.remove("disabled")
            }
        }
    });
   // alert(flowTwoTop)

    


    const flowThrTop = $("#flow-three").offset().top;
    var f3imgs = document.querySelectorAll('#flow-three img')
    var f3imgsStep = 0;
    var start3Scroll = flowThrTop;
    var flowtwo_scrollHeight = start3Scroll + $("#flow-three").outerHeight()
    var f3Indicators = document.querySelectorAll('#flow-three .indicator span')

    

    $("#flow-three").css("height", "calc(100vh + "+f3imgs.length*scrollStep+"px)")
    $("#flow-three .play-area").css("height", "100vh")

    
    if($(window).width() < 570){
        $("#flow-three").css("height", "calc(500px + "+f3imgs.length*scrollStep+"px)")
        $("#flow-three .play-area").css("height", "500px")
    }

    // alert(($("#flow-two img:first-child").height()/1922)*1357)
   
    
  
    addEventListener("scroll", (event) => {
        if(window.scrollY > start3Scroll && window.scrollY < (start3Scroll + $("#flow-three").outerHeight())){
            start3Scroll = start3Scroll + scrollStep;
            f3imgsStep++;
            if(f3imgsStep > 1){
                f3imgs[f3imgsStep].classList.remove("show");
            }
            if(f3imgsStep > 3){
                f3Indicators[f3imgsStep - 4].classList.add("disabled")
            }
        }
        else{
            start3Scroll = start3Scroll - scrollStep;
            f3imgsStep--;
            if(f3imgsStep > 1){
                f3imgs[f3imgsStep].classList.add("show");
            }
            if(flimgsStep > 3){
                f3Indicators[f3imgsStep - 4].classList.remove("disabled")
            }
        }
    });



}); 

$(document).mouseup(function(e) {
    var container = $(".share-btn");
    var maps = $(".see-map, .map-list li");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".share-list").slideUp();
    }
    if (!maps.is(e.target) && maps.has(e.target).length === 0) {
        $(".see-map").removeClass("opened");
    }
});