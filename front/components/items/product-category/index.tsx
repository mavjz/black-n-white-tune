import { motion } from 'framer-motion';
import React from 'react';
import Button from '../button';
import { ProductCategoryType } from './models';

const ProductCategory = ({ model, brand, price, image, link }: ProductCategoryType) => {
    return (
        <div>
            <motion.div>
                <Button
                    isImage
                    image={image}
                    alt={model + ' ' + brand}
                    isLink
                    link={link}
                    className=""
                />
            </motion.div>
            <div>
                <h3>{model}</h3>
                <p>{brand}</p>
                <h5>{price}</h5>
            </div>
        </div>
    );
};

export default ProductCategory;
