import React, { useState } from 'react';
import Button from '../items/button';
import { OrderSummaryType } from './models';

const OrderSummary = ({ price, delivery }: OrderSummaryType) => {
    const [showPromo, setShowPromo] = useState(false);
    return (
        <div className="bg-red-950/5 pb-5">
            <h1 className="uppercase text-3xl font-gruppo font-black pl-2 py-2 bg-red-950/10">
                Order Summary
            </h1>
            <div className="mt-4 px-5 flex flex-col text-xl gap-y-2">
                <div className="flex flex-row justify-between">
                    <h3>Subtotal:</h3>
                    <h3>{price} PLN</h3>
                </div>
                <div className="flex flex-row justify-between">
                    <h3>Delivery</h3>
                    <h3>{delivery} PLN</h3>
                </div>
                <div className="flex flex-row justify-between">
                    <h3>Total</h3>
                    <h3>{price + delivery} PLN</h3>
                </div>
                <div>
                    <Button
                        text="Apply Promo Code"
                        buttonClassName="text-sm mb-2"
                        onClick={() => setShowPromo(!showPromo)}
                    />
                    {showPromo && <div>WPISYWANIE KODU</div>}
                </div>
            </div>
            <Button
                buttonType="submit"
                text="Proceed to checkout"
                className="uppercase rounded-full bg-red-950 text-white ml-5 mt-6 py-1 px-4"
            />
        </div>
    );
};

export default OrderSummary;
