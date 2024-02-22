import ProductCard from '@/components/items/product-card';
import React from 'react';
import { ProductCardHolderType } from './models';

const ProductCardHolder = ({ title, products }: ProductCardHolderType) => {
    return (
        <React.Fragment>
            <h1 className="text-4xl mx-5 my-4 font-gruppo font-black border-b-2 border-red-950/[0.8] pb-1">
                {title}
            </h1>
            <div className="md:mx-5 my-8 h-fit flex flex-col md:flex-row justify-between gap-y-5">
                {products.map((card, index) => (
                    <ProductCard name={card.name} link={card.link} image={card.image} key={index} />
                ))}
            </div>
        </React.Fragment>
    );
};

export default ProductCardHolder;
