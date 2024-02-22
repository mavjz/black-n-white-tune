import ProductCardHolder from '@/components/container/product-card-holder';
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
                title="Products"
            />
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
        </React.Fragment>
    );
}
