import React from 'react';
import ImageFramed from '../image-framed';

const Navbar = () => {
    return (
        <div className="w-full h-10 bg-black sticky top-0">
            <ImageFramed className="w-10 h-7" alt="Black'n'White Tune" src="/logo-picture.png" />
        </div>
    );
};

export default Navbar;
