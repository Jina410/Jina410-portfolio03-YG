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
//   let x = 0, y = 0;
//   let mx = 0, my = 0; // 실제 커서 위치
//   const $cursor = $("#cursor");

//   $(window).on("mousemove", function (e) {
//     x = e.clientX - 10;
//     y = e.clientY - 10;
//   });

//   function move() {
//     mx += (x - mx) * 0.3; // 부드럽게 이동
//     my += (y - my) * 0.3;

//     $cursor.css("transform", `translate(${mx}px, ${my}px)`);
//     requestAnimationFrame(move);
//   }

//   move();
// });

$(function () {
  $(window).on("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;

    $("#cursor").css("transform", `translate(${x}px, ${y}px)`)
  })
  $('.mySwiper1').on('mouseenter', function () {
    $('#cursor').addClass("drag");
  })
  $('.mySwiper1').on('mouseout', function () {
    $('#cursor').removeClass("drag");
  })
});
