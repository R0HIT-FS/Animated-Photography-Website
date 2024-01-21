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


function homePageAnimations(){
{

    const myText = new SplitType('.my-text')
    gsap.to('.char', {
        y:0,
        color:"#eeeeee",
        delay: 0.2,
        duration: 0.5,
    })
}
{
    const myText2 = new SplitType('.my-text2')
    
    gsap.to('.char', {
        y:0,
        color:"#eeeeee",
        delay: 0.4,
        duration: 0.5,
    })
}
{
    const myText3 = new SplitType('.my-text3')
    
    gsap.to('.char', {
        y:0,
        color:"#eeeeee",
        delay: 0.6,
        duration: 0.5,
    })
}
}
homePageAnimations()


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
        skewing: 0,
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

      const elem = document.querySelector('#abtimg img');

elem.addEventListener('mouseenter', () => {
    cursor.hide();
    // cursor.setText('Surprise!');
});

elem.addEventListener('mouseleave', () => {
    // cursor.removeText();
    cursor.show();
});
}
cursorAnimations()

function workAnimations(){
    gsap.to("#workheading span",{
        width:"80%",
        border:"1px solid #eeeeee",
        duration:0.5,
        ease:Power2,
        scrollTrigger:{
            trigger:"#work",
            start:'top 10%',
            end:'top 0%',
        }
    })
    gsap.to("#weddingspan",{
        width:"100%",
        border:"1px solid #eeeeee",
        duration:2,
        scrollTrigger:{
            trigger:"#work",
            start:'top 10%',
            end:'top 0%',
        }
    })
    gsap.to("#birthdayspan",{
        width:"100%",
        border:"1px solid #eeeeee",
        duration:2,
        scrollTrigger:{
            trigger:"#work",
            start:'50% 50%',
            end:'55% 50%',
        }
    })
    gsap.to("#potraitspan",{
        width:"100%",
        border:"1px solid #eeeeee",
        duration:2,
        scrollTrigger:{
            trigger:"#work",
            start:'70% 50%',
            end:'80% 50%%',
        }
    })
    gsap.from("#workheading h1",{
        x:100,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#work",
            start:'top 10%',
            end:'top 0%',
        }
    })
    gsap.from("#weddings h3",{
        x:100,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#work",
            start:'top 10%',
            end:'top 0%',

        }
    })
    gsap.from("#birthdays h3",{
        x:-100,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#work",
            start:'50% 50%',
            end:'55% 50%',
        }
    })
    gsap.from("#potraits h3",{
        x:100,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#work",
            start:'70% 50%',
            end:'80% 50%%',
        }
    })

}
workAnimations()

function aboutAnimations(){
    gsap.to("#aboutheading span",{
        width:"90%",
        border:"1px solid #eeeeee",
        duration:0.5,
        ease:Power2,
        scrollTrigger:{
            trigger:"#about",
            start:'top 10%',
            end:'top 0%',
        }
    });
    gsap.from("#aboutheading h1",{
        x:100,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#about",
            start:'top 10%',
            end:'top 0%',
        }
    });
    gsap.to("#abtimg img",{
        transform:"translateY(0)",
        duration:1,
        ease:Power2,
        scrollTrigger:{
            trigger:"#about",
            start:'50% 50%',
            end:'60% 50%',
        }
    });
}
aboutAnimations()

function contactAnimations(){
    gsap.to("#contactheading span",{
        width:"90%",
        border:"1px solid #eeeeee",
        duration:0.5,
        ease:Power2,
        scrollTrigger:{
            trigger:"#contact",
            start:'top 10%',
            end:'top 0%',
        }
    });
    gsap.from("#contactheading h1",{
        x:100,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#contact",
            start:'top 10%',
            end:'top 0%',
        }
    });
    gsap.to("#con-text h1",{
        color:"transparent",
        duration:0.5,
        scrollTrigger:{
            trigger:"#contact",
            start:'45% 40%',
            end:'50% 40%',
            scrub:true,
        }
    });
}
contactAnimations();




// function startLoader(){
//     let counterElement= document.getElementById("counter");
//     let currentValue=0;

//     function updateCounter(){
//         if(currentValue === 100){
//             return;
//         }
//         currentValue += Math.floor(Math.random()*10)+1;

//         if(currentValue > 100){
//             currentValue = 100;
//         }
//         counterElement.innerHTML = currentValue + "%";

//         let delay = Math.floor(Math.random()*100) + 50;
//         setTimeout(updateCounter,delay);
//     }
//     updateCounter();
// }
// startLoader();


// gsap.to("#counter",0.25,{
//     delay:2.5,
//     opacity:0
// });
// gsap.to("#counter",{
//     delay:4,
//     zIndex:0,
//     display:'none',
// });
// gsap.to(".overlay",{
//     delay:4,
//     zIndex:0,
//     display:'none',
// });

// gsap.to(".bar",1,{
//     delay:2.5,
//     height:100,
//     ease:Power4.inOut,
//     stagger:{
//         amount:0.5,
//     },
// })

