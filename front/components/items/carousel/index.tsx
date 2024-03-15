import React from 'react';
import ImageFramed from '../image-framed';
import { CarouselType } from './models';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useMedia } from 'use-media';
import Button from '../button';

const Carousel = ({ logos }: CarouselType) => {
    const isWide = useMedia({ maxWidth: '768px' });
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={isWide ? 1 : 4}
            loop
            speed={4000}
            autoplay={{ delay: 2000, disableOnInteraction: false, stopOnLastSlide: false }}
            className="w-full h-52 mb-6"
        >
            {logos.map((logo, index) => (
                <SwiperSlide className="w-1/4 h-52 relative">
                    <Button
                        key={index}
                        isImage
                        isLink
                        image={logo.src}
                        alt={logo.alt}
                        link={logo.link}
                        className="w-full h-52 object-contain"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
