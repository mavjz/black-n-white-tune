import Link from 'next/link';
import React from 'react';
import ImageFramed from '../image-framed';
import { ButtonType } from './models';

const Button = ({
    isLink,
    link,
    isImage,
    image,
    alt,
    text,
    className,
    buttonClassName,
    onClick,
    buttonType,
}: ButtonType) => {
    return (
        <React.Fragment>
            {isLink ? (
                isImage ? (
                    <Link href={link}>
                        <ImageFramed src={image} className={className} alt={alt} />
                    </Link>
                ) : (
                    <Link href={link} className={className}>
                        <p>{text}</p>
                    </Link>
                )
            ) : isImage ? (
                <button className={buttonClassName} onClick={onClick} type={buttonType}>
                    <ImageFramed className={className} src={image} alt={alt} />
                </button>
            ) : (
                <button className={buttonClassName} onClick={onClick} type={buttonType}>
                    <p className={className}>{text}</p>
                </button>
            )}
        </React.Fragment>
    );
};

export default Button;
