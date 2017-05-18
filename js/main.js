$(document).ready(function () {
//////////////////////Preloader////////////////////////////////
    $(window).on("load", function () {
        var $preloader = $("#p_prldr"),
            $svg_anm   = $preloader.find(".svg_anm");
        $svg_anm.fadeOut();
        $preloader.delay(500).fadeOut("slow");
    });
//////////////////////Prevent Default////////////////////////////////
    $('#btn-open-filter-form').click(function() {
        event.preventDefault();
    });
    $('.learnMoreAboutProgram').click(function() {
        event.preventDefault();
    });

//////////////////////FIXED NAV////////////////////////////////
    var $menu = $(".fixedslider");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 45 && $menu.hasClass("navbar-relative-top") ){
            $menu.removeClass("navbar-relative-top").addClass("navbar-fixed-top");
        } else if($(this).scrollTop() <= 45 && $menu.hasClass("navbar-fixed-top")) {
            $menu.removeClass("navbar-fixed-top").addClass("navbar-relative-top");
        }
    });
////////////////////////NAVIGATION PANEL TRIGGER////////////////////////////////
    function mainMove() {
        if ($(window).width() < 991){
            $('.menu .leftNav').appendTo('.mobpanelMain');
            $('.panelTriger').css('display', 'block');
            $('.panelTriger').click(function() {
                $('#mobpanel').addClass('open');
                $('body').css('overflow-y','hidden');
                $('.panelTriger').hide();
            });
            $('#mobpanel .close').click(function() {
                $('#mobpanel').removeClass('open');
                $('.panelTriger').show();
                $('body').css('overflow-y','scroll');
            });
            $('.benefitsChild').appendTo('.header');
        } else if ($(window).width() > 991) {
            $('#mobpanel .leftNav').appendTo('.menu');
            $('.panelTriger').hide();
            $('filterForm').appendTo('filterFormParent');
            $('.benefitsChild').appendTo('.benefitsParent');
        }
        if($(window).width() < 767){
            $('.menu .rightNav').appendTo('.mobpanelMain');
            $('.panelTriger').css('display', 'block');
            $('filterForm').appendTo('.headerMain');
            $('#info-graphic').appendTo('.headerMain');
        }else if ($(window).width() > 767){
            $('#mobpanel .rightNav').appendTo('.menu');
            $('#info-graphic').appendTo('.title-right');
        }
    };
    mainMove();
    $(window).resize(function() {
        mainMove();
    });
//////////////////////DROPDOWN FUNCTION////////////////////////////////
    $('.dropdown').click(function() {
        if ($(this).parent().hasClass('my-open')) {
            $(this).parent().removeClass('open');
            $(this).parent().removeClass('my-open');
        } else {
            $(this).parent().removeClass('open');
            $('.my-open').removeClass('my-open');
            $(this).parent().addClass('my-open');
        };
    });
//////////////////////CALL-NUMBER FUNCTION////////////////////////////////
    $('.btn-telephone').click(function(){
        $(this).parent().removeClass('open');
        $('.btn-PhoneNumber').html($(this).html()) ;
        if ($(this).parent().hasClass('my-open')) {
            $(this).parent().removeClass('open');
            $(this).parent().removeClass('my-open');
        } else {
            $(this).parent().removeClass('open');
            $('.my-open').removeClass('my-open');
            $(this).parent().addClass('my-open');
        }
    });
//////////////////////POPUP////////////////////////////////
    $('.info-graphic').click(function() {
        $('#info-block').addClass('open');
        $('body').css('overflow-y','hidden');
    });
    $('.close').click(function() {
        $('#info-block').removeClass('open');
        $('body').css('overflow-y','scroll');
    });
    $('.btn-Consultation').click(function() {
        $('.modal-content').addClass('open')
        if($('.modal').hasClass('open')){
        }else{
            $('.headerMain .filterForm').appendTo('.yesCourseForm')
        }
    });
    $('.btnShowFilterForm').click(function() {
        $('.modal-content').addClass('open')
        if($('.modal').hasClass('open')){
        }else{
            $('.headerMain .filterForm').appendTo('.yesCourseForm')
        }
    });
    $('.closeConsult').click(function() {
        $('.modal-content').addClass('open')
        if($('.modal').hasClass('open')){
            console.log("red")
        }else{
            $('.filterForm').appendTo('#filterFormParent')
        }
    });
