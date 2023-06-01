import React from 'react';

const LoadingAnimate = () => {
    return (

        <div className='w-full min-h-[15rem] mt-10 grid place-content-center text-center'>
            <div>
                <p>Loading...</p>
                <progress className="progress w-56 mx-auto"></progress>
            </div>
        </div>
    );
};

export default LoadingAnimate;