import Image from 'next/image';
import React from 'react';
import { ImageFramedType } from './models';

const ImageFramed = ({ src, alt, className, classNameFramed }: ImageFramedType) => {
    return (
        <div className={`relative ` + classNameFramed}>
            <Image src={src} alt={alt} fill sizes="auto" className={className} />
        </div>
    );
};

export default ImageFramed;
