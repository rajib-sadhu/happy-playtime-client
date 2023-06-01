import React from 'react';
import { Link } from 'react-router-dom';

import {AiFillDelete, AiFillEdit} from 'react-icons/ai';

const MyToyCard = ({ toy, handleDelete }) => {


    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-28 h-28">
                            {
                                toy.image ? <img src={toy?.image} /> : <img src='https://jkfenner.com/wp-content/uploads/2019/11/default.jpg' />
                            }
                        </div>
                    </div>
                </div>
            </td>

            <td>
                {toy?.name}
            </td>

            <td>
                {
                    toy?.subCategory
                }
            </td>

            <td>
                {toy?.availableQuantity}
            </td>

            <td>
                $
                {
                    toy?.price
                }
            </td>


            <th className='space-x-4 text-2xl'>
                <Link title='Edit' to={`/updateToys/${toy._id}`} >
                    <button className='text-green-600' >
                        <AiFillEdit/>
                    </button>
                </Link>

                <button title='Delete' onClick={() => handleDelete(toy._id)} className='text-red-600' >
                    <AiFillDelete/>
                </button>
            </th>

            <th className='space-x-2'>
                <Link to={`/toyDetails/${toy._id}`} >
                    <button className='btn' >View Details</button>
                </Link>
            </th>

        </tr>

    );
};

export default MyToyCard;