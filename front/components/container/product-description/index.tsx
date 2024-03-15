import Button from '@/components/items/button';
import ButtonDetails from '@/components/items/button-details';
import React, { useState } from 'react';
import { ProductDescriptionType } from './models';
import { Field, Form, Formik } from 'formik';

const ProductDescription = ({
    name,
    brand,
    price,
    description,
    details,
}: ProductDescriptionType) => {
    const [isDescriptionShown, setIsDescriptionShown] = useState(false);
    const [isDetailsShown, setIsDetailsShown] = useState(false);

    const handleFormSubmit = (values: unknown) => {
        console.log(values);
    };

    return (
        <div className="w-full md:w-1/3 flex flex-col">
            <div className="flex flex-col mt-6 pb-12 border-b border-red-950">
                <h1 className="text-4xl font-gruppo font-black">{name}</h1>
                <h3 className="text-lg text-red-950">{brand}</h3>
                <p className="mt-4 font-semibold">{price}</p>
            </div>
            <Formik initialValues={{ color: '', transport: '' }} onSubmit={handleFormSubmit}>
                {({ values }) => (
                    <Form>
                        <div className="mt-2 pb-4 border-b border-red-950">
                            <h4>Color:</h4>
                            <div className="flex flex-row gap-x-4 mt-3 ml-1">
                                <label
                                    className={`w-7 h-7 outline outline-offset-2 outline-2 
                                    ${
                                        values.color.includes('black')
                                            ? 'outline-gray-900'
                                            : 'outline-gray-300'
                                    } 
                                    bg-black`}
                                >
                                    <Field
                                        type="radio"
                                        name="color"
                                        value="black"
                                        className="w-6 h-6 flex justify-center opacity-0"
                                    />
                                </label>
                                <label
                                    className={`w-7 h-7 outline outline-offset-2 outline-2 
                                    ${
                                        values.color.includes('white')
                                            ? 'outline-gray-900'
                                            : 'outline-gray-300'
                                    }  bg-white`}
                                >
                                    <Field
                                        type="radio"
                                        name="color"
                                        value="white"
                                        className="w-6 h-6 flex justify-center opacity-0"
                                    />
                                </label>
                                <label
                                    className={`w-7 h-7 outline outline-offset-2 outline-2 
                                    ${
                                        values.color.includes('brown')
                                            ? 'outline-gray-900'
                                            : 'outline-gray-300'
                                    }  bg-orange-950`}
                                >
                                    <Field
                                        type="radio"
                                        name="color"
                                        value="brown"
                                        className="w-6 h-6 flex justify-center opacity-0"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Field
                                as="select"
                                name="transport"
                                className="w-full h-12 my-5 px-4 py-2 border border-slate-900 focus-visible:outline-none bg-slate-50"
                            >
                                <option value="default">No transport</option>
                                <option value="grandfloor">Transfer to groundfloor</option>
                                <option value="firstfloor">Transfer to the 1st floor</option>
                                <option value="secondfloor">Transfer to the 2nd floor</option>
                                <option value="thirdfloor">Transfer to the 3rd floor</option>
                                <option value="fourthfloor">Transfer to the 4th floor</option>
                                <option value="fifthfloor">Transfer to the 5th floor</option>
                                <option value="sixthfloor">
                                    Transfer to the 6th floor and above
                                </option>
                            </Field>
                        </div>
                        <div className="flex justify-center mt-2 mb-6">
                            <Button
                                buttonType="submit"
                                text="Add to the cart"
                                className="h-10 w-72 rounded-full bg-red-950 lg:text-xl text-white flex items-center justify-center"
                            />
                        </div>
                    </Form>
                )}
            </Formik>

            <ButtonDetails
                title="Description"
                openCloseFn={() => setIsDescriptionShown(!isDescriptionShown)}
                isOpen={isDescriptionShown}
            >
                <p>{description}</p>
            </ButtonDetails>
            <ButtonDetails
                title="Product Details"
                openCloseFn={() => setIsDetailsShown(!isDetailsShown)}
                isOpen={isDetailsShown}
            >
                <p>{details}</p>
            </ButtonDetails>
        </div>
    );
};

export default ProductDescription;
