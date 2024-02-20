import React from 'react';
import ImageFramed from '../image-framed';
import Button from '../button';
import { FooterType } from './models';
import { motion } from 'framer-motion';
import { useMedia } from 'use-media';

const Footer = ({ phoneNumber, mail, country }: FooterType) => {
    const isWide = useMedia({ minWidth: '768px' });
    phoneNumber = '670 670 670';
    mail = 'contact@blacknwhitetune.com';
    country = 'Poland';
    const TEMPpages = ['Strona', 'Strona', 'Strona', 'Strona', 'Strona'];

    return (
        <div className="w-full bg-white pt-10 pb-28 md:pb-10 flex flex-row justify-evenly">
            <div className="flex flex-col items-center gap-y-6">
                <ImageFramed
                    src="/media/logo-picture-name-black.png"
                    alt={`Black'n'White Tune`}
                    className="w-36 h-14"
                />
                <p className="text-sm">{phoneNumber}</p>
                <p className="text-sm">{mail}</p>
                <p className="text-sm">{country}</p>
                <Button isLink link="/privacypolicy" text="Privacy policy" className="text-sm" />
            </div>
            {isWide && (
                <React.Fragment>
                    <div className="flex flex-col items-center gap-y-6">
                        <Button isLink link="/" text="Kategoria 1" className="font-bold" />
                        {TEMPpages.map((page, index) => (
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
                                <Button isLink link="/" text={page + ' ' + `${index + 1}`} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center gap-y-6">
                        <Button isLink link="/" text="Kategoria 2" className="font-bold" />
                        {TEMPpages.map((page, index) => (
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
                                <Button isLink link="/" text={page + ' ' + `${index + 1}`} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center gap-y-6">
                        <Button isLink link="/" text="Kategoria 3" className="font-bold" />
                        {TEMPpages.map((page, index) => (
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
                                <Button isLink link="/" text={page + ' ' + `${index + 1}`} />
                            </motion.div>
                        ))}
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

export default Footer;
