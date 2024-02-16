import React from 'react';
import ImageFramed from '../image-framed';
import Button from '../button';

const Navbar = () => {
    return (
        <div className="w-full h-12 bg-black sticky top-0 flex items-center px-5">
            <Button
                isImage
                className="h-9 w-20"
                alt="Black'n'White Tune"
                image="/media/logo-picture.png"
                isLink
                link="/"
            />
        </div>
    );
};

export default Navbar;
