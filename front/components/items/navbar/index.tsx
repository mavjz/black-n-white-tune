import React from 'react';
import Button from '../button';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlinedIcon';

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
            <Button isMUIIcon isLink link="/Shop-cart-link" className="">
                <LocalMallOutlinedIcon />
            </Button>
        </div>
    );
};

export default Navbar;
