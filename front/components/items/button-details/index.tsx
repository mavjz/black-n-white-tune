import { motion } from 'framer-motion';
import React from 'react';
import Button from '../button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ButtonDetailsType } from './models';

const ButtonDetails = ({ openCloseFn, isOpen, title, children }: ButtonDetailsType) => {
    const buttonDetailsVariants = {
        open: {
            rotate: 180,
            transition: {
                bounce: 0,
                duration: 0.3,
            },
        },
        closed: {
            rotate: 0,
            transition: {
                bounce: 0,
                duration: 0.3,
            },
        },
    };

    const buttonDetailsOptionsVariants = {
        open: {
            display: 'flex',
            height: 'auto',
            transition: {
                bounce: 0,
                duration: 0.5,
            },
        },
        closed: {
            display: 'none',
            height: 0,
            transition: {
                bounce: 0,
                duration: 0.5,
                display: { delay: 0.5 },
            },
        },
    };

    return (
        <React.Fragment>
            <Button
                isMUIIcon
                buttonType="button"
                onClick={openCloseFn}
                className="w-full"
                buttonClassName={`${isOpen ? 'pb-4' : 'pb-2 border-b border-red-950 mb-5'}`}
            >
                <div className="w-full flex flex-row justify-between">
                    <p className="text-xl tracking-wider font-semibold">{title}</p>
                    <motion.div
                        animate={isOpen ? 'open' : 'closed'}
                        initial={false}
                        variants={buttonDetailsVariants}
                    >
                        <KeyboardArrowUpIcon />
                    </motion.div>
                </div>
            </Button>
            <motion.div
                animate={isOpen ? 'open' : 'closed'}
                initial={false}
                variants={buttonDetailsOptionsVariants}
                className="flex-wrap gap-3 pb-4 border-b border-red-950 mb-6 overflow-hidden"
            >
                {children}
            </motion.div>
        </React.Fragment>
    );
};

export default ButtonDetails;
