import type { AppProps } from 'next/app';
import React from 'react';
import '../public/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/container/layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-slate-100">
            <AnimatePresence mode="wait" initial={false}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AnimatePresence>
        </div>
    );
}
