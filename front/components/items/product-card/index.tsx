import React from 'react';
import Button from '../button';

const ProductCard = () => {
    return (
        <div className="relative rounded-full">
            <div className="bg-gradient-to-t from-black absolute bottom-0">
                <p>Grand pianos</p>
            </div>
            <Button
                isImage
                image="/media/piano-photos/grand-piano.jpeg"
                alt="Grand Piano"
                isLink
                link="/"
                className="h-72 w-72 object-cover rounded-ful"
            />
        </div>
    );
};

export default ProductCard;
