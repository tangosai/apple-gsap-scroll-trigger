gsap.from('.logo',1.5,{
    delay:0.2,
    opacity:0,
    y:-20,
    ease:Expo.easeInOut
})

TweenMax.staggerFrom('.nav-bar ul li',1,{
    delay:0.6,
    opacity:0,
    y:-20,
    ease:Expo.easeInOut
},0.08)

gsap.from('.landing_page_inner .product-imgs',1.5,{
    delay:0.8,
    opacity:0,
    x:100,
    ease:Expo.easeInOut
})

gsap.from('.landing_page_inner .content',1.5,{
    delay:1.2,
    opacity:0,
    y:100,
    ease:Expo.easeInOut
})

// lets animate using gsap
$(document).ready(function () {
    // register scrolltrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger MatchMedia -> for responsive animation.
    // for now we are just animating on desktop and above devices

    ScrollTrigger.matchMedia({
        "(min-width:992px)": function () {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".product-img",
                    //                    markers: true,
                    start: "top 10%",
                    end: "bottom 0%",
                    scrub: true,
                    pin: true,
                },
            });
            tl.to(".landing_page_img_scroll_1 .content", {
                    opacity: 0,
                    duration: 0.5,
                })
                .to(".product-img", {
                    x: "-100%",
                    duration: 1
                })
                //                .to(".landing_page_img_scrolls .content", { opacity: 0,delay:1.5,duration: 2});
                .fromTo(".landing_page_img_scrolls .content", {
                    opacity: 0
                }, {
                    opacity: 1
                });

        },
    });
});
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.sa-header').addClass('black');
    } else {
        $('.sa-header').removeClass('black');
    }
})
