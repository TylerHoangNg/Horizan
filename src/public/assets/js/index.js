const scrollButton = document.querySelector(".to-the-top");
var onBtnAddClass = function() { if (window.scrollY >= 300) { scrollButton.classList.add("is-visible") } else { scrollButton.classList.remove("is-visible") } };
var onScrollToTop = function() {
    if (window.scrollY != 0) {
        setTimeout(function() {
            window.scrollTo(0, window.scrollY - 30);
            onScrollToTop()
        }, 5)
    }
};
window.addEventListener("scroll", onBtnAddClass);
scrollButton.addEventListener("click", onScrollToTop);
(function(d, s, id) {
    setTimeout(function() {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs)
    }, 6000)
}(document, 'script', 'facebook-jssdk'));
jQuery(function($) {
    if ($('.gutentor-counter-number-main').length > 0) { $('.gutentor-counter-number-main').counterUp({ delay: 10, time: 1000 }) }
    $('.wpcf7-list-item').each(function(index, el) { $(this).on('click', function(event) { $(this).toggleClass('dark') }) });
    $('#hisella-minimize').click(function() {
        const e = $('#hisella-facebook'),
            data = e.attr('data-show'),
            height = $('.hisella-messages').height();
        console.log(height);
        if (data == 'false') {
            $('#hisella-facebook').attr('data-show', 'true');
            $('.hisella-messages').animate({ right: '0' }).animate({ bottom: '0' })
        } else {
            $('#hisella-facebook').attr('data-show', 'false');
            $('.hisella-messages').animate({ bottom: -height + 65 }).animate({ right: -170 })
        }
    });
    $('.search-toggle').on('click', function(event) { $('body').find('.search-modal').addClass('show-modal active').find('.search-field').focus() });
    $('.nav-toggle').on('click', function(event) { $('body').find('.menu-modal').addClass('show-modal active') });
    $('.search-modal, .search-modal button.search-untoggle').on('click keyup', function(event) { if (event.target == this || event.target.tagName == 'svg') { $(this).removeClass('show-modal active') } });
    $('.close-nav-toggle').on('click', function(event) { $(this).closest('.menu-modal').removeClass('show-modal active') });
    const header = jQuery("header.header-footer-group");
    const headerHeight = header.height();
    jQuery(window).scroll(function() {
        if (window.scrollY > headerHeight) header.addClass("sticky");
        else header.removeClass("sticky")
    });

    function except(width = $(window).width()) {
        var height = $(".header-footer-group").height();
        var h = $(window).height() - 80;
        if (width <= 1024) var h = $(window).height() / 2;
        $(".wp-slider.layout3 .grid-row").css({ height: h, "align-items": "center", "justify-content": "center", }), $(".wp-slider.layout1 .grid-12").css({ height: (width >= 992) ? 500 : 400, "object-fit": "cover", "background-size": "cover", "display": "flex", "flex-flow": "column", "align-items": "center", "justify-content": "center", }), $("#fullscreen video.gutentor-bg-video").css({ height: h, width: $(window).width() + 1, "object-fit": "cover", "background-size": "cover", opacity: 1, position: "absolute", left: 0, top: "0%", display: "block", }).parent().css("height", h)
    }
    except();
    $(".enouvo-carousel").each(function(index, el) {
        setTimeout(() => { $(this).css("opacity", "1") }, 100);
        $(this).not(".slick-initialized").slick({ infinite: !0, speed: 800, dots: !0, lazyLoad: 'progressive', prevArrow: "<span class='slick-prev'><svg xmlns='http://www.w3.org/2000/svg' width='19' height='14' viewBox='0 0 19 14'><path fill='#007bff' d='M12.143 0L11.03 1.137 15.985 6.196 0 6.196 0 7.804 15.985 7.804 11.03 12.863 12.143 14 19 7z' transform='matrix(-1 0 0 1 19 0)'></path></svg></span>", nextArrow: "<span class='slick-next'><svg xmlns='http://www.w3.org/2000/svg' width='19' height='14' viewBox='0 0 19 14'> <path fill='#007bff' d='M12.143 0L11.03 1.137 15.985 6.196 0 6.196 0 7.804 15.985 7.804 11.03 12.863 12.143 14 19 7z' transform='matrix(1 0 0 -1 0 14)'></path></svg></span>", })
    });

    function masonry() {
        var $grid = $(".project-list").isotope({ itemSelector: ".item", percentPosition: !0, layoutMode: "masonry", });
        $('.filter li a').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $(".project-list").isotope({ filter: filterValue });
            $('.project-container .filter li').removeClass('active');
            $(this).addClass('active')
        });
        $(".project-list").each(function() {
            var $module = $(this);
            var update = function() { $module.isotope("layout") };
            this.addEventListener("load", update, !0)
        })
    }
    masonry();

    function testimonial() {
        var slideControls = $(".testimonial-slider").nextAll(".slide-controls");
        $(".testimonial-slider").slick({ prevArrow: slideControls.find(".slide-arrow.arrow-prev"), nextArrow: slideControls.find(".slide-arrow.arrow-next"), appendArrows: slideControls, });
        var showChar = 437;
        var ellipsestext = "...";
        var moretext = "Show more";
        var lesstext = "Show less";
        $(".more").each(function() {
            var content = $(this).html();
            if (content.length > showChar) {
                var c = content.substr(0, showChar);
                var h = content.substr(showChar, content.length - showChar);
                var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span><a href="javascript:void(0);" class="show-more">' + moretext + "</a></span>";
                $(this).html(html)
            }
        });
        $(".show-more").on("click", function(event) {
            $(this).toggleClass('show-less');
            if ($(this).hasClass('show-less'))
                $(this).text(lesstext);
            else $(this).text(moretext);
            $(this).closest(".morecontent").find("span").toggleClass("active").closest('.morecontent').prevAll('.moreellipses').toggleClass('hidden')
        })
    }
    testimonial();

    function logoCarousel() {
        $(".logo-carousel").find("li").removeClass("blocks-gallery-item");
        $(".logo-carousel .blocks-gallery-grid").not(".slick-initialized").slick({ infinite: !1, slidesToShow: 5, slidesToScroll: 5, dots: !0, arrows: !1, rows: 2, responsive: [{ breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 2, }, }, ], })
    }
    logoCarousel();

    function margin(width = $(window).width()) {
        $(".margin").each(function(e) {
            var hmd = $(this).data("md"),
                hmb = $(this).data("mb");
            if (width < 992) { var mg = hmb > 0 ? hmb : hmd } else { var mg = hmd > 0 ? hmd : "" }
            $(this).css({ "margin-bottom": mg, })
        })
    }
    margin();
    if ($(".click-zoom").magnificPopup != undefined) { $(".click-zoom, #click-zoom").magnificPopup({ type: "image", gallery: { enabled: !0, }, }) }
    $(".tab").on("click", function(e) {
        e.preventDefault();
        $(".tab, .panel").removeClass("active");
        $(this).add("#" + $(this).attr("id").replace(/\s*tab\s*/, "panel")).addClass("active");
        $(this).focus()
    });
    $(".business-details-list li").append('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10"> <path fill="#3A393D" d="M13.341 0.14L12.747 0.871 15.391 4.123 0 4.123 0 5.157 15.391 5.157 12.747 8.409 13.341 9.14 17 4.64z"/> </svg>');
    $(window).resize(function(event) {
        margin();
        except()
    })
})