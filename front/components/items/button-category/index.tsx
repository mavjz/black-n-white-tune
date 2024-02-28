import React, { useState } from 'react';
import Button from '../button';
import TuneIcon from '@mui/icons-material/Tune';

const ButtonCategory = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <React.Fragment>
            <Button
                isMUIIcon
                onClick={() => setIsOpen(!isOpen)}
                buttonClassName="absolute right-0 top-36 mr-5 h-10 w-52 lg:w-52 flex flex-row items-center justify-center gap-x-1 rounded-full bg-red-950 text-white"
            >
                <TuneIcon className="" />
                <p className="uppercase font-bold">filter & sort</p>
            </Button>
            <div></div>
        </React.Fragment>
    );
};

export default ButtonCategory;
