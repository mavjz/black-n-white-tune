import React, { useState } from 'react';
import Button from '../button';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { motion, spring } from 'framer-motion';

const navbarVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            bounce: 0,
            duration: 1,
        },
    },
    closed: {
        opacity: 0,
        y: '-100%',
        transition: {
            bounce: 0,
            duration: 1,
        },
    },
};

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <React.Fragment>
            <motion.div
                className="h-[calc(100%-2.8rem)] w-full absolute bg-slate-950 flex flex-col px-5 my-11 py-10 gap-y-6"
                animate={isOpenMenu ? 'open' : 'closed'}
                initial={false}
                variants={navbarVariants}
            >
                <Button isLink link="/" text="Strona 1" className="text-white text-xl" />
                <Button isLink link="/" text="Strona 2" className="text-white text-xl" />
                <Button isLink link="/" text="Strona 3" className="text-white text-xl" />
                <Button isLink link="/" text="Strona 4" className="text-white text-xl" />
            </motion.div>
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
                        onClick={() => setIsOpenMenu(!isOpenMenu)}
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
