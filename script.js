
    const locomotiveScroll = new LocomotiveScroll();


gsap.set(".slides",{scale:5});

document.querySelectorAll(".stext").forEach((elem)=>{
    var splittedText=elem.textContent.split("");
    var spanText="";
    splittedText.forEach((el)=>{
        spanText+=`<span>${el}</span>`
    })
    elem.innerHTML=spanText;
})

var tl=gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".pg1",
        start:"top top",
        end:"bottom bottom",
        scrub:2
    }
})

var tl2=gsap.timeline();
tl2.to(".loader",{
    y:"-100vh",
    duration:.5,
    delay:.5
})
tl2.from("nav svg, nav h5, nav button",{
   y:-100,
   opacity:0,
   stagger:.1,
   ease:Power2,
   duration:1
})

tl2.from(".pg1 .first span",{
    top:"200px",
    opacity:0,
    duration:.4,
    stagger:.05
})

tl.to(".bgvdo",{
"--clip":"0%"
}, "home") 

tl.to(".slides",{
    scale:1
}, "home")

tl.to(".lft",{
    x:"-25%",
    stagger:.03
}, "marquee")

tl.to(".rgt",{
    x:"25%",
    stagger:.03
}, "marquee")

tl.to(".pg1 .second span",{
    color:"white",
    duration:.01,
    stagger:.01,
    ease:Power3
}, "marquee")

gsap.set(".pg2 .right .elem",{
    y:"500%"
})
gsap.to(".pg2 .right .elem",{
    scrollTrigger:{
        scroller:"body",
        trigger:".pg2",
        start:"top top",
        end:"bottom bottom",
        scrub:2
    },
    y:"-200%",

})
gsap.to(".pg2 .right .elem",{
    scrollTrigger:{
        scroller:"body",
        trigger:".pg2",
        start:"top top",
        end:"bottom bottom",
        scrub:2
    },
    backgroundColor:"black",
    color:"white",
    stagger:0.1,
    markers:true
})
gsap.to(".pg3 .container",{
    scrollTrigger:{
        scroller:"body",
        trigger:".pg3",
        start:"top top",
        end:"bottom bottom",
        scrub:2
    },
    x:"-285%"
})
document.querySelectorAll(".pg4 section").forEach((elem)=>{
    elem.addEventListener("mousemove",(dets)=>{
gsap.to(elem.querySelector(".img"),{opacity:1, x:gsap.utils.mapRange(0, window.innerWidth, -100, 100, dets.clientX), duration:0.5, ease:Power3})
    })
    elem.addEventListener("mouseleave",()=>{
        gsap.to(elem.querySelector(".img"),{opacity:0, duration:0.5, ease:Power3})
            })
})
gsap.to(".pg5 .top p span",{
    opacity:1,
    color:"#2544ee",
    stagger:.1,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg5 .top",
        start:"top 75%",
        end:"top 8%",
        scrub:2
    }
})
gsap.to(".pg5 .bottom p span",{
    opacity:1,
    color:"#2544ee",
    stagger:.1,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg5 .bottom",
        start:"top 75%",
        end:"top 8%",
        scrub:2
}
})
gsap.to(".capsule2",{
    scrollTrigger:{
        scroller:"body",
        trigger:".capsules",
        start:"top 70%",
        end:"bottom bottom",
        scrub:2
    },
    y:0
})
document.querySelectorAll(".section").forEach((elem)=>{
    ScrollTrigger.create({
        trigger:elem,
        start:"top 50%",
        end:"bottom 50%",
        onEnter:function(){
document.body.setAttribute("theme",elem.dataset.color);
        },
        onEnterBack:function(){
            document.body.setAttribute("theme",elem.dataset.color);
        }
    })
})
gsap.from(".pg2 .stext span",{
    scrollTrigger:{
        scroller:"body",
        trigger:".pg2 .stext",
        start:"top 80%",
        end:"top 45%",
        ease:Power4,
        scrub:2
    },
top:"100px",
opacity:0,
stagger:.07,
duration:.7
})
gsap.from(".pg3 .stext span",{
    scrollTrigger:{
        scroller:"body",
        trigger:".pg3 .stext",
        start:"top 80%",
        end:"top 45%",
        ease:Power4,
        scrub:2
    },
top:"100px",
opacity:0,
stagger:.07,
duration:.7
})
gsap.from(".pg6 .stext span",{
    scrollTrigger:{
        scroller:"body",
        trigger:".pg6 .stext",
        start:"top 80%",
        end:"top 65%",
        ease:Power4,
        scrub:2
    },
top:"100px",
opacity:0,
stagger:.07,
duration:.7
})