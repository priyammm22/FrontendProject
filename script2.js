//making cursor move 
var cur=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener('mousemove',function(det){
    //    cur.style.opacity:1;
    //    blur.style.opacity:"1";
       cur.style.left=det.x+30+"px";
       cur.style.top=det.y+10+"px";
       blur.style.left=det.x-120+"px";
       blur.style.top=det.y-120+"px";
       
})

var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function()
    { 
         cur.style.scale = 3;
         cur.style.border="1px solid #fff";
         cur.style.backgroundColor="transparent";
        
    })

    elem.addEventListener("mouseleave",function()
    {
         cur.style.scale =1;
         cur.style.border="0px solid #95CE11";
         cur.style.backgroundColor="#95CE11";
        

    })
})



gsap.to("#nav",{
    backgroundColor:"black",
    height:"80px",
    duration:0.5,
    delay:1,
    scrollTrigger:{
         trigger:"#nav",
         scroller:"body",
        //  markers:1,
           start:"top -10%",
           end:"top -11%",

           scrub:1,

    }
    
    
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#part_2 img,#about",{
    y:50,
    opacity:0,
    duration:0.7,
    // stagger:0.4,
    scrollTrigger:{
            trigger:"#part_2",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 58%",
            scrub:3,
    }
})

gsap.from(".card-container .card",{
    scale:0.8,
    opacity:0,
    duration:0.8,
    stagger:0.1,
    scrollTrigger:{
            trigger:".card-container",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 68%",
            scrub:2,
    }
})

gsap.from("#colon1",{
    y:-60,
    x:-60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 70%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from("#colon2",{
    y:60,
    x:60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 70%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.to("#page3 p",{
    scale:1.2,
    cursor,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 70%",
        end:"top 45%",
        scrub:4,
    }
})