import React from 'react';

const Sponsored = () => {

    const sponsored = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1280px-Sony_logo.svg.png',
        'https://www.codester.com/static/uploads/items/000/015/15559/preview-xl.jpg',
        'https://images-platform.99static.com//wcMcJ5964tPUK-M_ginMo47xk18=/381x196:990x805/fit-in/590x590/99designs-contests-attachments/91/91377/attachment_91377377'
    ]

    return (
        <div className='my-20' >
            <div>
                <h1 className='mx-auto text-center pb-2 uppercase font-bold md:text-3xl text-2xl border-b-2 md:w-[20rem] w-[15rem] border-[#2f85b8]' >Our Sponsored</h1>
            </div>
            <div className='md:px-20 px-3 mt-10 grid grid-cols-5 md:gap-0 gap-3 items-center'>

                {
                    sponsored.map((v, i) => {

                        return (
                            <div key={i} >
                                <img className='h-20 w-40 object-contain object-center mx-auto' src={v} alt="" />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Sponsored;