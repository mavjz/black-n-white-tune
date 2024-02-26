import ProductCategory from '@/components/items/product-category';
import React from 'react';
import { ProductCategoryHolderType } from './models';

const ProductCategoryHolder = ({ products }: ProductCategoryHolderType) => {
    return (
        <div className="my-8 h-fit flex flex-row flex-wrap items-stretch gap-y-5">
            {products.map((card, index) => (
                <ProductCategory
                    brand={card.brand}
                    model={card.model}
                    price={card.price}
                    link={card.link}
                    image={card.image}
                    key={index}
                />
            ))}
        </div>
    );
};

export default ProductCategoryHolder;
