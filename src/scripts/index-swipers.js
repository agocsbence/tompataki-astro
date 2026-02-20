import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const initHeroMobile = () => {
  const el = document.querySelector("#mobile-index-slider-container");
  if (!el) return null;

  return new Swiper(el, {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    speed: 800,
    navigation: {
      nextEl: el.querySelector(".swiper-button-next"),
      prevEl: el.querySelector(".swiper-button-prev"),
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: el.querySelector(".swiper-pagination"),
      clickable: true,
    },
  });
};

const initHeroDesktop = () => {
  const el = document.querySelector("#index-slider-container");
  if (!el) return null;

  return new Swiper(el, {
    modules: [Navigation, Pagination, Autoplay],
    speed: 800,
    preventClicks: false,
    preventClicksPropagation: false,
    slideActiveClass: "slider-video-active",
    loop: true,
    watchSlidesProgress: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        const videos = document.querySelectorAll(".swiper-slide iframe");
        videos.forEach((v) => {
          if (v.pause) v.pause();
        });

        const activeSlide = document.getElementsByClassName("slider-video-active")[0];
        if (activeSlide) {
          const iframe = activeSlide.querySelector("iframe");
          if (iframe && iframe.play) iframe.play();
        }
      },
    },
    navigation: {
      nextEl: el.querySelector(".swiper-button-next"),
      prevEl: el.querySelector(".swiper-button-prev"),
    },
    pagination: {
      el: el.querySelector(".swiper-pagination"),
      clickable: true,
    },
  });
};

const initNews = () => {
  const el = document.querySelector("#news-list");
  if (!el) return null;

  return new Swiper(el, {
    modules: [Navigation],
    loop: false,
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
      nextEl: el.querySelector(".nextB"),
      prevEl: el.querySelector(".prevB"),
    },
  });
};

export function initIndexSwipers() {
  initHeroMobile();
  initHeroDesktop();
  initNews();
}