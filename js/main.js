//* #overview 애니메이션
$(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({

    "(min-width: 601px)": function () {
      const ani1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#overview",
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          // markers: true,
        }
      });

      ani1.to(".overview-logo", { y: 200, scale: 0.5, });
      ani1.from(".overview-img_wrap", { top: 600, y: -200, scale: 0.85, borderRadius: 50 }, "<");
      ani1.to(".overview-img_wrap h2:nth-child(1)", { opacity: 1, ease: "power4.out" }, "<0.3");
      ani1.to(".overview-logo", { opacity: 0, }, "<");
      ani1.to(".overview-img_wrap h2:nth-child(1)", { duration: 2, ease: "power4.out" }, "<0.3");
      ani1.to(".overview-img_wrap h2:nth-child(1)", { opacity: 0, ease: "power4.out" }, "<0.5");
      ani1.to(".overview-img_wrap h2:nth-child(2)", { opacity: 1, ease: "power4.out" }, "<0.5");
      ani1.to(".overview-img_wrap h2:nth-child(2)", { ease: "power4.out" }, "<0.5");
    },
    "(max-width: 600px)": function () {
      const ani1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#overview",
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          // markers: true,
        }
      });

      ani1.to(".overview-logo", { y: 200, scale: 0.5, });
      ani1.from(".overview-img_wrap", { top: 400, y: -200, scale: 0.85, borderRadius: 50 }, "<");
      ani1.to(".overview-img_wrap h2:nth-child(1)", { opacity: 1, ease: "power4.out" }, "<0.3");
      ani1.to(".overview-logo", { opacity: 0, }, "<");
      ani1.to(".overview-img_wrap h2:nth-child(1)", { duration: 2, ease: "power4.out" }, "<0.3");
      ani1.to(".overview-img_wrap h2:nth-child(1)", { opacity: 0, ease: "power4.out" }, "<0.5");
      ani1.to(".overview-img_wrap h2:nth-child(2)", { opacity: 1, ease: "power4.out" }, "<0.5");
      ani1.to(".overview-img_wrap h2:nth-child(2)", { ease: "power4.out" }, "<0.5");
    }
  })
})

//* #artist 애니메이션
$(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({

    "(min-width: 1201px)": function () {
      const $artistItem1 = $('#artist .artist-box-wrap .artist-box .artist-item:nth-child(1)');
      const $artistItem2 = $('#artist .artist-box-wrap .artist-box .artist-item:nth-child(2)');
      const $artistItem3 = $('#artist .artist-box-wrap .artist-box .artist-item:nth-child(3)');
      const $artistItem4 = $('#artist .artist-box-wrap .artist-box .artist-item:nth-child(4)');
      const $artistItem5 = $('#artist .artist-box-wrap .artist-box .artist-item:nth-child(5)');
      const $artistItem6 = $('#artist .artist-box-wrap .artist-box .artist-item:nth-child(6)');

      const ani2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#artist",
          start: "20% 100%",
          end: "+=100%",
          scrub: true,
          // pin: true,
          anticipatePin: 1,
          // markers: true,
        }
      });

      ani2.to([$artistItem1, $artistItem3, $artistItem4, $artistItem6], { y: 50, });
      ani2.to([$artistItem2, $artistItem5], { y: -50, }, "<");
    },
    "(max-width: 1200px)": function () {
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger && $(st.vars.trigger).is("#artist")) {
          st.kill();
        }
      });

      gsap.set("#artist .artist-box-wrap .artist-box .artist-item", { clearProps: "all" });
    }
  });

  //너비 768px이하 일때만 동작하는
  //768일때 가려진 요소들이 1번 클릭때 나타나고 2번 클릭때 페이지를 이동한다.
  let clicked = false;

  $(".artist-more-btn").on("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault(); 

      if (!clicked) {
        $(".artist-item:nth-child(4), .artist-item:nth-child(5), .artist-item:nth-child(6)").show();

        clicked = true;
      } else {
        window.location.href = "index.html"; //페이지가 없기때문에 임시로
      }
    } else {
      window.location.href = "index.html";
    }
  });

})

//* #album애니메이션
$(function () {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function () {
      const ani3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#album",
          start: "50% 60%",
          // end: "100% 100%",
          // scrub: true,
          // pin: true,
          // anticipatePin: 1,
          // markers: true,
        }
      });

      ani3.to(".fade-text", { y: -200, opacity: 0, duration: 2 });
      ani3.from(".lp-wrap", { rotate: -40, x: -240, duration: 1, ease: "power2.out" }, "<");

      const ani4 = gsap.timeline({
        scrollTrigger: {
          trigger: "#album",
          start: "top top",
          end: "+=200% top",
          scrub: 1,
          toggleActions: "play none none none",
          pin: true,
          // anticipatePin: 1,
          // markers: true,
          // toggleActions: "play none reverse none",
        }
      });

      ani4.from(".album-cover-box", { left: "45%", width: "500px", height: "500px", transformOrigin: "center center", ease: "power2.out", duration: 2 }, 4);
      ani4.fromTo(".album-cover-box .text-box", { opacity: 0, }, { opacity: 0 }, "<0.5")
      ani4.fromTo(".album-cover-box img", { filter: "blur(0px) brightness(100%)" }, { filter: "blur(4px) brightness(50%)", ease: "power2.out" }, "<");

      ani4.from("#album .numtilte", { y: -200, opacity: 0, duration: 3 });
      ani4.to(".album-cover-box .text-box", { opacity: 1, duration: 3 }, "<0.2")
      ani4.from(".navigation-wrap", { y: 300, opacity: 0, duration: 3 }, "<");
      ani4.from(".album-swiper-wrap", { y: 300, opacity: 0, duration: 3 }, "<");
      ani4.to(".fade-text", { y: -200, duration: 10 }, 5)
    },
    "(max-width: 768px)": function () {
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger && $(st.vars.trigger).is("#album")) {
          st.kill();
        }
      });

      gsap.set("#album .fade-text, #album .lp-wrap, #album .album-cover-box, #album .album-cover-box img, #album .album-cover-box .text-box, #album .navigation-wrap, #album .album-swiper-wrap, #album .numtilte", {
        clearProps: "all"
      });
    }

  });
})

