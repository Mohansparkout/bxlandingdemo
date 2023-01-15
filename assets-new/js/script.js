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

// Video Play
const video = document.getElementById("video1");
const circlePlayButton = document.getElementById("play");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
  circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
  circlePlayButton.style.opacity = 1;
});

// second video
const videoalt = document.getElementById("video2");
const circlePlayButtonalt = document.getElementById("playlist");

function togglePlay() {
  if (video2.paused || video2.ended) {
    video2.play();
  } else {
    video2.pause();
  }
}

circlePlayButtonalt.addEventListener("click", togglePlay);
videoalt.addEventListener("playing", function () {
  circlePlayButtonalt.style.opacity = 0;
});
videoalt.addEventListener("pause", function () {
  circlePlayButtonalt.style.opacity = 1;
});

// Third video
const videofull = document.getElementById("video3");
const circlePlayButtonmain = document.getElementById("videomain");

function togglePlay() {
  if (video3.paused || video3.ended) {
    video3.play();
  } else {
    video3.pause();
  }
}

circlePlayButtonmain.addEventListener("click", togglePlay);
videoalt.addEventListener("playing", function () {
  circlePlayButtonmain.style.opacity = 0;
});
videoalt.addEventListener("pause", function () {
  circlePlayButtonmain.style.opacity = 1;
});
