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
            className={`flex ${imageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col mt-12`}
        >
            <ImageFramed
                classNameFramed="w-full lg:w-1/2 h-96 object-cover"
                className="w-full object-cover"
                src={image}
                alt={title}
            />
            <div className="w-full lg:w-1/2 h-fit lg:h-96 pb-6 lg:pb-0 px-5 lg:px-24 flex flex-col items-center lg:items-start">
                <h3 className="text-2xl font-bold font-nunito mt-2 text-red-950 tracking-wide">
                    {pretitle}
                </h3>
                <h2 className="text-3xl font-bold my-4 text-center lg:text-left">{title}</h2>
                <p className="text-sm mb-6 text-center lg:text-left">{description}</p>
                <Button
                    isLink
                    link="/"
                    text="Read more"
                    className="h-10 w-52 rounded-full bg-red-950 lg:text-xl text-white flex items-center justify-center"
                />
            </div>
        </div>
    );
};

export default ProductArticle;
