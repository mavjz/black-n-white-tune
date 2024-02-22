import React from 'react';
import ImageFramed from '../image-framed';
import Button from '../button';

const ProductArticle = () => {
    return (
        <div className="flex flex-col md:flex-row mt-16">
            <ImageFramed
                className="w-full md:w-1/2 h-96 object-cover"
                src="/media/piano-photos/gpiano-on-stage.jpeg"
                alt=""
            />
            <div className="w-full md:w-1/2 h-96 px-5 md:px-32 flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-bold font-nunito mt-2 text-red-950 tracking-wide">
                    Only in our store
                </h3>
                <h2 className="text-3xl font-bold my-4 text-center md:text-left">
                    Pleyel grand piano F190
                </h2>
                <p className="text-sm mb-6 text-center md:text-left">
                    Experience timeless elegance and impeccable craftsmanship with the Grand Piano
                    F190 in glossy black by Pleyel. This exquisite instrument delivers unparalleled
                    sound quality and responsiveness, making it the perfect choice for both
                    professional musicians and discerning enthusiasts. Elevate your musical journey
                    with the renowned heritage and superior performance of Pleyel's F190 Grand
                    Piano.
                </p>
                <Button
                    isLink
                    link="/"
                    text="Read more"
                    className="h-10 w-52 rounded-full bg-red-950 md:text-xl text-white flex items-center justify-center"
                />
            </div>
        </div>
    );
};

export default ProductArticle;
