import React from 'react';

import {IoIosCall} from 'react-icons/io';
import {AiFillMail} from 'react-icons/ai';
import {FaAddressCard} from 'react-icons/fa';
import useTitle from '../../Layout/useTitle';

const Contact = () => {

    useTitle('Contact Us')

    return (
        <div className='my-20'>
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 mb-4 text-center">Contact Us</h1>
            <div>
                <img className='mx-auto' src="https://i.ibb.co/LdbnFh2/contact.png" alt="" />
            </div>
            <div className='w-[80%] mx-auto mt-10'>
                <div className="flex w-full gap-5">
                    <div className="grid h-40 flex-grow card bg-base-300 rounded-box place-items-center p-5">
                        <div className='text-5xl'>
                            <IoIosCall/>
                        </div>
                        <div className='text-center'>
                            <span className='font-semibold text-xl'>Phone</span> <br />
                            +91 1234567890
                        </div>
                    </div>
               
                    <div className="grid h-40 flex-grow card bg-base-300 rounded-box place-items-center p-5">
                        <div className='text-5xl'>
                            <AiFillMail/>
                        </div>
                        <div className='text-center'>
                            <span className='font-semibold text-xl'>Email</span> <br />
                            rajib@email.com
                        </div>
                    </div>
               
                    <div className="grid h-40 flex-grow card bg-base-300 rounded-box place-items-center p-5">
                        <div className='text-5xl'>
                            <FaAddressCard/>
                        </div>
                        <div className='text-center'>
                            <span className='font-semibold text-xl'>Address</span> <br />
                            Kolkata, West Bengal, India
                        </div>
                    </div>
               
                </div>
            </div>
        </div>
    );
};

export default Contact;