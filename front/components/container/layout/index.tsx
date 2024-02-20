import Footer from '@/components/items/footer';
import Navbar from '@/components/items/navbar';
import React from 'react';
import { LayoutType } from './models';

// Hardcoded props are temporary until add fetching data and backend part
const Layout = ({ children }: LayoutType) => {
    const pages = ['Strona', 'Strona', 'Strona', 'Strona', 'Strona'];
    const phoneNumber = '670 670 670';
    const mail = 'contact@blacknwhitetune.com';
    const country = 'Poland';
    return (
        <React.Fragment>
            <Navbar pages={pages} />
            {children}
            <Footer phoneNumber={phoneNumber} mail={mail} country={country} pages={pages} />
        </React.Fragment>
    );
};

export default Layout;
