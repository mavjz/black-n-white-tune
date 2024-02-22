import ProductCardHolder from '@/components/container/product-card-holder';
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
        </React.Fragment>
    );
}
