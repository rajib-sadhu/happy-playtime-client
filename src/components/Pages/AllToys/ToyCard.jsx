import React, { useContext } from 'react';
import Rating from 'react-rating';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';


const ToyCard = ({ toy }) => {

    const {user} = useContext(AuthContext);

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure>
                <img src={toy?.image ? toy.image : 'https://i.ibb.co/kcp919T/bgless-logo.png'} alt="Shoes" className='h-[10rem] w-full object-contain' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{toy?.name}</h2>
                {
                    toy?.description &&
                    <p>{toy?.description}</p>
                }
                <p>Price: $ {toy?.price}</p>
                {
                    toy?.seller &&
                    <p>Seller: {toy?.seller}</p>
                }
                <p>Quantity: {toy?.availableQuantity}</p>
                <div className='grid grid-cols-2 '>
                    <div className='flex gap-1 w-[13rem]' >
                        <p className='inline' >Rating: </p>
                        <p className='font-medium'> {toy?.rating}</p>
                        <Rating
                            className='text-xl '
                            placeholderRating={toy?.rating}
                            emptySymbol={<AiFillStar className='text-white' />}
                            placeholderSymbol={<AiFillStar className='text-yellow-500' />}
                            readonly
                            fullSymbol={<AiFillStar />}
                        />
                    </div>
                    <div className='ms-auto'>
                        <div className="badge badge-outline">{toy?.subCategory}</div>
                    </div>

                </div>

                <div className="card-actions justify-end mt-2">
                    <Link to={`/toyDetails/${toy._id}`}
                    onClick={()=>(!user?.email && 
                        Swal.fire({
                            title: 'Please Login',
                            text: 'You have to log in first to view details',
                            icon: 'error',
                            confirmButtonText: 'OK'
                          }))
                    }
                    >
                        <button className="btn">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;