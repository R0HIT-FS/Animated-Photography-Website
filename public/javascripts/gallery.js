var menu = document.getElementById("menu");
var menubtn = document.getElementById("menubtn");
var svg = document.getElementById("svg");
var path = document.getElementById("path");
var links = document.querySelectorAll("#menu .link")
var crack = document.getElementById("crack");
var main = document.getElementById("main")
menubtn.addEventListener("click",function(){
    menubtn.innerHTML="close";
    if(menu.style.left==="100%"){
        menu.style.left="0%";
        menu.style.zIndex=7;
        menubtn.style.zIndex=99;
        menubtn.style.color="white";
        gsap.from("#menu a",{
            transform: 'translateX(100%)',
            opacity:0,
            delay:0.5,
            duration:0.2,
            stagger:0.05
        })   
    }

    else{
        menu.style.left="100%"
        menubtn.innerHTML="menu"
        menu.style.zIndex=7;
        menubtn.style.color="whitewhite";
        gsap.to("#menu a",{
            transform: 'translateX(0%)',
            opacity:1,
            delay:0.5,
            duration:0.2,
            stagger:0.05
        }) 
    }
})
links[0].addEventListener("click",function(){
    menu.style.left="100%";
    menubtn.innerHTML="menu"
    menubtn.style.color="white";
})
links[1].addEventListener("click",function(){
    menu.style.left="100%"
    menubtn.innerHTML="menu"
    menubtn.style.color="white";
})
links[2].addEventListener("click",function(){
    menu.style.left="100%"
    menubtn.innerHTML="menu"
    menubtn.style.color="white";
})
links[3].addEventListener("click",function(){
    menu.style.left="100%"
    menubtn.innerHTML="menu"
    menubtn.style.color="white";
})
// links[4].addEventListener("click",function(){
//     menu.style.left="100%"
//     menubtn.innerHTML="menu"
//     menubtn.style.color="white";
// })




const myText = new SplitType('.my-text')
gsap.to('.char', {
    y:0,
    color:"#eeeeee",
    delay: 0.2,
    duration: 0.5,
})




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect:"fade",
    grab:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// var swiper = new Swiper(".mySwiper2", {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     loop: true,
//     effect:"fade",
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
  
// var imgdiv = document.querySelectorAll(".imgdiv");
// var prev = document.querySelectorAll(" .swiper-button-prev");
// var next = document.querySelectorAll(" .swiper-button-next");
// var pagination = document.querySelector(".swiper-pagination");
// var nextprev = document.querySelector(".nextprev")
// imgdiv[2].addEventListener("mousemove",function(details){
// });
// imgdiv[1].addEventListener("mousemove",function(details){
//     var rectimg = imgdiv[1].getBoundingClientRect();
//     var inside = details.clientX - rectimg.left;
//     if(inside<rectimg.width/2){
//         prev[1].style.opacity=1;
//         next[1].style.opacity = 0;
//         prev[1].style.left = details.clientX - rectimg.left -50 + "px";
//         prev[1].style.top = details.clientY -100 + "px";
//         prev[1].style.cursor = "none"; 
//         imgdiv.style.cursor = "none";
//     }
//     else{
//         next[1].style.opacity = 1;
//         prev[1].style.opacity=0;
//         next[1].style.left = details.clientX - rectimg.left -50 + "px";
//         next[1].style.top = details.clientY -100  + "px"; 
//         next[1].style.cursor = "none";
//         imgdiv.style.cursor = "none";
//     }
// });
// imgdiv[1].addEventListener("mouseleave",function(){
//     next[1].style.opacity = 0;
//     prev[1].style.opacity=0;
//     // imgdiv.style.cursor = "default";
// })
// imgdiv[0].addEventListener("mousemove",function(details){
// });



// SCROLLER FUNCTION
function lenis(){
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
}
lenis();

var weddingnext = document.getElementById("weddingnext");
weddingnext.addEventListener("click",function(){
    gsap.to("#galleryscroll",{
        right:"100%",
        ease:Power2,
        duration:0.5,
    })
})
var weddingprev = document.getElementById("weddingprev");
weddingprev.addEventListener("click",function(){
    gsap.to("#galleryscroll",{
        right:"0%",
        ease:Power2,
        duration:0.5,
    })
})
var potraitnext = document.getElementById("potraitnext");
potraitnext.addEventListener("click",function(){
    gsap.to("#galleryscroll",{
        right:"200%",
        ease:Power2,
        duration:0.5,
    })
})
var potraitprev = document.getElementById("potraitprev");
potraitprev.addEventListener("click",function(){
    gsap.to("#galleryscroll",{
        right:"100%",
        ease:Power2,
        duration:0.5,
    })
})


gsap.to('#nav',{
    opacity:0,
    duration:2,
    display:"none",
    scrollTrigger:{
        trigger:'#page2',
        start:"top 10%",
        end:"top 5%",
        scrub:true,
    }
})
gsap.to('.next',{
    opacity:1,
    duration:3,
    scrollTrigger:{
        trigger:'#page2',
        start:"top 10%",
        end:"top 5%",
        scrub:true,
    }
})


function cursorAnimations(){
    const cursor = new MouseFollower({
        speed:0.3,
        container: document.body,
        className: 'mf-cursor',
        innerClassName: 'mf-cursor-inner',
        textClassName: 'mf-cursor-text',
        mediaClassName: 'mf-cursor-media',
        mediaBoxClassName: 'mf-cursor-media-box',
        iconSvgClassName: 'mf-svgsprite',
        iconSvgNamePrefix: '-',
        iconSvgSrc: '',
        dataAttr: 'cursor',
        hiddenState: '-hidden',
        textState: '-text',
        iconState: '-icon',
        activeState: '-active',
        mediaState: '-media',
        stateDetection: {
            '-pointer': 'a,button',
            '-hidden': 'iframe'
        },
        visible: true,
        visibleOnState: false,
        speed: 0.55,
        ease: 'expo.out',
        overwrite: true,
        skewing: 3,
        skewingText: 2,
        skewingIcon: 2,
        skewingMedia: 2,
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        stickDelta: 0.15,
        showTimeout: 20,
        hideOnLeave: true,
        hideTimeout: 300,
        hideMediaTimeout: 300
      });
      const el = document.body;
      el.addEventListener('mouseenter', () => {
          cursor.addState('-inverse');
      });
      
      el.addEventListener('mouseleave', () => {
          cursor.removeState('-inverse');
      });
}
cursorAnimations()