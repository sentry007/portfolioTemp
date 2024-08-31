const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// ScrollTrigger.defaults({ scrub: 4 });

// gsap.to("#main", {
//     scrollTrigger: {
//         trigger: "#main",
//         scroller: "body",
//         markers: true,
//         start: "top 0",
//         end: "bottom 100%",
//         scrub: 5
//         }
// })

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })


    tl.to(".boundingelem", {
        y: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: 0.2
    })


    tl.from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1
    })
}

function circleChaptakaro() {
    var xscale = 1
    var yscale = 1

    var xprev = 0
    var yprev = 0

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout)

        var xdiff = dets.clientX - xprev
        var ydiff = dets.clientY - yprev

        xprev = dets.clientX
        yprev = dets.clientY

        xscale = gsap.utils.clamp(0.8, 1.2, xdiff)
        yscale = gsap.utils.clamp(0.8, 1.2, ydiff)

        timeout = setTimeout(function () {
            document.querySelector("#circleScroll").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        }, 100)

    })
}

function MouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#circleScroll").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}


MouseFollower();
firstPageAnim();