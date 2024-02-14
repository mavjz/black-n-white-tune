import Image from 'next/image';
import React from 'react';
import { ImageFramedType } from './models';

const ImageFramed = ({ src, alt, className }: ImageFramedType) => {
    return (
        <div className={className}>
            <Image src={src} alt={alt} fill />
        </div>
    );
};

export default ImageFramed;
