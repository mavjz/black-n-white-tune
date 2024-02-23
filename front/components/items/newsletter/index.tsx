import { Field, Form, Formik } from 'formik';
import React from 'react';
import Button from '../button';

const Newsletter = () => {
    return (
        <div className="bg-slate-950 w-full h-72 flex flex-col md:flex-row">
            <div className="w-2/5 h-full flex flex-col justify-center gap-y-8 mx-10">
                <h1 className="text-white text-2xl text-center uppercase font-gruppo font-black">
                    Stay Up-to-Date with Special Offers and join Our Musical Community
                </h1>
                <p className="text-white text-lg text-center">Subscribe to Our Newsletter</p>
            </div>
            <div className="w-3/5">
                <Formik>
                    <Form>
                        <div>
                            <label></label>
                            <Field type="email" />
                        </div>
                        <div>
                            <Field type="checkbox" />
                            <label className="text-white">
                                I have read and understood the information regarding the use of my
                                personal data as outlined in the Privacy Policy, and I consent to
                                receiving personalized marketing communications from Black'n'White
                                Tune via email and other means.
                            </label>
                        </div>
                        <Button text="Submit" buttonType="submit" />
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Newsletter;
