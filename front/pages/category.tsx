import ProductCategory from '@/components/items/product-category';
import React from 'react';

const Category = ({ category }) => {
    category = 'Grand Pianos';
    return (
        <div>
            <h1 className="text-4xl mx-5 my-4 font-gruppo font-black border-b-2 border-red-950/[0.8] pb-1">
                {category}
            </h1>
            <ProductCategory
                model="A-188"
                brand="Steinway and sons"
                price="5600 zł"
                link="/"
                image="/media/piano-photos/grand-piano.jpeg"
            />
        </div>
    );
};

export default Category;
