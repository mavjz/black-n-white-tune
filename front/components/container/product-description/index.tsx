import Button from '@/components/items/button';
import ButtonDetails from '@/components/items/button-details';
import React, { useState } from 'react';
import { ProductDescriptionType } from './models';

const ProductDescription = ({
    name,
    brand,
    price,
    description,
    details,
}: ProductDescriptionType) => {
    const [isDescriptionShown, setIsDescriptionShown] = useState(false);
    const [isDetailsShown, setIsDetailsShown] = useState(false);

    return (
        <div className="w-full md:w-1/3 flex flex-col">
            <div className="flex flex-col pb-12 border-b border-red-950">
                <h1 className="text-4xl font-gruppo font-black">{name}</h1>
                <h3 className="text-lg text-red-950">{brand}</h3>
                <p className="mt-4 font-semibold">{price}</p>
            </div>
            <div>{/* COLORS */}</div>
            <div>{/* SELECT TRANSPORT */}</div>
            <Button
                buttonType="submit"
                text="Add to the cart"
                className="h-10 w-full rounded-full bg-red-950 lg:text-xl text-white flex items-center justify-center"
            />
            <ButtonDetails
                title="Description"
                openCloseFn={() => setIsDescriptionShown(!isDescriptionShown)}
                isOpen={isDescriptionShown}
            >
                <p>{description}</p>
            </ButtonDetails>
            <ButtonDetails
                title="Product Details"
                openCloseFn={() => setIsDetailsShown(!isDetailsShown)}
                isOpen={isDetailsShown}
            >
                <p>{details}</p>
            </ButtonDetails>
        </div>
    );
};

export default ProductDescription;
