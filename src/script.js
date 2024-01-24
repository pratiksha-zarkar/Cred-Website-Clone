let tl = gsap.timeline({
   
    scrollTrigger: {
      trigger: ".part-2",
      
      start: "0% 50%", // when the top of the trigger hits the top of the viewport
      end: "50% 50%", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers:true,
      scrub:1,
      
    },
  });

  
  tl.to("#img3",
   {
    bottom:"-9vh",
   },'a')
   .to("#img2",
   {
    bottom:"-10vh",
   })
   .to("#img4",
   {
    bottom:"-10vh",
   })
   .to("#img1",
   {
    bottom:"-10vh",
   })
   .to("#img5",
   {
    bottom:"-10vh",
   });



   let tl2 = gsap.timeline({
   
    scrollTrigger: {
      trigger: ".part-5",
      
      start: "50% 50%", // when the top of the trigger hits the top of the viewport
      end: "150% 50%", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers:true,
      pin: true, // pin the trigger element while active
      scrub:3,
      
    },
  });

  
  tl2.to("#scroll-1",
   {
    bottom:"60vh",
   })
   .to("#scroll-1",
   {
    opacity:0,
    
   })
   .to("#scroll-2",
   {
    opacity:1,
   
   },"arrf")

   .to(".phone-img",
   {
    x:"-30%"
   
   },"arrf")

   .to("#scroll-2",
   {
   
    bottom:"60vh",
   
   })
   .to("#scroll-2",
   {
    opacity:0,
    
   })
   .to("#scroll-3",
   {
    opacity:1,
   
   },"arrs")

   .to(".phone-img",
   {
    x:"-59%"
   
   },"arrs")



   .to("#scroll-3",
   {
   
    bottom:"60vh",
   
   })
   .to("#scroll-3",
   {
    opacity:0,
    
   })
   .to("#scroll-4",
   {
    opacity:1,
   
   },"arrt")

   .to(".phone-img",
   {
    x:"-88%"
   
   },"arrt")


  //  ScrollTrigger.matchMedia({
  //   // large
  //   "(min-width: 500px)": function () {
  //     // setup animations and ScrollTriggers for screens 960px wide or greater...
  //     // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
  //   },

  //   all: function () {
  //     // ScrollTriggers created here aren't associated with a particular media query,
  //     // so they persist.
  //   },

  // });




   var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });


   



  