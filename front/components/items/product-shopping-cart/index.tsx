import React, { useEffect, useState } from 'react';
import ImageFramed from '../image-framed';
import Button from '../button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ProductShoppingCartType } from './models';

const ProductShoppingCart = ({
    image,
    link,
    brand,
    model,
    color,
    transfer,
    quantity,
}: ProductShoppingCartType) => {
    const [numberOfProduct, setNumberOfProduct] = useState(quantity);
    quantity = numberOfProduct;

    const TEMPOnClick = () => {
        console.log("I'm working!");
    };

    return (
        <div className="flex flex-col md:flex-row md:w-auto w-52">
            <ImageFramed
                src={image}
                alt={brand + ' ' + model}
                className="object-cover"
                classNameFramed="w-52 h-52"
            />
            <div className="flex flex-col md:pl-8 mt-2 md:mt-0 relative">
                <Button isMUIIcon onClick={TEMPOnClick} buttonClassName="w-fit absolute right-0">
                    <DeleteForeverIcon className="text-red-950 text-right" />
                </Button>
                <Button
                    isLink
                    link={link}
                    text={model}
                    className="text-3xl font-gruppo font-black mb-1"
                />
                <h3 className="text-lg font-semibold mb-4">{brand}</h3>
                <p className="text-sm">Color: {color.charAt(0).toUpperCase() + color.slice(1)}</p>
                <p className="text-sm">
                    Transfer: {transfer.charAt(0).toUpperCase() + transfer.slice(1)}
                </p>
                <div className="flex flex-row justify-center gap-x-3 rounded-full mt-6 py-1 bg-red-950 text-white">
                    <Button
                        isMUIIcon
                        buttonType="button"
                        disabled={quantity <= 1}
                        onClick={() => setNumberOfProduct(numberOfProduct - 1)}
                        buttonClassName="disabled:opacity-65"
                    >
                        <RemoveIcon />
                    </Button>
                    <p>Quantity: {quantity}</p>
                    <Button isMUIIcon onClick={() => setNumberOfProduct(numberOfProduct + 1)}>
                        <AddIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductShoppingCart;