//////////////////////Slider////////////////////////////////
    $('.single-item').slick();

    $('.small-slick').slick({
        infinite: true,
        slidesToShow:2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 1000,
        centerMode: true,
        variableWidth: true,
        centerPadding: '50px'
    });

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed:1000,
        centerMode: true,
        variableWidth: true,
        centerPadding: '65px'

    });
    $('.littleslider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('.moreOffer').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });

//////////////////////FILTER Page////////////////////////////////
    $( ".meetOption" ).click(function() {
        var text = $( this ).text();
        $( ".btn-meetOption" ).val( text );
        $(".parentDrop").removeClass('my-open');
    });

    $( ".btnQuestionDropCoice" ).click(function() {
        var text = $( this ).text();
        $( ".btnQuestionDrop" ).val( text );
        $(".btn-Filter").removeClass('my-open');
    });
//////////////////////FILTER Popup////////////////////////////////
    $( ".meetOption" ).click(function() {
        var text = $( this ).text();
        $( ".btn-meetOption" ).val( text );
        $(".parentDrop").removeClass('my-open');
    });
    $( ".sortLister" ).click(function() {
        var text = $( this ).text();
        $( "#sortPage" ).val( text );
        $(".btn-Filter").removeClass('my-open');
    });
    $( ".meetOption1" ).click(function() {
        $('.userPhone').css('display','block');
        $('.personalMeet').css('display','none');
        $('.userEmail').css('display','none');
        $('.userSkype').css('display','none');
        $('.userViber').css('display','none');
    })
    $( ".meetOption2" ).click(function() {
        $('.userPhone').css('display','none');
        $('.personalMeet').css('display','block');
        $('.userEmail').css('display','none');
        $('.userSkype').css('display','none');
        $('.userViber').css('display','none');
    })
    $( ".meetOption3" ).click(function() {
        $('.userPhone').css('display','none');
        $('.personalMeet').css('display','none');
        $('.userEmail').css('display','block');
        $('.userSkype').css('display','none');
        $('.userViber').css('display','none');
    })
    $( ".meetOption4" ).click(function() {
        $('.userPhone').css('display','none');
        $('.personalMeet').css('display','none');
        $('.userEmail').css('display','none');
        $('.userSkype').css('display','block');
        $('.userViber').css('display','none');
    })
    $( ".meetOption5" ).click(function() {
        $('.userPhone').css('display','none');
        $('.personalMeet').css('display','none');
        $('.userEmail').css('display','none');
        $('.userSkype').css('display','none');
        $('.userViber').css('display','block');
    })
    $('#btn-open-filter-form').click(function(){
        $('.filterForm').css('display','block')
    })


    $('header #priority').click(function(){
        if($('#priority').prop('checked')) {
            $('.priorityLabel').css('top','112px');

        } else {
            $('.priorityLabel').css('top','50px');
        }
    });

    $(".btnNavProgram").each(function(index,element){
        $(element).click(function(){
            $(".btnNavProgram").removeClass('active');
            $(".btnNavProgram").eq(index).addClass('active');
        });
    });

    $('.learnMoreAboutProgram').mousemove(function(){
        $(this).parent('.greyBlockOfferRow').css('border','1px solid #f1cc33');
    });
    $('.learnMoreAboutProgram').mouseleave(function(){
        $(this).parent('.greyBlockOfferRow').css('border','1px solid #ffffff');
    });

        if($('#hiddenBlockId').hasClass('hiddenBlock')){
            $('.btnMore').click(function () {
                $('.hiddenBlock').animate({
                    height: "toggle"
                }, 1000);
            })
        }

    $('.stories-slider').bxSlider({
        slideMargin: 20,
        touchEnabled: true,
        pager: false,
        controls: true,
        minSlides: 1,
        maxSlides: 2,
        moveSlides: 1,
        slideWidth: 575
    });
    $('.stories-slider-full-sized').bxSlider({
        touchEnabled: true,
        pager: false,
        controls: true,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1
    });

});

$(".mainCheckboxInList").each(function(index,element){
    var parent = $(".mainCheckboxInList").parent();
    $(element).click(function(){
        parent.removeClass('openListGroup');
        parent.eq(index).addClass('openListGroup');
    });
});
$('.openListGroup .mainCheckboxInList').click(function () {
    $(".mainCheckboxInList").parent().removeClass('openListGroup') ;
})

$('#mainSearch').removeAttr('placeholder');
$('#mainSearch').focus(function () {
    $(this).parent().addClass('has-label');
});
$('#mainSearch').blur(function () {
    var parent = $(this).parent();
    if ($(this).val() == '') {
        parent.removeClass('has-label');
    }
});
$("#range__budget").ionRangeSlider({
    grid: true,
    grid_num: 3,
    min: 600,
    max: 2300,
    from: 1500,
    step: 100,
    prettify_enabled: true,
    postfix: "$",
    keyboard: true,
    hide_min_max: true
});



$(".input-square input").change(function () {
    if (!$(this).prop('checked')) {
        $(this).parent().removeClass('square');
    } else {
        $(this).parent().addClass('square');
    }
});
$(".mainCheckboxInList input").change(function () {
    if (!$(this).prop('checked')) {
        $(this).parent().removeClass('square');
    } else {
        $(this).parent().addClass('square');
    }
});
$(".list-group-variant label input").change(function () {
    if (!$(this).prop('checked')) {
        $(this).parent().removeClass('square');
    } else {
        $(this).parent().addClass('square');
    }
});