/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////    OPEN COVER    ///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('#show-full').click(function() {
    $('.index-img').css({
        "top" : "19%",
        "left" : "9%",
        "box-shadow" : "8px 8px rgba(0, 0, 0, 0.5)",
        "transition" : "300ms"
    });

    var delayInMilliseconds = 300;

    setTimeout(function() {

        $('.name-plate').css({
            "visibility" : "hidden",
            "opacity" : "0",
            "transition" : "visibility 0s 300ms, opacity 300ms linear"
        });

        $('.index-top').css({
            "position" : "fixed",
            "top" : "-40%",
            "transition" : "3s"
        });

        $('.prof-top-half').css({
            "top" : "-21%",
            "transition" : "3s"
        });

        $('.prof-bottom-half').css({
            "bottom" : "-21%",
            "transition" : "3s"
        });

        $('.line-top-filler-left').css({
            "width" : "21.5%",
            "left" : "0",
            "background-color" : "#3d3c3c",
            "transition" : "1s"
        });

        $('.line-top-filler-right').css({
            "width" : "21.5%",
            "right" : "0",
            "background-color" : "#3d3c3c",
            "transition" : "1s"
        });

        $('.line-bottom-filler-left').css({
            "width" : "21.5%",
            "left" : "0",
            "background-color" : "#3d3c3c",
            "transition" : "1s"
        });

        $('.middle-filler').removeClass();

        $('.line-bottom-filler-right').css({
            "width" : "21.5%",
            "right" : "0",
            "background-color" : "#3d3c3c",
            "transition" : "1s"
        });

        $('.index-bottom').css({
            "position" : "fixed",
            "bottom" : "-40%",
            "transition" : "3s"
        });

    }, delayInMilliseconds);

    var delayInMillisecondsLeft = 2300;

    setTimeout(function() {

        $('.index-img').css({
            "top" : "11%",
            "left" : "1%",
            "transition" : "300ms"
        });

    }, delayInMillisecondsLeft);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////    CLOSING COVER    ////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$('#show-cover').click(function() {

    $('.index-img').css({
        "top" : "19%",
        "left" : "9%",
        "transition" : "300ms"
    });

    var delayInMillisecondsClose = 3900;

    setTimeout(function() {

        $('.index-img').css({
            "top" : "20%",
            "left" : "10%",
            "box-shadow" : "none",
            "transition" : "300ms"
        });

    }, delayInMillisecondsClose);

    var delayInMilliseconds = 900;

    setTimeout(function() {

        $('#middle-fill-top').addClass('middle-filler');
        $('#middle-fill-bottom').addClass('middle-filler');

        $('.line-top-filler-left').css({
            "width" : "12%",
            "left" : "-12%",
            "transition" : "3s"
        });
    
        $('.line-top-filler-right').css({
            "width" : "12%",
            "right" : "-12%",
            "transition" : "3s"
        });
    
        $('.line-bottom-filler-right').css({
            "width" : "12%",
            "right" : "-12%",
            "transition" : "3s"
        });
    
        $('.line-bottom-filler-left').css({
            "width" : "12%",
            "left" : "-12%",
            "transition" : "3s"
        });

        var delayInMillisecondsName = 2900;

        setTimeout(function() {

            $('.name-plate').css({
                "visibility" : "visible",
                "opacity" : "1",
                "transition" : "visibility 0s linear 0s, opacity 300ms"
            });
        
        }, delayInMillisecondsName);

        $('.index-top').css({
            "position" : "fixed",
            "top" : "0",
            "transition" : "3s"
        });

        $('.prof-top-half').css({
            "top" : "18.1%",
            "transition" : "3s"
        });

        $('.prof-bottom-half').css({
            "bottom" : "18%",
            "transition" : "3s"
        });

        $('.index-bottom').css({
            "position" : "fixed",
            "bottom" : "0",
            "transition" : "3s"
        });

    }, delayInMilliseconds);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////    NAV ITEM SELECT    //////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.nav-items button').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');

    $('#show-page').attr("src", $(this).val());
});

$('.resume-links-btn').click(function() {
    if ($('.resume-links-body').hasClass('hidden')) {
        $('.hidden').removeClass('hidden');
        $('ion-icon').attr('name', 'chevron-up');
    }
    else {
        $('.resume-links-body').addClass('hidden');
        $('ion-icon').attr('name', 'chevron-down');
    }
});

// makes wuick links sticky

window.addEventListener('scroll', function() {
    var ql = document.querySelector('.resume-links-con');
    ql.classList.toggle('sticky', window.scrollY > 0);
});
