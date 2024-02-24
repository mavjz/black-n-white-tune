import Link from 'next/link';
import React from 'react';
import ImageFramed from '../image-framed';
import { ButtonType } from './models';

const Button = ({
    isMUIIcon,
    children,
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
    disabled,
}: ButtonType) => {
    return (
        <React.Fragment>
            {isMUIIcon ? (
                isLink ? (
                    <Link href={link} className={className}>
                        {children}
                    </Link>
                ) : (
                    <button className={buttonClassName} onClick={onClick} type={buttonType}>
                        {children}
                    </button>
                )
            ) : isLink ? (
                isImage ? (
                    <Link href={link}>
                        <ImageFramed src={image} className={className} alt={alt} />
                    </Link>
                ) : (
                    <div className={className}>
                        <Link href={link}>
                            <p>{text}</p>
                        </Link>
                    </div>
                )
            ) : isImage ? (
                <button
                    className={buttonClassName}
                    onClick={onClick}
                    type={buttonType}
                    disabled={disabled}
                >
                    <ImageFramed className={className} src={image} alt={alt} />
                </button>
            ) : (
                <button
                    className={buttonClassName}
                    onClick={onClick}
                    type={buttonType}
                    disabled={disabled}
                >
                    <p className={className}>{text}</p>
                </button>
            )}
        </React.Fragment>
    );
};

export default Button;
