(function ($) {
    "use strict";
    jQuery(document).on('ready', function () {
        function initNav() {
            $('div.toggle-normal').on('click', function () {
                $('i.top-bar').toggleClass('top-transform');
                $('i.middle-bar').toggleClass('middle-transform');
                $('i.bottom-bar').toggleClass('bottom-transform');
            });
            $('.section,div#menu-options a').on('click', function () {
                $('nav#theMenu').removeClass('menu-open');
                $('i.top-bar').removeClass('top-transform');
                $('i.middle-bar').removeClass('middle-transform');
                $('i.bottom-bar').removeClass('bottom-transform');
            });
            $('div#menuToggle').on('click', function () {
                $('div#menuToggle').toggleClass('active');
                $('body').toggleClass('body-push-toright');
                $('nav#theMenu').toggleClass('menu-open');
            });
        }

        function initSmoothScroll() {
            $('div#menu-options,div#about-btn').find('a[href*=#]:not([href=#])').on('click', function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 900, "swing");
                        return false;
                    }
                }
            });
        }

        function initScrollToTop() {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() >= 50) {
                    $('div#scrollup').addClass('animated flipInY').fadeIn(200);
                } else {
                    $('div#scrollup').fadeOut(200);
                }
            });
            $('div#scrollup').on('click', function () {
                $("html,body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        }

        function initSkills() {
            $('div.skillbar').each(function () {
                $(this).find('div.skillbar-bar').css({
                    width: $(this).attr('data-percent')
                });
            });
        }

        function initClientsSliders() {
            var $clientcarousel = $('ul#clients-list');
            var clients = $clientcarousel.children().length;
            var clientwidth = (clients * 140);
            $clientcarousel.css('width', clientwidth);
            var rotating = true;
            var clientspeed = 1800;
            setInterval(rotateClients, clientspeed);
            $(document).on({
                mouseenter: function () {
                    rotating = false;
                },
                mouseleave: function () {
                    rotating = true;
                }
            }, '#clients');

            function rotateClients() {
                if (rotating !== false) {
                    var $first = $('ul#clients-list').find('li:first');
                    $first.animate({
                        'margin-left': '-140px'
                    }, 2000, function () {
                        $first.remove().css({
                            'margin-left': '0px'
                        });
                        $('ul#clients-list').find('li:last').after($first);
                    });
                }
            }
            var swiper = new Swiper('.swiper-container-clients', {
                pagination: '.swiper-pagination-clients',
                a11y: true,
                keyboardControl: true,
                autoHeight: true,
                speed: 800,
                paginationClickable: true
            });
        }


        initNav();
        initSmoothScroll();
        initScrollToTop();
        initSkills();
        initClientsSliders();
    });

    jQuery(window).on('load', function () {
        $('div#loading').fadeOut(0);
        window.sr = ScrollReveal({
            reset: false
        });
        var commonCards = 
        '#port-add-icon,.interest-icon-even,.interest-icon,' + 
        '.timeline-dot,.timeline-content,#add-more,#skills-card,#testimonials-card,' + 
        '#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients,.section-title img';
        sr.reveal(commonCards);
        sr.reveal('#about-card,.map-label');

        sr.reveal('#v-card-holder');
        sr.reveal('.skillbar-bar');
    });
})(jQuery);