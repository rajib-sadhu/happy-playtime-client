import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import useTitle from '../useTitle';

const ErrorPage = () => {

    const error = useRouteError();

    const navigate = useNavigate();

    console.log(error);

    useTitle('Error')
    
    return (
        <div className='flex flex-col items-center md:mt-5 mt-16 space-y-5'>
        <div className='md:w-1/4 w-1/2'>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1684574134~exp=1684574734~hmac=0d37c15ffb7dfd8b147337d750581c4b6b10ed1a2708c3371e003450fc1ed7c0" alt="" />
        </div>
        <div className='text-center md:px-10 px-2 py-5 md:text-xl text-sm font-semibold'>
            <h1>Error {error.status} </h1>
            <p>Error message: {error.statusText} </p>
        </div>
        <div className=''>
            <button 
            className='bg-blue-500 px-5 py-1 rounded-2xl font-semibold text-white'
            onClick={()=>navigate('/')}
            >Go Back</button>
        </div>
    </div>


    );
};

export default ErrorPage;