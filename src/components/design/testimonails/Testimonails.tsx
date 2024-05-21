'use client';

import { Separator } from '@/components/ui/separator';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { userTestimonails } from '@/constants';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section id="testimonails" className="section-padding">
      <MaxWidthWrapper>
        {/* <SectionHeader
          headerInfo={{
            title: `Testimonails`,
            subtitle: `Wall of Love`,
            description: `Discover what others are saying about their experience`,
          }}
        /> */}

        <div className="swiper testimonial mt-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {userTestimonails.map((review) => (
              <SwiperSlide key={review.user}>
                <div className="bg-card border rounded-2xl shadow-md p-6 relative">
                  {/* Gradient color */}
                  <div className="testimonails-gradient z-0" />
                  <p className="paragraph">{review.comment}</p>
                  <Separator className="mt-6" />

                  <div className="mt-6 flex items-center justify-start gap-5">
                    <div className="flex items-center gap-4">
                      <Image
                        width={80}
                        height={80}
                        src={review.image}
                        alt="user image"
                        className="size-10 rounded-full"
                      />

                      <div className="mb-0.5">
                        <h4 className="text-lg font-semibold text-foreground">
                          {review.user}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Indie Maker &amp; Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonials;
