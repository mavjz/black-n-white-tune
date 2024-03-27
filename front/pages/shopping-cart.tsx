import ProductShoppingCart from '@/components/items/product-shopping-cart';
import OrderSummary from '@/components/order-summary';
import React from 'react';

const ShoppingCart = () => {
    return (
        <div>
            <h1 className="text-4xl mx-5 mt-10 mb-8 font-gruppo font-black border-b-2 border-red-950/[0.8] pb-1">
                Shopping Cart
            </h1>
            <div className="flex flex-col md:flex-row px-5 gap-y-8">
                <div className="w-full md:w-3/5 h-fit flex flex-col flex-wrap items-center md:items-start">
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
                <div className="w-full md:w-2/5">
                    <OrderSummary price={45000} delivery={270} />
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
