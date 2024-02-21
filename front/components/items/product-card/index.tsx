import React, { useState } from 'react';
import Button from '../button';
import { motion } from 'framer-motion';

const hoverVariant = {
    open: {
        scale: 1.2,
        transition: {
            duration: 1,
        },
    },
    closed: {
        scale: 1,
        transition: {
            duration: 1,
        },
    },
};

const ProductCard = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div className="h-96 md:h-72 w-full md:w-72 relative overflow-hidden">
            <motion.div
                initial={false}
                variants={hoverVariant}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                animate={isHovering ? 'open' : 'closed'}
            >
                <Button
                    isImage
                    image="/media/piano-photos/grand-piano.jpeg"
                    alt="Grand Piano"
                    isLink
                    link="/"
                    className="h-96 md:h-72 w-full md:w-72 object-cover"
                />
            </motion.div>
            <div
                className="h-96 md:h-48 w-full md:w-72 bg-gradient-to-t from-black absolute bottom-0"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <Button
                    isLink
                    link="/"
                    text="Grand Pianos"
                    className="text-white font-medium text-center text-4xl md:text-2xl tracking-wide mt-60 md:mt-28"
                />
            </div>
        </div>
    );
};

export default ProductCard;
