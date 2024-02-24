import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import Button from '../button';

const Newsletter = () => {
    return (
        <div className="bg-slate-950 w-full h-full md:h-72 flex flex-col py-10 px-5 md:px-0 md:flex-row gap-y-2">
            <div className="w-full md:w-2/5 h-full flex flex-col justify-center gap-y-8 md:mx-10">
                <h1 className="text-white text-2xl text-center uppercase font-gruppo font-black">
                    Stay Up-to-Date with Special Offers and join Our Musical Community
                </h1>
                <p className="text-white text-lg text-center">Subscribe to Our Newsletter</p>
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center lg:pr-32 md:pr-5">
                <Formik
                    initialValues={{ email: '', approval: '' }}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        resetForm();
                    }}
                >
                    <Form className="flex flex-col gap-y-4">
                        <div>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your adress email"
                                className="w-full h-12 font-nunito px-4 border-2 border-slate-50 bg-slate-950
                                    text-white outline-none tracking-widest font-light placeholder:text-white"
                            />
                        </div>
                        <div className="grid grid-flow-col gap-x-3">
                            <Field
                                id="approval"
                                name="approval"
                                type="checkbox"
                                className="w-4 h-4 appearance-none checked:appearance-auto ring-2 ring-slate-50 accent-slate-950"
                            />
                            <label className="text-white text-sm">
                                I have read and understood the information regarding the use of my
                                personal data as outlined in the Privacy Policy, and I consent to
                                receiving personalized marketing communications from Black'n'White
                                Tune via email and other means.
                            </label>
                        </div>
                        <Button
                            text="Submit"
                            buttonType="submit"
                            className="h-10 w-full lg:w-52 rounded-full bg-red-950 lg:text-xl text-white text-center flex items-center justify-center"
                        />
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Newsletter;
