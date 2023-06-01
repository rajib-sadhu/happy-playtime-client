import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import MyToyCard from './MyToyCard';
import Swal from 'sweetalert2';
import useTitle from '../../Layout/useTitle';



const MyToys = () => {

    useTitle('My Toys')

    const [isLoading, setLoading] = useState(true);
    const [sorting, setSorting] = useState('A');

    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])

    const navigate = useNavigate()

    const url = `https://happy-playtime-server.vercel.app/myToys/${sorting}?email=${user?.email}`;

    useEffect(() => {

        setLoading(true)

        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (!data.error) {
                    setMyToys(data);
                    setLoading(false);
                }
                else {
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }, [url, sorting]);


    if (isLoading) {
        return (<div className='w-full h-screen grid place-content-center text-center'>
            <div>
                <p>Loading...</p>
                <progress className="progress w-56 mx-auto"></progress>
            </div>
        </div>)
    }



    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to remove this service!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://happy-playtime-server.vercel.app/myToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        const remaining = myToys.filter(booking => booking._id !== id);

                        if (data.deletedCount) {
                            setMyToys(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        else {
                            Swal.fire(
                                'Opps!',
                                'Somthings is wrong.',
                                'error'
                            )
                        }
                    })
            }
        })
    };


    const handleSortChange = (e)=>{
        const value = event.target.value;
        console.log(value);
        setSorting(value)
    }


    return (
        <div>

            <h1 className='my-10 text-3xl text-center uppercase font-semibold' >My myToys: {myToys.length}</h1>

            <div className='w-[13rem] ms-auto m-3'>
                <select onChange={handleSortChange} className="select select-accent w-full max-w-xs">
                    <option value='A'>Price: (Low to High)</option>
                    <option value='Z'>Price: (High to Low)</option>
                </select>
            </div>

            <div className="overflow-x-auto w-full">
                {
                    !myToys.length ?

                        <p className='text-center text-xl uppercase text-red-600 font-bold' >No Toys Found</p>

                        :

                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Images</th>
                                    <th>Toy names</th>
                                    <th>Sub Categorys</th>
                                    <th>Quantities</th>
                                    <th>Prices</th>
                                    <th>Edit / Delete</th>
                                    <th>Details</th>

                                </tr>
                            </thead>
                            <tbody className='' >
                                {


                                    myToys.map(toy => <MyToyCard key={toy._id}
                                        toy={toy}
                                        handleDelete={handleDelete}
                                    />)
                                }

                            </tbody>

                        </table>
                }

            </div>

        </div>
    );
};

export default MyToys;