let bodyWidth;
let bodyHeight;
let navWidth;
let value;
let slideIndex = 0;


showSlides();
setSlider();
setNavWidth();
setOverlayHeight();
setWorkNavigation();


function setWorkNavigation(){
  $(document).ready(function () {
    document.getElementById("allBtn").click();
    $(".sm-nav").click(function () {
      value = $(this).attr('data-filter');
      if (value == "all") {
        $('.works-card').show('1000');
      }
      else {
        $(".works-card").not('.' + value).hide('3000');
        $('.works-card').filter('.' + value).show('3000');
      }
    });
  });
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

function setSlider() {
  bodyWidth = document.documentElement.scrollWidth;
  bodyWidth = Number(bodyWidth);
  console.log(bodyWidth);

  if (bodyWidth < 450) {
    $(document).on('ready', function () {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    });

    $(document).on('ready', function () {
      $(".regular2").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    });

  } else {
    $(document).on('ready', function () {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
    });

    $(document).on('ready', function () {
      $(".regular2").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3
      });
    });

  }
}

function setOverlayHeight() {
  bodyHeight = $(window).height();
  bodyHeight = Number(bodyHeight);
  document.getElementById("overlay").style.height = bodyHeight + "px";
  console.log("setting height to:" + bodyHeight + "px");

  $("#toggle-button").click(
    function () {
      $("#overlay").toggle();
    }
  );
}

function setNavWidth() {
  navWidth = document.documentElement.scrollWidth;
  console.log(navWidth);

  if (navWidth < 770) {
    navWidth = Number(navWidth);
    document.getElementById("navId").style.width = navWidth + "px";
    console.log("setting nav width to:" + navWidth + "px");
  }
}