$(document).ready(function(){
    var jWindow = $(window);
    var search = $("#search");
    var navBtn =  $(".nav-btn");
    var submenu = $(".submenu");
    var logo = $("#logo");

    $(".static-item").click(function () {
        $(".dropdown-items").toggleClass("hide-dropdown-items");
        console.log(1231);
    });

    $(".search-icon").click(function () {
        $(this).parent().removeClass("disabled")
    });

    search.focusout(function () {
        $(this).parent().addClass("disabled");
        $("#search-result").addClass("disabled");
        $(this).val("");
    });

    search.on("input", function () {
        var resultList = $("#search-result");
        if($(this).val().length>2) {
            resultList.removeClass("disabled");
        }else{
            resultList.addClass("disabled");
        }
    });

    navBtn.click(function () {
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).siblings(".submenu").slideUp(300);
        }else{
            $(".nav-btn").removeClass("active");
            $(this).addClass("active");
            submenu.slideUp(300);
            $(this).siblings(".submenu").slideDown(300);
        }
    });

    $(".media-nav-btn").click(function () {
        $(".main-dropdown-menu").slideToggle(300);
    });

    if (jWindow.width() <= 640 && jWindow.width() >= 365){
        logo.attr("src", logo.data("large"));
    } else {
        logo.attr("src", logo.data("small"));
    }

    jWindow.resize(function () {
        var width = jWindow.width();
        if (width <= 640 && width >= 365){
            logo.attr("src", logo.data("large"));
        } else {
            logo.attr("src", logo.data("small"));
        }
    });

    $(".bxslider").bxSlider();

    function resizeSliderImage(width, slideClassName) {
        var slides = $(slideClassName);
        $.each(slides, function (index, slide) {
            slide = $(slide);
            if (width <= 768){
                slide.attr("src", slide.data("small"));
            } else {
                slide.attr("src", slide.data("large"));
            }
        })
    }
    resizeSliderImage(jWindow.width(), ".slideImg img");
    jWindow.resize(function () {
        resizeSliderImage(jWindow.width(), ".slideImg img");
    })


});



