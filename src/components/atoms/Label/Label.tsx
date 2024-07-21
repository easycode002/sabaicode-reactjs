import React from 'react'
import Label_Component from './Label_Component'

const Label: React.FC = () => {
    // handle click label
    const handleClick =
        (event: React.MouseEvent<HTMLLabelElement>) => {
            // alert(`កុំClick អូន😍!!`)
        };

    const handleMouseEnter = (event: React.MouseEvent<HTMLLabelElement>) => {
        console.log('Mouse entered');
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLLabelElement>) => {
        console.log('Mouse left');
    };

    return (
        <form action="">
            <div className='flex justify-center items-center'>
                <Label_Component
                    className="bg-red-400 px-12 py-2 text-4xl"
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >User name</Label_Component>
            </div>
        </form>
    );
}

export default Label
