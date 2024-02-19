import React, { useState } from 'react';
import Button from '../button';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { motion } from 'framer-motion';
import { useMedia } from 'use-media';

const navbarMenuVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            bounce: 0,
            duration: 1,
            delayChildren: 0.9,
            staggerChildren: 0.2,
        },
    },
    closed: {
        opacity: 0,
        y: '-100%',
        transition: {
            bounce: 0,
            delay: 0.5,
            duration: 0.5,
            staggerChildren: 0.1,
            staggerDirection: -1,
        },
    },
};

const navbarMenusElementsVariants = {
    open: {
        opacity: 1,
        x: 0,
        transition: {
            bounce: 0,
        },
    },
    closed: {
        opacity: 0,
        x: '-100%',
        transition: {
            bounce: 0,
        },
    },
};

const navbarMenuButtonVariants = {
    open: {
        opacity: [1, 0, 1],
        rotate: 360,
        transition: {
            bounce: 0,
            duration: 0.5,
        },
    },
    closed: {
        opacity: [1, 0, 1],
        rotate: 0,
        transition: {
            bounce: 0,
            duration: 0.5,
        },
    },
};

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const TEMPpages = ['Strona', 'Strona', 'Strona', 'Strona', 'Strona'];
    const isWide = useMedia({ maxWidth: '768px' });

    return (
        <React.Fragment>
            <motion.div
                className="h-[calc(100%-2.75rem)] w-full absolute bg-slate-950 flex flex-col px-5 my-11 py-10 gap-y-6"
                animate={isOpenMenu ? 'open' : 'closed'}
                initial={false}
                variants={navbarMenuVariants}
            >
                {TEMPpages.map((page, index) => (
                    <motion.div variants={navbarMenusElementsVariants} key={index}>
                        <Button
                            isLink
                            link="/"
                            text={page + ' ' + `${index + 1}`}
                            className="text-white text-xl"
                        />
                    </motion.div>
                ))}
            </motion.div>
            <div className="w-full h-12 bg-slate-950 sticky top-0 flex justify-between items-center px-5">
                <div className="flex items-center gap-x-4">
                    <Button
                        isImage
                        className="h-9 w-20"
                        alt="Black'n'White Tune"
                        image={'/media/logo-picture.png'}
                        isLink
                        link="/"
                    />
                    {!isWide && <p className="text-white text-xl">Black'n'White Tune</p>}
                </div>
                <div className="flex gap-x-4 justify-center items-center md:gap-x-6">
                    {!isWide &&
                        TEMPpages.map((page, index) => (
                            <motion.div
                                whileHover={{
                                    fontSize: '17px',
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                whileTap={{ scale: 0.9 }}
                                key={index}
                            >
                                <Button
                                    isLink
                                    link="/"
                                    text={page + ' ' + `${index + 1}`}
                                    className="text-white text-l"
                                />
                            </motion.div>
                        ))}

                    <Button isMUIIcon isLink link="/log-in-link">
                        <PersonOutlineOutlinedIcon htmlColor="white" fontSize="medium" />
                    </Button>

                    <Button isMUIIcon isLink link="/Shop-cart-link">
                        <LocalMallOutlinedIcon htmlColor="white" fontSize="medium" />
                    </Button>

                    {isWide && (
                        <Button
                            isMUIIcon
                            className="h-6 w-6"
                            onClick={() => setIsOpenMenu(!isOpenMenu)}
                            buttonClassName=""
                            buttonType="button"
                        >
                            <motion.div
                                animate={isOpenMenu ? 'open' : 'closed'}
                                initial={false}
                                variants={navbarMenuButtonVariants}
                            >
                                {isOpenMenu ? (
                                    <CloseRoundedIcon htmlColor="white" fontSize="large" />
                                ) : (
                                    <MenuRoundedIcon htmlColor="white" fontSize="large" />
                                )}
                            </motion.div>
                        </Button>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
