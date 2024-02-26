import { motion } from 'framer-motion';
import React from 'react';
import Button from '../button';
import { ProductCategoryType } from './models';

const ProductCategory = ({ model, brand, price, image, link }: ProductCategoryType) => {
    return (
        <div>
            <div className="w-full md:w-1/2 lg:w-1/3 h-4/5 relative overflow-hidden">
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: {
                            duration: 1,
                        },
                    }}
                >
                    <Button
                        isImage
                        image={image}
                        alt={model + ' ' + brand}
                        isLink
                        link={link}
                        className="w-full h-[29rem] object-fill"
                    />
                </motion.div>
            </div>
            <div className="px-5 my-4 md:my-2">
                <h3 className="text-4xl font-gruppo font-black hover:underline decoration-2">
                    {model}
                </h3>
                <p className="">{brand}</p>
                <h5 className="mt-3">{price}</h5>
            </div>
        </div>
    );
};

export default ProductCategory;
