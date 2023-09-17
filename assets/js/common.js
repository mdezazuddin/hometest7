$(function(){
// fixed-scroll-top
    $(window).scroll(function(){
      if($(window).scrollTop() >= 200){
        $('.scroll-top').css('display','block')
      }else{
        $('.scroll-top').css('display','none')
      }
    });   


// call-scroll-top
    $(document).ready(function(){
      $(".scroll-top").click(function(){
        $("html,body").animate({
          scrollTop: 0
        });
        return false
      });
    });


    // navbar-fixed    
    $(window).scroll(function(){
      if($(window).scrollTop() >= 300){
        $('.nav1').addClass('header-fixed')
      }else{
        $('.nav1').removeClass('header-fixed')
      }
    });

  // swiper-master    
  var swiper5 = new Swiper( '.swiper5', {
    // spaceBetween: 10,
    loop: true,
    slidesPerView: 1,

    autoplay: {
        delay: 3000,
    },
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //       dynamicBullets: true,
  //   },   
  } );  
    
    
  //page-scrollreveal
    window.sr = ScrollReveal();
    sr.reveal('.top-reveal',{
        origin: 'top',
        duration: 1200,
        distance: '20px',
        delay    : 200,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
    sr.reveal('.bottom-reveal',{
        origin: 'bottom',
        duration: 1100,
        distance: '20px',
        delay    : 200,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
    sr.reveal('.left-reveal',{
        scale: 0,
        origin: 'left',
        duration: 2000,
        delay    : 200,
        distance : '90px'
    });
    sr.reveal('.right-reveal',{
        origin: 'right',
        duration: 1600,
        distance: '20px',
        delay    : 200,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
});