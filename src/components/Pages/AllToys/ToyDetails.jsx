import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import useTitle from '../../Layout/useTitle';

const ToyDetails = () => {

    const toyDetails = useLoaderData();
    console.log(toyDetails);
    
    useTitle('Toy Details')

    return (
        <div className='grid md:grid-cols-2 grid-cols-1 mt-10 px-5 gap-5'>
            <div>
                <img className='mx-auto object-contain md:h-[25rem] h-[15rem]' src={toyDetails?.image ? toyDetails?.image : 'https://i.ibb.co/kcp919T/bgless-logo.png'} alt="" />
            </div>
            <div className='space-y-3'>
                <p className='text-4xl font-semibold uppercase' >{toyDetails?.name}</p>
                <p className='text-xl' >{toyDetails?.description}</p>
                <p className='text-lg' >Seller: <span className='font-medium'>{toyDetails?.seller}</span></p>
                {
                    toyDetails?.sellerEmail &&

                    <p className='text-lg' >Seller Email: <span className='font-medium'>{toyDetails?.sellerEmail}</span></p>
                }
                <p className='text-lg' >Category: <span className='font-medium'>{toyDetails?.subCategory}</span></p>
                <p className='text-lg' >Price: <span className='font-medium'> $ {toyDetails?.price}</span></p>
                <p className='text-lg' >Quantity: <span className='font-medium'>  {toyDetails?.availableQuantity}</span></p>
                <p>
                    {toyDetails?.rating}
                    <Rating
                        className='text-xl '
                        placeholderRating={toyDetails?.rating}
                        emptySymbol={<AiFillStar className='text-white' />}
                        placeholderSymbol={<AiFillStar className='text-yellow-500' />}
                        readonly
                        fullSymbol={<AiFillStar />}
                    />
                </p>
                

            </div>
        </div>
    );
};

export default ToyDetails;