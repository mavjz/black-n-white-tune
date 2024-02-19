import type { AppProps } from 'next/app';
import React from 'react';
import '../public/styles/globals.css';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} />
        </AnimatePresence>
    );
}
