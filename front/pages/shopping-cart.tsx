import ProductShoppingCart from '@/components/items/product-shopping-cart';
import React from 'react';

const ShoppingCart = () => {
    return (
        <div>
            <h1 className="text-4xl mx-5 mt-10 mb-20 font-gruppo font-black border-b-2 border-red-950/[0.8] pb-1">
                Shopping Cart
            </h1>
            <ProductShoppingCart
                model="GH77"
                brand="Pleyel"
                link="/"
                image="/media/piano-photos/gpiano-in-saloon.jpeg"
                color="brown"
                transfer="Transport to 3rd floor"
                quantity={2}
            />
        </div>
    );
};

export default ShoppingCart;
