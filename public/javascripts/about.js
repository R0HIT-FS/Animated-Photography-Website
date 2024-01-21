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


//hero animation
function heroanimations(){
{

    const myText = new SplitType('.my-text')
    gsap.to('.char', {
        y:0,
        color:"#eeeeee",
        // stagger: 0.05,
        delay: 0.2,
        duration: 0.5,
    })
}
{
    const myText2 = new SplitType('.my-text2')
    
    gsap.to('.char', {
        y:0,
        color:"#eeeeee",
        // stagger: 0.05,
        delay: 0.4,
        duration: 0.5,
    })
}
{
    const myText2 = new SplitType('.my-text3')
    
    gsap.to('.char', {
        y:0,
        color:"#eeeeee",
        // stagger: 0.05,
        delay: 0.6,
        duration: 0.5,
    })
}
}
heroanimations();


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

//cursor animations
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





function aboutanim() {
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#page2",
            start:"10% 50%",
            end:"40% 50%",
            ease:"Power4",
            scrub:3
        }
    });

{

    const myText = new SplitType('#para1')
    tl.to('.char', {
        y:0,
        delay: 0.05,
        duration: 0.2,
    })
}
{
    const myText2 = new SplitType('#para2')
    
    tl.to('.char', {
        y:0,
        delay: 0.05,
        duration: 0.2,
    })
}
{
    const myText2 = new SplitType('#para3')
    
    tl.to('.char', {
        y:0,
        delay: 0.05,
        duration: 0.2,
    })
}
{
    const myText2 = new SplitType('#para4')
    
    tl.to('.char', {
        y:0,
        delay: 0.05,
        duration: 0.2,
    })
}
}

aboutanim();