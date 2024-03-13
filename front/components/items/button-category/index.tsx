import React, { useEffect, useState } from 'react';
import Button from '../button';
import TuneIcon from '@mui/icons-material/Tune';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Field, Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { useMedia } from 'use-media';

const ButtonCategory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPriceShown, setIsPriceShown] = useState(false);
    const [isBrandShown, setIsBrandShown] = useState(false);
    const isWide = useMedia({ minWidth: '1024px' });

    const priceArray = [
        { value: 'to1000', label: '0zł - 1.000zł' },
        { value: 'to5000', label: '1.000zł - 5.000zł' },
        { value: 'to10000', label: '5.000zł - 10.000zł' },
        { value: 'to45000', label: '10.000zł - 45.000zł' },
        { value: 'from45000', label: '45.000zł & up' },
    ];
    const brandArray = [
        'Bechstein',
        'Bluthner',
        'Bosendorfer',
        'Erard',
        'Fazioli',
        'Pleyel',
        'Shigeru Kawai',
        'Steinway',
        'Yamaha',
    ];

    const categoryMenuBgVariants = {
        open: {
            opacity: 1,
            zIndex: 20,
            transition: {
                bounce: 0,
                duration: 1,
            },
        },
        closed: {
            opacity: 0,
            zIndex: '-10',
            transition: {
                bounce: 0,
                duration: 0.5,
                zIndex: {
                    delay: 0.5,
                },
            },
        },
    };

    const categoryMenuVariants = {
        open: {
            x: 0,
            y: 0,
            transition: {
                bounce: 0,
                duration: 1,
            },
        },
        closed: {
            x: '100%',
            y: 0,
            transition: {
                bounce: 0,
                duration: 0.5,
            },
        },
    };

    const categoryMenuMobileVariants = {
        open: {
            y: 0,
            transition: {
                bounce: 0,
                duration: 1,
            },
        },
        closed: {
            y: '-100%',
            transition: {
                bounce: 0,
                duration: 0.5,
            },
        },
    };

    const categoryButtonVariants = {
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

    const categoryOptionsVariants = {
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

    useEffect(() => {
        document.body.classList.add('overflow-x-hidden');
        if (isOpen) {
            document.body.classList.add('overflow-y-hidden');
        } else {
            document.body.classList.remove('overflow-y-hidden');
        }
    });

    return (
        <React.Fragment>
            <motion.div
                animate={isOpen ? 'open' : 'closed'}
                initial={false}
                variants={categoryMenuBgVariants}
                className="absolute bg-slate-950/[0.5] w-full h-screen top-0"
            >
                <motion.div
                    animate={isOpen ? 'open' : 'closed'}
                    initial={false}
                    variants={isWide ? categoryMenuVariants : categoryMenuMobileVariants}
                    className="bg-slate-50 w-full lg:w-2/5 h-screen absolute right-0 px-8 pt-5 overflow-y-scroll"
                >
                    <div className="w-full flex flex-row justify-between pb-2 border-b-red-950 border-b-2">
                        <h1 className="text-4xl font-gruppo font-semibold">Filter & Sort</h1>
                        <Button
                            isMUIIcon
                            onClick={() => setIsOpen(!isOpen)}
                            buttonClassName="w-fit h-fit"
                        >
                            <CloseRoundedIcon fontSize="large" />
                        </Button>
                    </div>
                    <Formik
                        initialValues={{ sort: '', price: '', brand: '' }}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ values }) => (
                            <Form className="flex flex-col">
                                <Field
                                    as="select"
                                    name="sort"
                                    className="w-full h-12 my-5 px-4 py-2 border border-slate-900 focus-visible:outline-none bg-slate-50"
                                >
                                    <option value="default">Default</option>
                                    <option value="cheap">Price low to high</option>
                                    <option value="expensive">Price high to low</option>
                                </Field>
                                <Button
                                    isMUIIcon
                                    buttonType="button"
                                    onClick={() => setIsPriceShown(!isPriceShown)}
                                    className="w-full"
                                    buttonClassName={`${
                                        isPriceShown ? 'pb-4' : 'pb-2 border-b border-red-950 mb-5'
                                    }`}
                                >
                                    <div className="w-full flex flex-row justify-between">
                                        <p className="text-xl tracking-wider font-semibold">
                                            Price
                                        </p>
                                        <motion.div
                                            animate={isPriceShown ? 'open' : 'closed'}
                                            initial={false}
                                            variants={categoryButtonVariants}
                                        >
                                            <KeyboardArrowUpIcon />
                                        </motion.div>
                                    </div>
                                </Button>
                                <motion.div
                                    animate={isPriceShown ? 'open' : 'closed'}
                                    initial={false}
                                    variants={categoryOptionsVariants}
                                    className="flex-wrap gap-3 pb-4 border-b border-red-950 mb-6 overflow-hidden"
                                >
                                    {priceArray.map((checkbox, index) => (
                                        <label
                                            key={index}
                                            htmlFor="price"
                                            className={`border-2 border-red-950 rounded-full px-5 py-2 relative
                                ${values.price.includes(checkbox.value) && 'bg-red-950 text-white'}
                                `}
                                        >
                                            <Field
                                                type="checkbox"
                                                name="price"
                                                value={checkbox.value}
                                                className="opacity-0 absolute w-full h-full top-0 left-0 rounded-full"
                                            />
                                            <span>{checkbox.label}</span>
                                        </label>
                                    ))}
                                </motion.div>
                                <Button
                                    isMUIIcon
                                    buttonType="button"
                                    onClick={() => setIsBrandShown(!isBrandShown)}
                                    className="w-full"
                                    buttonClassName={`${
                                        isBrandShown ? 'pb-4' : 'pb-2 border-b border-red-950 mb-5'
                                    }`}
                                >
                                    <div className="w-full flex flex-row justify-between">
                                        <p className="text-xl tracking-wider font-semibold">
                                            Brand
                                        </p>
                                        <motion.div
                                            animate={isBrandShown ? 'open' : 'closed'}
                                            initial={false}
                                            variants={categoryButtonVariants}
                                        >
                                            <KeyboardArrowUpIcon />
                                        </motion.div>
                                    </div>
                                </Button>
                                <motion.div
                                    animate={isBrandShown ? 'open' : 'closed'}
                                    initial={false}
                                    variants={categoryOptionsVariants}
                                    className="flex-wrap gap-3 pb-4 border-b border-red-950 mb-6 overflow-hidden"
                                >
                                    {brandArray.map((brand, index) => (
                                        <label
                                            key={index}
                                            htmlFor="brand"
                                            className={`border-2 border-red-950 rounded-full px-5 py-2 relative
                                ${values.brand.includes(brand) && 'bg-red-950 text-white'}
                                `}
                                        >
                                            <Field
                                                type="checkbox"
                                                name="brand"
                                                value={brand}
                                                className="opacity-0 absolute w-full h-full top-0 left-0 rounded-full"
                                            />
                                            <span>{brand}</span>
                                        </label>
                                    ))}
                                </motion.div>
                            </Form>
                        )}
                    </Formik>
                </motion.div>
            </motion.div>

            <Button
                isMUIIcon
                onClick={() => setIsOpen(!isOpen)}
                buttonClassName="absolute right-0 top-36 mr-5 h-10 w-52 lg:w-52 flex flex-row items-center justify-center gap-x-1 rounded-full bg-red-950 text-white"
            >
                <TuneIcon />
                <p className="uppercase font-bold">filter & sort</p>
            </Button>
        </React.Fragment>
    );
};

export default ButtonCategory;
