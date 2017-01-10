$(document).ready(function() {
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
        if($(this).hasClass("active")) {
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
    $(".bx-pager-link").click(function () {
        $(".bx-pager-link").toggleClass("active");
    });
    $(".tab_content .owl-carousel").owlCarousel({
        loop : true,
        center: true,
        autoWidth: true,
        // autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                nav: false
            },
            640:{
                nav: true
            }
        }
    });

    var tabs = $(".tabs .tab");

    tabs.click(function () {
        var content = $(".tab_content"),
            index = tabs.index(this),
            tabsList = ['tab-1', 'tab-2', 'tab-3'];
        if ($(this).hasClass("active")){
            tabs.toggleClass("responsive-hide");
        } else {
            content.removeClass("active");
            content.eq(index).addClass("active");
            tabs.removeClass("active");
            $(this).addClass("active");
            var i;
            for (i = 0; i < tabsList.length; i++){
                tabs.removeClass(tabsList[i]);
            }
            for (i = 0; i < tabs.length; i++){
                var tabElement = $(tabs[i]);
                if (!tabElement.hasClass("active")){
                    tabElement.addClass(tabsList.shift());
                }
            }
            tabs.addClass("responsive-hide");
        }
    })
    $(".carousel").owlCarousel({
        loop : true,
        items: 10,
        margin: 35,
        // autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        autoWidth: true,
    });
    $(".brands-carousel").owlCarousel({
        loop : true,
        items: 7,
        margin: 35,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        autoWidth: true,
    });
    $(".footer-burger-menu").click(function () {
        $(this).parent().toggleClass("mobile-footer-menu")
    })
});



