$(function () {
    init();
    /***************************************/
    function init() {
        toTop();
    }


    $(".close").on("click", function () {
        $(this).parent(".closeBox").parent(".appBar").hide();
    });
    function toTop() {
        $(".toTop").fadeOut();
        $(window).scroll(function () {
            let scrollValue = $(window).scrollTop();
            scrollValue > 100 ? $(".toTop").fadeIn() : $(".toTop").fadeOut();
        })
        $(".returnTop").click(function () {
            $('body,html').animate({'scrollTop': 0}, 200);
        });
    }


});