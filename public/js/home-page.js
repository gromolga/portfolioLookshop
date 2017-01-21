$(document).ready(function() {
    $(".tab_content .owl-carousel").owlCarousel({
        loop : true,
        center: true,
        autoWidth: true,
        autoplay: true,
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
        autoplay: true,
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
});



