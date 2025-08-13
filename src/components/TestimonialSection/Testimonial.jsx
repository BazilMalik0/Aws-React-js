import React, { useRef } from "react";
import styles from "./Testimonial.module.css";
import { testimonialData } from "../../data";
import TestimonialCard from "../TestimonialCard/TeastimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonial() {
  const swiperRef = useRef(null);

  const validTestimonials = testimonialData.filter(
    (testimonial) => testimonial.text && testimonial.name
  );

  const firstThreeTestimonials = validTestimonials.slice(0, 3);

  const nextTestimonial = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const prevTestimonial = () => {
    swiperRef.current?.swiper.slidePrev();
  };

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
            pagination={{
              clickable: true,
              el: `.${styles["custom-pagination"]}`,
            }}
            navigation={{
              nextEl: `.${styles["testimonial-nav"]}.${styles.next}`,
              prevEl: `.${styles["testimonial-nav"]}.${styles.prev}`,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
          >
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
          <div className={styles["custom-pagination"]}></div>
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
