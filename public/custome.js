
 $(function() {
    var nav = $(".norm");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 50) {
            nav.removeClass('norm').addClass("navfixed");
        } else {
            nav.removeClass("navfixed").addClass('norm');
        }
    });
});



// reveal point from bottom and top of the window
var revealerpoint = 150;
window.addEventListener('scroll', reveal);
reveal();

function reveal() {
    console.log("scrolling");
    var revealers = document.querySelectorAll('.revealer');
    for (var i = 0; i < revealers.length; i++) {
        var windowheight = window.innerHeight;
        var revealertop = revealers[i].getBoundingClientRect().top;
        var revealerbottom = revealers[i].getBoundingClientRect().bottom;
        if (revealertop < windowheight - revealerpoint) {
            revealers[i].classList.add('active')
        } else {
            revealers[i].classList.remove('active');
        };
        if (revealerbottom < 0 + revealerpoint) {
            revealers[i].classList.remove('active');
        }
    } 
};


$(".openhdas").click(function (e) {
  e.stopPropagation();
  $(".site-header").toggleClass('heightexps');
  $("body").toggleClass('fixbd');
});

$(".openhdas").click(function (e) {
  e.stopPropagation();
  $(".openhdas").toggleClass('crossshwos');
});

$(".cross").click(function (e) {
  e.stopPropagation();
  $(".site-header").removeClass('heightexps'); 
  $("body").removeClass('fixbd');
});


/* counters numbers */



$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".numbers")) && !viewed) {
      viewed = true;
      $('.value').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}



/* sliders */

$(document).ready(function () {
  var owl = $('.whygridsphn');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav:false,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
   
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1.5,
		stagePadding: 30,
		margin: 10,
        nav: false,
		 center: true,
       dots: false,
        loop: true
      },

      766: {
        items: 2,
        nav: false,
        dots: false,
        loop: true
      },

      1200: {
        items: 4,
        nav: true,
        dots: false,
        loop: false
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})



/* sliders for case studys  */

$(document).ready(function () {
  var owl = $('.casestslide');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav:false,
    margin: 20,
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
   
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
		
        loop: true
      },
      300: {
        items: 1,
        nav: false,
		autoplay: true,
		 center: true,
       dots: false,
        loop: true
      },

      766: {
        items: 2,
        nav: false,
        dots: false,
        loop: true
      },

      1200: {
        items: 3,
        nav: true,
        dots: false,
        loop: false
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})


/* sliders for case studys  */

$(document).ready(function () {
  var owl = $('.bdmembslide');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav:false,
    margin: 20,
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
   
    responsive: {
      0: {
        items: 1.5,
		stagepadding:40,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1.5,
		stagepadding:40,
        nav: false,
		autoplay: true,
		 center: true,
        dots: false,
        loop: true
      },

      766: {
        items: 2,
        nav: false,
        dots: false,
        loop: true
      },

      1200: {
        items: 3,
        nav: true,
        dots: false,
        loop: false
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})


/* sliders for Partners  */

$(document).ready(function () {
  var owl = $('.partnrslide');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav:false,
    margin: 20,
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
   
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 3,
        nav: false,
		 center: true,
		 autoplay: true,
       dots: false,
        loop: true
      },

      766: {
        items: 2,
        nav: false,
        dots: false,
        loop: true
      },

      1200: {
        items: 4,
        nav: true,
        dots: false,
        loop: false
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})


/* slider for culture showcase  */

$(document).ready(function () {
  var owl = $('.culturesslide');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav:false,
    margin: 20,
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
   
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
        nav: false,
		 center: false,
		 autoplay: true,
       dots: false,
        loop: true
      },

      766: {
        items: 1,
        nav: false,
        dots: false,
        loop: true
      },

      1200: {
        items: 1,
        nav: true,
        dots: false,
        loop: false
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})