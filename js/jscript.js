$(document).ready(function() {

    $(".arrow-inner").click(function() {
        $('html, body').animate({
            scrollTop: $("#why-skysilk").offset().top
        }, 1000);
    });

    $(window).on('resize', onResize);

    function onResize() {
        if ($(window).width() > 768) {
            $('.navbar').css("position", "fixed");
            $(window).on('scroll', onScroll);
        } else {
            $('.navbar').fadeIn(300);
            $(window).off('scroll', onScroll);
            $('.navbar').css("position", "static");
        }
    };

    function onScroll() {
        if ($(window).scrollTop() < 200) {
            $('.navbar').fadeIn(300);
        } else {
            $('.navbar').fadeOut(300);
        }
    }

    onResize();

    $(".burger-nav").on("click", function() {
        $(".menu-list").toggleClass("hidden");

    });

    $('.carousel-indicators li').click(function() {

        var currentCloud = $('.active-cloud');

        if ($(this).is($('.first-indicator'))) {
            $('.first-indicator').addClass('active');
            $('.second-indicator').removeClass('active');
            $('.third-indicator').removeClass('active');

            currentCloud.css({ 'animation': 'cloud-anim-right 0.45s ease-in-out forwards' });
            setTimeout(function() {
                currentCloud.removeClass('active-cloud');
            }, 450);

            setTimeout(function() {
                $('.first-cloud').css({ 'animation': 'cloud-anim-right0 0.45s ease-in-out forwards' });
            }, 452);

            setTimeout(function() {
                $('.first-cloud').addClass('active-cloud');

            }, 451);

        }

        if ($(this).is($('.second-indicator'))) {
            $('.first-indicator').removeClass('active');
            $('.second-indicator').addClass('active');
            $('.third-indicator').removeClass('active');

           currentCloud.css({ 'animation':'opacity 0.45s ease-in-out forwards'});
            setTimeout(function() {
                currentCloud.removeClass('active-cloud');
            }, 450);

            setTimeout(function() {
                $('.second-cloud').css({ 'animation':'opacityOpposite 0.45s ease-in-out forwards'});
            }, 452);

            setTimeout(function() {
                $('.second-cloud').addClass('active-cloud');

            }, 451);
        }
        if ($(this).is($('.third-indicator'))) {
            $('.first-indicator').removeClass('active');
            $('.second-indicator').removeClass('active');
            $('.third-indicator').addClass('active');

            currentCloud.css({ 'animation': 'cloud-anim-left 0.45s ease-in-out forwards' });
            setTimeout(function() {
                currentCloud.removeClass('active-cloud');
            }, 450);

            setTimeout(function() {
                $('.third-cloud').css({ 'animation': 'cloud-anim-left0 0.45s ease-in-out forwards' });
            }, 452);

            setTimeout(function() {
                $('.third-cloud').addClass('active-cloud');

            }, 451);
        }
    });

    $('body').click(function() {
        // $('.active-cloud').css({'animation':'cloud-anim-left 4.5s ease-in-out forwards'});
        // $('.active-cloud').animate({
        // 	opacity: 0
        // }, 200);
        // setTimeout(function() {
        // 	$('.active-cloud').animate({
        // 	opacity: 1
        // }, 200);

        // }, 450);
    });

    $('.arrow-left').click(function(event) {
        event.preventDefault();
        var currentCloud = $('.active-cloud');
        var prevCloud = currentCloud.prev();
        var currentDot = $('.active');
        var prevDot = currentDot.prev();

        if (prevCloud.length == 0) {
            prevCloud = $('.cloud').last();
            prevDot = $('.carousel-indicators li').last();
        }

        currentCloud.css({ 'animation': 'cloud-anim-right 0.45s ease-in-out forwards' });
        // currentCloud.animate({
        //     opacity: 0,
        // }, 450);
        setTimeout(function() {
            currentCloud.removeClass('active-cloud');
        }, 450);

        setTimeout(function() {
            prevCloud.css({ 'animation': 'cloud-anim-right0 0.45s ease-in-out forwards' });
            // prevCloud.animate({
            //     opacity: 1,
            // }, 450);
        }, 451);

        setTimeout(function() {
            prevCloud.addClass('active-cloud');

        }, 450);

        currentDot.removeClass('active');
        prevDot.addClass('active');
    });

    $('.arrow-right').click(function(event) {
        event.preventDefault();
        var currentCloud = $('.active-cloud');
        var nextCloud = currentCloud.next();
        var currentDot = $('.active');
        var nextDot = currentDot.next();

        if (nextCloud.length == 0) {
            nextCloud = $('.cloud').first();
            nextDot = $('.carousel-indicators li').first();
        }

        currentCloud.css({ 'animation': 'cloud-anim-left 0.45s ease-in-out forwards' });
        // currentCloud.animate({
        //     opacity: 0
        // }, 450);
        setTimeout(function() {
            currentCloud.removeClass('active-cloud');
        }, 450);

        setTimeout(function() {
            nextCloud.css({ 'animation': 'cloud-anim-left0 0.45s ease-in-out forwards' });
            // nextCloud.animate({
            //     opacity: 1
            // }, 450);
        }, 451);

        setTimeout(function() {
            nextCloud.addClass('active-cloud');

        }, 450);

        currentDot.removeClass('active');
        nextDot.addClass('active');

    });

    $('#scroll-top').click(function() {

        $('html, body').animate({
            scrollTop: 0,

        }, 350);

    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 200) {
            $('#scroll-top').fadeIn(300);
        } else {
            $('#scroll-top').fadeOut(300);
        };
    });

    $(window).on('resize', polylineSize);

    function polylineSize() {
        var dot1 = $('.simple').offset().left + $('.simple').width() / 2;
        var dot2 = $('.cost').offset().left + $('.cost').width() / 2;
        var dot3 = $('.innovative').offset().left + $('.innovative').width() / 2;
        var dot4 = $('.all-in').offset().left + $('.all-in').width() / 2;
        var string = 'M 0 0 L ' + dot1 + ' 45.497 L ' + dot2 + ' 27.497 L ' + dot3 + ' 43.497 L ' + dot4 + ' 27.497 L ' + $(window).width() + ' 57.497';
        $('.path').attr('d', string);

        $('.circle1').attr('cx', dot1);
        $('.circle2').attr('cx', dot2);
        $('.circle3').attr('cx', dot3);
        $('.circle4').attr('cx', dot4);
    };

    polylineSize();

    $(window).scroll(function() {

        var wScroll = $(this).scrollTop();

        if (wScroll > $('#what-is-skysilk').offset().top - $(window).height()) {
            var offset = Math.min(0, wScroll - $('#what-is-skysilk').offset().top + $(window).height() - 350);

            $('.sky-box').css({ 'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)' });
        }
    })

});
