$(document).ready(function () {
  $(".responsive").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    //  mobileFirst:true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          activateRows: true,
        },
      },
    ],
  });
  $(".responsive").on("wheel", function (e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickNext");
    } else {
      $(this).slick("slickPrev");
    }
  });
});

$(document).ready(function () {
  $(".myvideo")
    .on("mouseover", function (event) {
      if (!this.play == true || this.paused == true) {
        $("video").css("cursor", "url('images/play.png'), auto");
      } else {
        $("video").css("cursor", "url('images/pause.png'), auto");
        this.play();
      }
    })
    .on("mouseout", function (event) {
      // this.pause();
    });
});

$(".myvideo").click(function () {
  if (this.paused == false) {
    this.pause();
    $("video").css("cursor", "url('images/play.png'), auto");
  } else {
    this.play();
    $("video").css("cursor", "url('images/pause.png'), auto");
  }
});

$(".myvideo").dblclick(function () {
  window.location.href = "campaign.html";
});

//$(window).resize(function(){
//  $('.responsive')[0].slick.refresh();
//});
