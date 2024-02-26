import ProductCardHolder from '@/components/container/product-card-holder';
import Carousel from '@/components/items/carousel';
import Newsletter from '@/components/items/newsletter';
import ProductArticle from '@/components/items/product-article';
import ProductCard from '@/components/items/product-card';
import VideoWelcome from '@/components/items/video-welcome';
import React from 'react';

export default function Home() {
    return (
        <React.Fragment>
            <VideoWelcome />
            <ProductCardHolder
                products={[
                    {
                        name: 'Grand Piano',
                        link: '/',
                        image: '/media/piano-photos/grand-piano.jpeg',
                    },
                    {
                        name: 'Electronic Piano',
                        link: '/',
                        image: '/media/piano-photos/electronic-piano.jpeg',
                    },
                    {
                        name: 'Upright Piano',
                        link: '/',
                        image: '/media/piano-photos/upright-piano.jpeg',
                    },
                    {
                        name: 'Chairs',
                        link: '/',
                        image: '/media/piano-photos/chair.jpeg',
                    },
                ]}
                title="Products categories"
            />
            <h1 className="text-4xl mx-5 my-4 font-gruppo font-black border-b-2 border-red-950/[0.8] pb-1">
                Explore our collection
            </h1>
            <ProductArticle
                image="/media/piano-photos/gpiano-on-stage.jpeg"
                pretitle="Only in our store"
                title="Pleyel grand piano F190"
                description="Experience timeless elegance and impeccable craftsmanship with the Grand Piano
                    F190 in glossy black by Pleyel. This exquisite instrument delivers unparalleled
                    sound quality and responsiveness, making it the perfect choice for both
                    professional musicians and discerning enthusiasts. Elevate your musical journey
                    with the renowned heritage and superior performance of Pleyel's F190 Grand
                    Piano."
            />
            <ProductArticle
                imageRight
                image="/media/piano-photos/gpiano-in-saloon.jpeg"
                pretitle="Did you know?"
                title="Steinway B-211"
                description="Embark on a journey of unparalleled musical excellence with the Steinway B-211 
                    Grand Piano. Celebrated for its lush tones and flawless playability, the Steinway B-211 
                    stands as a timeless testament to the unwavering standards of Steinway. From the 
                    delicate touch of seasoned virtuosos to the eager fingertips of budding musicians, each 
                    note resonates with the legacy of Steinway's uncompromising dedication to perfection."
            />
            <Carousel
                logos={[
                    { src: '/media/piano-photos/gpiano-in-saloon.jpeg', alt: '' },
                    { src: '/media/piano-photos/gpiano-on-stage.jpeg', alt: '' },
                    { src: '/media/piano-photos/gpiano-in-saloon.jpeg', alt: '' },
                    { src: '/media/piano-photos/gpiano-on-stage.jpeg', alt: '' },
                    { src: '/media/piano-photos/gpiano-in-saloon.jpeg', alt: '' },
                    { src: '/media/piano-photos/gpiano-on-stage.jpeg', alt: '' },
                ]}
            />
            <Newsletter />
        </React.Fragment>
    );
}
