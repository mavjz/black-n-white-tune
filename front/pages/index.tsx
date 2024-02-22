import ProductCard from '@/components/items/product-card';
import VideoWelcome from '@/components/items/video-welcome';
import React from 'react';

export default function Home() {
    return (
        <React.Fragment>
            <VideoWelcome />
            <h1 className="text-4xl mx-5 my-4 font-gruppo font-black border-b-2 border-red-950/[0.8] pb-1">
                Products
            </h1>
        </React.Fragment>
    );
}
