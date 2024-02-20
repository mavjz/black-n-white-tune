import React from 'react';
import Button from '../button';
import { useMedia } from 'use-media';

const VideoWelcome = () => {
    const isWide = useMedia({ minWidth: '1024px' });
    return (
        <div className="w-full h-full relative">
            <video className="w-full h-[calc(100%-3rem)] object-fill" autoPlay muted loop>
                <source src="/media/welcome-video.mp4" type="video/mp4" />
            </video>
            <div className="w-full h-full absolute bg-slate-950/[0.6] top-0 flex flex-col items-center justify-center md:justify-start md:pt-36 gap-y-5 md:gap-y-10">
                <p className="text-center text-4xl md:text-7xl font-gruppo text-white">
                    Harmony in Every Key
                </p>
                {isWide && (
                    <p className="text-center text-lg text-slate-50 mx-20">
                        Welcome to Black'n'White Tune, where every key resonates with harmony and
                        elegance. Immerse yourself in a world of musical excellence as you explore
                        our meticulously curated collection of grand pianos. From timeless classics
                        to modern marvels, each instrument embodies raftsmanship and sophistication.
                        Whether you're a seasoned pianist or an aspiring virtuoso, our selection
                        caters to every skill level and preference. Let us help you unlock your
                        musical potential and bring harmony into your home today.
                    </p>
                )}
                <Button
                    isLink
                    link="/"
                    text="Discover our story"
                    className="h-8 md:h-16 w-52 md:w-64 rounded-full bg-red-950 md:text-xl text-white flex items-center justify-center"
                />
            </div>
        </div>
    );
};

export default VideoWelcome;
