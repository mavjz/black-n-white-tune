import React, { useEffect, useState } from 'react';
import Button from '../button';
import TuneIcon from '@mui/icons-material/Tune';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Field, Form, Formik } from 'formik';

const ButtonCategory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPriceShown, setIsPriceShown] = useState(false);
    const [isBrandShown, setIsBrandShown] = useState(false);
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

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-y-hidden');
        } else {
            document.body.classList.remove('overflow-y-hidden');
        }
    });
    return (
        <React.Fragment>
            <div className="absolute bg-slate-950/[0.5] w-full h-screen top-0 z-20">
                <div className="bg-slate-50 w-2/5 h-screen absolute right-0 px-8 pt-5">
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
                                <Field as="select" name="sort">
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
                                        <KeyboardArrowUpIcon />
                                    </div>
                                </Button>
                                <div
                                    className={`flex-wrap gap-3 pb-4 border-b border-red-950 mb-6 ${
                                        isPriceShown ? 'flex ' : 'hidden'
                                    }`}
                                >
                                    {priceArray.map((checkbox, index) => (
                                        <label
                                            key={index}
                                            htmlFor="price"
                                            className={`border-2 border-red-950 rounded-full px-5 py-2 relative
                                        ${
                                            values.price.includes(checkbox.value) &&
                                            'bg-red-950 text-white'
                                        }
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
                                </div>
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
                                        <KeyboardArrowUpIcon />
                                    </div>
                                </Button>
                                <div
                                    className={`flex-wrap gap-3 pb-4 border-b border-red-950 mb-6 ${
                                        isBrandShown ? 'flex ' : 'hidden'
                                    }`}
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
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
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
