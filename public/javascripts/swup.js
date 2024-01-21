const swup = new Swup();


gsap.to("#web path",{
    strokeDashoffset:0,
    duration:2,
    ease:Power3
})
gsap.to("#web path",{
    fill:"#eeeeee",
    duration:1,
    // delay:1,
    ease:Power1
},'a')
gsap.to("#your path",{
    fill:"#eeeeee",
    duration:1,
    // delay:1,
    ease:Power1
},'a')
gsap.to("#load path",{
    fill:"#eeeeee",
    duration:1,
    // delay:1,
    ease:Power1
},'a')

gsap.to("#scam",{
    opacity:0,
    // transform:'translateY(-100%)',
    display:"none",
    duration:0.5,
    delay:4
})

gsap.to(".overlay",{
    transform:'translateY(-100%)',
    duration:2,
    delay:4
})
