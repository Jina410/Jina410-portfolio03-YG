$(function () { //#header
  gsap.registerPlugin(ScrollTrigger);

  let lastScrollTop = 0;
  const delta = 5;
  const navbarHeight = $("#header").outerHeight();
  const sectionTop = $("#overview").offset().top;

  $(window).on("scroll", function () {
    const st = $(this).scrollTop();

    if (st >= sectionTop + 300) { //밑으로 내려가면 메뉴색이 바뀜
      $("#header").addClass("active");
      $(".header-logo").attr("src", "img/common/YG_logo_white.png");
    } else {
      $("#header").removeClass("active");
      $(".header-logo").attr("src", "img/common/YG_logo_black.png");
    }

    if (st > lastScrollTop && st > navbarHeight) { //스크롤 발생시 메뉴숨기고나타냄
      $("#header").addClass("hide");
    } else {
      if (st + $(window).height() < $(document).height()) {
        $("#header").removeClass("hide");
      }
    }

    lastScrollTop = st;
  });

  if (Math.abs(lastScrollTop - st) <= delta) return; //올라갈때 왔다갔다하는 현상 방지

  // $(window).on("mousemove", function (e) { //마우스를 상단에 둘 경우 메뉴숨기고나타나기
  //   if (e.clientY < 145) {
  //     $("#header").removeClass("hide");
  //   }else{
  //     $("#header").addClass("hide");
  //   }
  // });
});

// $(function () {
//   $(window).on("mousemove", function (e) {
//     let x = e.clientX;
//     let y = e.clientY;

//     $("#cursor").css({
//       top: y + "px",
//       left: x + "px"
//     })
//   })
//   $('.mySwiper1').on('mouseenter', function () {
//     $('#cursor').addClass("drag");
//   })
//   $('.mySwiper1').on('mouseout', function () {
//     $('#cursor').removeClass("drag");
//   })
// });

$(function () {
  let x = 0, y = 0, mx = 0, my = 0;
  const $cursor = $("#cursor");

  $(window).on("mousemove", function (e) {
    x = e.clientX;
    y = e.clientY;
  });

  function move() {
    mx += (x - mx) * 0.1;
    my += (y - my) * 0.1;

    $cursor.css({
      left: mx + "px",
      top: my + "px",
    });
    requestAnimationFrame(move);
  }
  move();

  $(function () {
    $('.mySwiper1').on('mouseenter', function () {
      $('#cursor').addClass("drag");
      $('#cursor span:nth-child(1)').addClass("drag-on");
    })
    $('.mySwiper1').on('mouseleave', function () {
      $('#cursor').removeClass("drag");
      $('#cursor span:nth-child(1)').removeClass("drag-on");
    })
  })

  $(function () {
    $('.overview-img_wrap,#brand').on('mouseenter', function () {
      $('#cursor').addClass("scroll");
      $('#cursor span:nth-child(2)').addClass("scroll-on");
    })
    $('.overview-img_wrap,#brand').on('mouseleave', function () {
      $('#cursor').removeClass("scroll");
      $('#cursor span:nth-child(2)').removeClass("scroll-on");
    })
  })

  $(function () {
    $('.artist-item, .artist-more-btn, .album-more-btn, .news-item a').on('mouseenter', function () {
      $('#cursor').addClass("click");
      $('#cursor span:nth-child(3)').addClass("click-on");
    })
    $('.artist-item, .artist-more-btn, .album-more-btn, .news-item a').on('mouseleave', function () {
      $('#cursor').removeClass("click");
      $('#cursor span:nth-child(3)').removeClass("click-on");
    })
  })
  
  $(function () {
    $('#top,#mySwiper1-nextBtn,#mySwiper1-prenBtn').on('mouseenter', function () {
      $('#cursor').addClass("top");
    })
    $('#top,#mySwiper1-nextBtn,#mySwiper1-prenBtn').on('mouseleave', function () {
      $('#cursor').removeClass("top");
    })
  })
});


$(function () {
  $(window).scroll(function () {
    let st = $(window).scrollTop();
    let winH = $(window).height();

    if (st > winH - 300) {
      $("#top").addClass("on");
    } else {
      $("#top").removeClass("on");
    }
  })
})