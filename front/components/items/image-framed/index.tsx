import Image from 'next/image';
import React from 'react';
import { ImageFramedType } from './models';
import Button from '../button';

const ImageFramed = ({ src, alt, className }: ImageFramedType) => {
    return (
        <div className={`relative ` + className}>
            <Image src={src} alt={alt} fill />
            <Button
                isImage
                image="/Zdjęcie-koszyka"
                alt="Shop cart"
                isLink
                link="/Link-do-sklepu"
                className=""
            />
        </div>
    );
};

export default ImageFramed;
