/*-----------------------------------------------------------------------------------

    Theme Name: Job Board - Job Portal HTML Template
    Description: Job Portal HTML Template
    Author: Chitrakoot Web
    Version: 2.0

    ---------------------------------- */

! function(a) {
    "use strict";
    var o, t = a(window);

    function s() {
        var e, o;
        e = a(".full-screen"), o = t.height(), e.css("min-height", o), e = a("header").height(), o = a(".screen-height"), e = t.height() - e, o.css("min-height", e)
    }
    a("#preloader").fadeOut("normall", function() {
        a(this).remove()
    }), t.on("scroll", function() {
        var e = t.scrollTop(),
            o = a(".navbar-brand img"),
            s = a(".navbar-brand.logodefault img");
        e <= 50 ? (a("header").removeClass("scrollHeader").addClass("fixedHeader"), o.attr("src", "img/logos/logo-white.png")) : (a("header").removeClass("fixedHeader").addClass("scrollHeader"), o.attr("src", "img/logos/logo.png")), s.attr("src", "img/logos/logo.png")
    }), t.on("scroll", function() {
        500 < a(this).scrollTop() ? a(".scroll-to-top").fadeIn(400) : a(".scroll-to-top").fadeOut(400)
    }), a(".scroll-to-top").on("click", function(e) {
        e.preventDefault(), a("html, body").animate({
            scrollTop: 0
        }, 600)
    }), a(".parallax,.bg-img").each(function(e) {
        a(this).attr("data-background") && a(this).css("background-image", "url(" + a(this).data("background") + ")")
    }), a(".story-video").magnificPopup({
        delegate: ".video",
        type: "iframe"
    }), a(".popup-social-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), t.resize(function(e) {
        setTimeout(function() {
            s()
        }, 500), e.preventDefault()
    }), t.on("resize", function(e) {
        clearTimeout(o), o = setTimeout(function() {
            991 < t.width() ? a(".dashboard-left-sidebar .dashboard-menu").show() : a(".dashboard-left-sidebar .dashboard-menu").hide()
        }, 250)
    }), a(".collapse-sm").on("click", function() {
        a(".dashboard-left-sidebar .dashboard-menu").slideToggle(), a(this).hasClass("current") ? a(this).removeClass("current") : (a(this).removeClass("current"), a(this).addClass("current"))
    }), 0 !== a(".copy-clipboard").length && (new ClipboardJS(".copy-clipboard"), a(".copy-clipboard").on("click", function() {
        var e = a(this);
        e.text();
        e.text("Copied"), setTimeout(function() {
            e.text("Copy")
        }, 2e3)
    })), a(".source-modal").magnificPopup({
        type: "inline",
        mainClass: "mfp-fade",
        removalDelay: 160
    }), s(), a(document).ready(function() {
        var s = 25 / a(window).height(),
            t = 25 / a(window).width();
        a(".object-move").mousemove(function(e) {
            var o = e.pageX - a(window).width() / 2,
                e = e.pageY - a(window).height() / 2,
                o = t * o * -1 - 25,
                e = s * e * -1 - 50;
            a(".object-move").css("background-position", o + "px     " + e + "px")
        }), a(".menu-slider").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 800,
            nav: !1,
            dots: !1,
            center: !1,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        }), a(".job-categories").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 800,
            nav: !1,
            dots: !1,
            center: !1,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), a(".featured-candidate").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !1,
            smartSpeed: 800,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), a(".featured-candidate2").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 800,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 25,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        }), a(".testmonial-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 800,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        }), a(".testimonial2-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 25,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        }), a(".testimonial3-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 1500,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 25,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                }
            }
        }), a(".testimonial4-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        }), a(".testimonial5-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1201: {
                    items: 3
                }
            }
        }), a(".company-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 800,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        }), a(".company2-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            dots: !0,
            center: !1,
            margin: 20,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        }), a(".recent-jobs").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 900,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 20,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        }), a(".job-location").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            dots: !0,
            center: !1,
            margin: 20,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        }), a(".aboutme-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !1,
            autoplayTimeout: 5e3,
            smartSpeed: 800,
            nav: !1,
            dots: !1,
            center: !1,
            margin: 15,
            items: 1
        }), a(".owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            dots: !0,
            margin: 0,
            autoplay: !0,
            smartSpeed: 500
        }), 0 !== a(".horizontaltab").length && a(".horizontaltab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function(e) {
                var o = a(this),
                    s = a("#nested-tabInfo");
                a("span", s).text(o.text()), s.show()
            }
        }), a(".countup").counterUp({
            delay: 25,
            time: 2e3
        }), a(".countdown").countdown({
            date: "01 Jan 2025 00:01:00",
            format: "on"
        }), a(".current-year").text((new Date).getFullYear()), a(".job-search-wrapper select").niceSelect()
    }), t.on("load", function() {
        t.stellar(), 0 !== a(".price-range").length && a(".price-range").ionRangeSlider({
            type: "double",
            grid: !0,
            min: 0,
            max: 1e3,
            from: 200,
            to: 800,
            prefix: "$"
        })
    })
}(jQuery);



//all jobs search
document.getElementById('jobSearchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const jobInput = document.getElementById('jobInput').value;
    const locationInput = document.getElementById('locationInput').value;
    alert(`Searching for ${jobInput} jobs in ${locationInput}`);
    // Here you would typically send this data to a server or API
});



//all Industry jobs cards
document.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`You clicked on ${card.querySelector('.job-title').textContent}`);
    });
});



//all companies logo slider