//* #news애니메이션
$(function () {
  gsap.registerPlugin(ScrollTrigger);

  const ani5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#news",
      start: "top 90%",
      // markers: true,
    }
  });

  ani5.from("#news .numtilte", { y: 200, opacity: 0, duration: 1.2, ease: "power2.out" });
  ani5.from("#news .news-item-wrap", { y: 200, opacity: 0, duration: 1.2, ease: "power2.out" }, "<0.3");
})

//* brand애니메이션
$(function () {
  gsap.registerPlugin(ScrollTrigger);

  const ani6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#brand",
      start: "50% 50%",
      end: "+=200%",
      scrub: 1,
      toggleActions: "play none none none",
      pin: true,
      // anticipatePin: 1,
      // markers: true,
      // toggleActions: "play none reverse none",
      onUpdate: self => {
        const img = document.querySelector("#brand .img-wrap img");
        if (self.progress > 0.53) {
          img.src = "img/main/brand_img2.jpg";
        } else {
          img.src = "img/main/brand_img1.jpg";
        }
      }
    }
  });

  ani6.fromTo("#brand .img-wrap",
    { rotationY: 0, rotationX: 0, scale: 0.5, duration: 1, filter: "brightness(100%)" },
    { rotationY: 180, rotationX: 180, scale: 1.05, transformOrigin: "center center", duration: 1, ease: "power2.in", filter: "brightness(50%)" }
  )
    .from("#brand .text-box", { y: 200, opacity: 0, duration: 0.5 })
    .to(".loop-text", { opacity: 0 }, "<")

  gsap.registerPlugin(ScrollTrigger);

  $(".loop-text").each(function (index, element) {
    const $el = $(element);
    $el.append($el.html());

    const width = $el.width() / 2;

    gsap.to($el, {
      x: -width,
      duration: 40,
      ease: "linear",
      repeat: -1
    });
  });
})











//! swiper
$(function () {
  var swiper = new Swiper(".mySwiper1", {
    navigation: {
      nextEl: "#mySwiper1-nextBtn",
      prevEl: "#mySwiper1-prenBtn",
    },
    watchSlidesProgress: true,
    slidesPerView: 3,
    loop: true,
    on: {
      init() {
        setActiveSlides(this); //active와 fade를 중앙에 넣는 함수 
        updateAlbum(this); // active에 정보와 동일한 이미지&텍스트를 바꿔주는 함수
      },
      slideChange() {
        setActiveSlides(this);
        updateAlbum(this);
      },
    },

  });

  function setActiveSlides(swiper) {
    swiper.slides.forEach(slide => {
      slide.classList.remove('active', 'fade');
    });

    const total = swiper.slides.length;
    const active = swiper.activeIndex;
    const perView = swiper.params.slidesPerView;

    let centers = [];

    if (perView >= 4) { // 4개일 때 중앙 2개
      centers = [(active + 1) % total, (active + 2) % total];
    } else if (perView === 3) { // 3개일 때 중앙 1개
      centers = [(active + Math.floor(perView / 2)) % total];
      // 중앙 인덱스 계산
    } else if (perView === 2) { // 2개일 때 둘 다 활성
      centers = [active % total, (active + 1) % total];
    }

    swiper.slides.forEach((slide, i) => {
      if (centers.includes(i)) {
        slide.classList.add('active');
      } else {
        slide.classList.add('fade');
      }
    });
  }
  function updateAlbum(swiper) {
    const idx = swiper.realIndex; // realIndex:현재 활성화(active)된 슬라이드의 index를 반환
    const albumData = [
      { artist: "BABYMONSTER", title: "WE GO UP", img: "img/main/album1.jpg" },
      { artist: "BLACKPINK", title: "뛰어(JUMP)", img: "img/main/album2.jpg" },
      { artist: "TREASURE", title: "PARADISE", img: "img/main/album3.jpg" },
      { artist: "LEE CHANHYUK", title: "EROS", img: "img/main/album4.jpg" },
      { artist: "KANG SEUNG YOON", title: "PAGE2", img: "img/main/album5.jpg" },
    ];

    const current = albumData[idx]; //데이터를 담음

    $(".album-cover-box img").attr("src", current.img); //이미지&글자 교체
    $(".lp-wrap .lp-img img").attr("src", current.img);
    $(".album-cover-box .text-box p").text(current.artist);
    $(".album-cover-box .text-box h2").text(current.title);
  }
})
