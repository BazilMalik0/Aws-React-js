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

  // Filter out any empty testimonial data
  const validTestimonials = testimonialData.filter(
    (testimonial) => testimonial.text && testimonial.name
  );

  // Take only the first 3 testimonials
  const firstThreeTestimonials = validTestimonials.slice(0, 3);

  const nextTestimonial = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const prevTestimonial = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  // Don't render if no valid testimonials
  if (firstThreeTestimonials.length === 0) {
    return <div className={styles.container}>No testimonials available</div>;
  }

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles["section-header"]}>
          <h2>
            What Our Clients Say{" "}
            <span className={styles["section-emoji"]}></span>
          </h2>
          <p>Hear from our satisfied clients about their success stories</p>
        </div>

        <div className={styles["testimonials-slider"]}>
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={1}
            modules={[Pagination, Autoplay, Navigation]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true} // Enable loop mode
          >
            {/* Duplicate the same slide 3 times to allow smooth looping */}
            {[1, 2, 3].map((_, index) => (
              <SwiperSlide key={`slide-${index}`}>
                <div className={styles["testimonial-group"]}>
                  {firstThreeTestimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} {...testimonial} />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles["testimonials-navigation"]}>
          <button
            className={`${styles["testimonial-nav"]} ${styles.prev}`}
            onClick={prevTestimonial}
          >
            ◄
          </button>
          <button
            className={`${styles["testimonial-nav"]} ${styles.next}`}
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
