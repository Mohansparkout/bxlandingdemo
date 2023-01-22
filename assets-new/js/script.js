// Navbar
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
// DOMContentLoaded  end

// AOS
AOS.init({
  duration: 1000,
});

// Scroll To Top
window.onscroll = () => {
  toggleTopButton();
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-up").classList.remove("backtop");
  } else {
    document.getElementById("back-to-up").classList.add("backtop");
  }
}

// Owl Carousel

$("#owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  slideBy: 1,
  navSpeed: 500,
  margin: 35,
  dots: false,
  center: true,
  navText: [],
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    740: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$("#blog-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  slideBy: 1,
  margin: 30,
  dots: false,
  navText: [],
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    740: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});

$("#service-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  slideBy: 1,
  margin: 30,
  dots: false,
  navText: [],
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    740: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});

$("#metaslider").owlCarousel({
  loop: true,
  autoplay: true,
  slideBy: 1,
  margin: 30,
  dots: false,
  navText: [],
  center: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    740: {
      items: 3,
    },
    1024: {
      items: 5,
    },
  },
});

$("#platform-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  slideBy: 1,
  margin: 30,
  dots: false,
  navText: [],
  center: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    740: {
      items: 1,
    },
    1024: {
      items: 3,
    },
  },
});

$("#nft-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  slideBy: 1,
  margin: 30,
  dots: false,
  navText: [],
  center: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    740: {
      items: 1,
    },
    1024: {
      items: 3,
    },
  },
});

// Metaverse Hover Effect
$(function () {
  $(".hov-two")
    .mouseenter(function () {
      $("#hide-two").css("display", "block");
      $("#hide-one").css("display", "none");
    })
    .mouseleave(function () {
      $("#hide-two").css("display", "none");
      $("#hide-one").css("display", "block");
    });
  $(".hov-three")
    .mouseenter(function () {
      $("#hide-three").css("display", "block");
      $("#hide-one").css("display", "none");
    })
    .mouseleave(function () {
      $("#hide-three").css("display", "none");
      $("#hide-one").css("display", "block");
    });
});

// Scroll
window.onscroll = () => {
  toggleTopButton();
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-up").classList.remove("backtop");
  } else {
    document.getElementById("back-to-up").classList.add("backtop");
  }
}


// Passive Listeners
jQuery.event.special.touchstart = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("touchstart", handle, { passive: false });
    } else {
      this.addEventListener("touchstart", handle, { passive: true });
    }
  }
};