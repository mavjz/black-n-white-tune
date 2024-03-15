import ProductDescription from '@/components/container/product-description';
import Carousel from '@/components/items/carousel';
import ImageFramed from '@/components/items/image-framed';
import Newsletter from '@/components/items/newsletter';
import React from 'react';

const Product = ({ product, photos }) => {
    photos = [
        '/media/piano-photos/grand-piano.jpeg',
        '/media/piano-photos/upright-piano.jpeg',
        '/media/piano-photos/gpiano-in-saloon.jpeg',
    ];
    product = 'F122';
    return (
        <div>
            <div className="w-full h-fit relative flex flex-row mb-10">
                <div className="w-2/3 mt-5 flex flex-col place-items-center justify-center gap-y-4">
                    {photos.map((photo, index) => (
                        <ImageFramed
                            key={index}
                            classNameFramed="w-4/5 h-96"
                            className="object-cover"
                            src={photo}
                            alt={product}
                        />
                    ))}
                </div>
                <ProductDescription
                    name={product}
                    brand="Yamaha"
                    price="96.000 PLN"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed semper sem sit amet erat rutrum, eu facilisis dui consequat. Pellentesque 
                    in sapien dignissim, egestas elit at, vestibulum dui. Phasellus efficitur quis 
                    nisi convallis ultricies. In pulvinar imperdiet libero, in convallis orci convallis a. 
                    Morbi imperdiet neque eu tortor interdum, quis volutpat velit maximus. 
                    Aenean ut aliquam mauris. Cras nec nunc eu ipsum consectetur efficitur. 
                    Nullam ut malesuada nunc, eu fermentum tellus. Sed vitae turpis at eros 
                    porttitor efficitur ut id augue. Nulla blandit tincidunt finibus. Donec nec ex dolor. 
                    Aliquam ut orci ac orci placerat ullamcorper a et eros. Vivamus tincidunt felis vitae 
                    felis suscipit pharetra."
                    details="Vestibulum eu placerat ante. Curabitur ut magna id elit vestibulum suscipit. 
                    Mauris aliquet vestibulum dui. Nunc mollis, nisl non tempus viverra, mi arcu 
                    elementum erat, sed eleifend eros neque ac arcu. Nulla in luctus quam, quis maximus nisi. 
                    Praesent mi neque, ultrices eget eleifend vitae, sodales vel mi. 
                    Phasellus ut nisl hendrerit, vehicula metus cursus, eleifend nulla. 
                    Fusce euismod magna eget neque ornare auctor."
                />
            </div>
            <h1 className="text-4xl mx-5 my-4 font-gruppo font-black border-b-2 border-red-950/[0.8] pb-1">
                Our recommendation
            </h1>
            <Carousel
                logos={[
                    { src: '/media/piano-photos/chair.jpeg', alt: '', link: '/' },
                    { src: '/media/piano-photos/electronic-piano.jpeg', alt: '', link: '/' },
                    { src: '/media/piano-photos/gpiano-on-stage.jpeg', alt: '', link: '/' },
                    { src: '/media/piano-photos/grand-piano.jpeg', alt: '', link: '/' },
                    { src: '/media/piano-photos/upright-piano.jpeg', alt: '', link: '/' },
                    { src: '/media/piano-photos/chair.jpeg', alt: '', link: '/' },
                    { src: '/media/piano-photos/gpiano-in-saloon.jpeg', alt: '', link: '/' },
                ]}
            />
            <Newsletter />
        </div>
    );
};

export default Product;
