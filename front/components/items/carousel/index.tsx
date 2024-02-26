import React from 'react';
import ImageFramed from '../image-framed';
import { CarouselType } from './models';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useMedia } from 'use-media';

const Carousel = ({ logos }: CarouselType) => {
    const isWide = useMedia({ maxWidth: '768px' });
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={5}
            slidesPerView={isWide ? 1 : 4}
            loop
            speed={4000}
            autoplay={{ delay: 2000, disableOnInteraction: false, stopOnLastSlide: false }}
            className="w-full h-52"
        >
            {logos.map((logo, index) => (
                <SwiperSlide className="w-1/4 h-52 relative">
                    <ImageFramed
                        key={index}
                        alt={logo.alt}
                        src={logo.src}
                        className="w-full h-52 object-fill"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
