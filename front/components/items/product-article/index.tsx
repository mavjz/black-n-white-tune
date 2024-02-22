import React from 'react';
import ImageFramed from '../image-framed';
import Button from '../button';
import { ProductArticleType } from './models';

const ProductArticle = ({
    imageRight,
    pretitle,
    title,
    description,
    image,
}: ProductArticleType) => {
    return (
        <div
            className={`flex ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col  mt-16`}
        >
            <ImageFramed className="w-full md:w-1/2 h-96 object-cover" src={image} alt={title} />
            <div className="w-full md:w-1/2 h-96 px-5 md:px-32 flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-bold font-nunito mt-2 text-red-950 tracking-wide">
                    {pretitle}
                </h3>
                <h2 className="text-3xl font-bold my-4 text-center md:text-left">{title}</h2>
                <p className="text-sm mb-6 text-center md:text-left">{description}</p>
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
