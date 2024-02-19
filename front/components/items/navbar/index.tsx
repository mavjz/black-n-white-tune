import React, { useState } from 'react';
import Button from '../button';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    return (
        <React.Fragment>
            <div className="h-full w-full absolute bg-slate-950"></div>
            <div className="w-full h-12 bg-slate-950 sticky top-0 flex justify-between px-5">
                <Button
                    isImage
                    className="h-9 w-20"
                    alt="Black'n'White Tune"
                    image="/media/logo-picture.png"
                    isLink
                    link="/"
                />
                <div className="flex gap-x-4 justify-center items-center">
                    <Button isMUIIcon isLink link="/Shop-cart-link">
                        <LocalMallOutlinedIcon htmlColor="white" fontSize="medium" />
                    </Button>
                    <Button
                        isMUIIcon
                        className="h-6 w-6"
                        onClick={() => setIsOpenMenu(true)}
                        buttonClassName=""
                        buttonType="button"
                    >
                        <MenuRoundedIcon htmlColor="white" fontSize="large" />
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
