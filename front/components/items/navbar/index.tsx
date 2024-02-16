import React from 'react';
import ImageFramed from '../image-framed';
import Button from '../button';

const Navbar = () => {
    return (
        <div className="w-full h-12 bg-black sticky top-0 flex items-center px-5">
            <ImageFramed
                className="h-9 w-20"
                alt="Black'n'White Tune"
                src="/media/logo-picture.png"
            />
            <Button
                isImage
                image="/Zdjęcie-koszyka"
                alt="Shop cart"
                isLink
                link="/Link-do-sklepu"
                className=""
            />
        </div>
    );
};

export default Navbar;
