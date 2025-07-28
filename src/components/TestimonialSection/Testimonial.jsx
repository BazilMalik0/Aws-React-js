import React, { useRef, useEffect } from "react";
import styles from "./Testimonial.module.css";
import { testimonialData } from "../../data";
import TestimonialCard from "../TestimonialCard/TeastimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

function Testimonial() {
  const swiperRef = useRef(null);

  const nextTestimonial = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevTestimonial = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles["section-header"]}>
          <h2>
            What Our Clients Say{" "}
            <span className={styles["section-emoji"]}>💬</span>
          </h2>
          <p>Hear from our satisfied clients about their success stories</p>
        </div>

        <div className={styles["testimonials-slider"]} id="testimonialsSlider">
          <div
            className={styles["testimonials-slider-inner"]}
            style={{
              display: "flex",
            }}
          >
            <Swiper
              ref={swiperRef}
              spaceBetween={1}
              slidesPerView={1}
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 1000 }}
              effect="fade"
              loop={true}
              style={{ width: "100%", height: "100%" }}
            >
              {testimonialData.map((testimonial) => {
                return (
                  <SwiperSlide key={testimonial.id}>
                    <TestimonialCard
                      name={testimonial.name}
                      company={testimonial.company}
                      rating={testimonial.rating}
                      text={testimonial.text}
                      avatar={testimonial.avatar}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className={styles["testimonials-navigation"]}>
          <button
            className={`${styles["testimonial-nav"]} ${styles.prev}`}
            id="prevTestimonial"
            onClick={prevTestimonial}
          >
            ◄
          </button>
          <button
            className={`${styles["testimonial-nav"]} ${styles.next}`}
            id="nextTestimonial"
            onClick={nextTestimonial}
          >
            ►
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
