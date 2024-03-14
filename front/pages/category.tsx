import ProductCategoryHolder from '@/components/container/product-category-holder';
import ButtonCategory from '@/components/container/button-category';
import React from 'react';

const Category = ({ category }) => {
    category = 'Grand Pianos';
    return (
        <div>
            <h1 className="text-4xl mx-5 mt-10 mb-20 font-gruppo font-black border-b-2 border-red-950/[0.8] pb-1">
                {category}
            </h1>
            <ButtonCategory />
            <ProductCategoryHolder
                products={[
                    {
                        model: 'A-188',
                        brand: 'Steinway and sons',
                        price: '5600 zł',
                        link: '/',
                        image: '/media/piano-photos/grand-piano.jpeg',
                    },
                    {
                        model: 'B-164',
                        brand: 'Yamaha',
                        price: '9300 zł',
                        link: '/',
                        image: '/media/piano-photos/upright-piano.jpeg',
                    },
                    {
                        model: 'F-330',
                        brand: 'Shigeru Kawai',
                        price: '98 000 zł',
                        link: '/',
                        image: '/media/piano-photos/gpiano-in-saloon.jpeg',
                    },
                    {
                        model: 'A-188',
                        brand: 'Steinway and sons',
                        price: '5600 zł',
                        link: '/',
                        image: '/media/piano-photos/grand-piano.jpeg',
                    },
                    {
                        model: 'F-330',
                        brand: 'Shigeru Kawai',
                        price: '98 000 zł',
                        link: '/',
                        image: '/media/piano-photos/gpiano-in-saloon.jpeg',
                    },
                    {
                        model: 'B-164',
                        brand: 'Yamaha',
                        price: '9300 zł',
                        link: '/',
                        image: '/media/piano-photos/upright-piano.jpeg',
                    },
                    {
                        model: 'A-188',
                        brand: 'Steinway and sons',
                        price: '5600 zł',
                        link: '/',
                        image: '/media/piano-photos/grand-piano.jpeg',
                    },
                    {
                        model: 'B-164',
                        brand: 'Yamaha',
                        price: '9300 zł',
                        link: '/',
                        image: '/media/piano-photos/upright-piano.jpeg',
                    },
                    {
                        model: 'F-330',
                        brand: 'Shigeru Kawai',
                        price: '98 000 zł',
                        link: '/',
                        image: '/media/piano-photos/gpiano-in-saloon.jpeg',
                    },
                    {
                        model: 'F-330',
                        brand: 'Shigeru Kawai',
                        price: '98 000 zł',
                        link: '/',
                        image: '/media/piano-photos/gpiano-in-saloon.jpeg',
                    },
                    {
                        model: 'A-188',
                        brand: 'Steinway and sons',
                        price: '5600 zł',
                        link: '/',
                        image: '/media/piano-photos/grand-piano.jpeg',
                    },
                    {
                        model: 'F-330',
                        brand: 'Shigeru Kawai',
                        price: '98 000 zł',
                        link: '/',
                        image: '/media/piano-photos/gpiano-in-saloon.jpeg',
                    },
                ]}
            />
        </div>
    );
};

export default Category;
