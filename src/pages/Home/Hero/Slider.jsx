import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import HeroSlide from "./Slide";
import styles from "./Slider.module.scss";

function HeroSlider({ data }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      speed: 750,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      mousewheel: { forceToAxis: true },
      injectStyles: [
        `
      .swiper-pagination {
        margin-bottom: 40px 
      }

      .swiper-pagination-bullet {
        opacity: 1;
        border-radius: 0px;
        transform: rotate(45deg);
        background-color: transparent;
        margin: 8px !important;
        width: .7rem;
        height: .7rem;
        border: 1px solid var(--color-primary);
        transition: background-color 0.2s;
      }

      .swiper-pagination-bullet-active {
        background-color: var(--color-primary);
      }
    `,
      ],
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      },
    };

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container class={styles.swiper} init="false" ref={swiperRef}>
      {data.map((offer) => (
        <swiper-slide key={offer.id}>
          <HeroSlide offer={offer} lazy="true" />
        </swiper-slide>
      ))}
    </swiper-container>
  );
}

export default HeroSlider;
