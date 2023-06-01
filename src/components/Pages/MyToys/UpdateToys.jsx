import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../Layout/useTitle';

const UpdateToys = () => {

    useTitle('Update Toy')

    const loadData = useLoaderData();
    
    const navigate = useNavigate();

    const updateToy = event => {
        event.preventDefault();

        const form = event.target;

        const toyName = form.toyName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const desc = form.desc.value;

        const update = {
            name: toyName ,
            description:desc,
            price,
            image: photo,
            availableQuantity: quantity,
        }

        fetch(`https://happy-playtime-server.vercel.app/myToys/${loadData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Updated',
                        text: 'Toy update successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                    navigate('/myToys')
                    
                }
            });

    }

    return (
        <div>
            <h1 className='my-10 text-3xl text-center uppercase font-semibold' >Update Toy: {loadData?.name} </h1>

            <div className="" >
                <div className="hero-content mx-auto">
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={updateToy}>
                            <div className="md:grid md:grid-cols-2 md:p-10 p-3 gap-x-5 gap-y-2">
                               
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name='toyName' defaultValue={loadData?.name} placeholder="Enter toy name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' defaultValue={loadData?.price} placeholder="Price" className="input input-bordered" required />
                                </div>
            
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="text" name='quantity' defaultValue={loadData?.availableQuantity} placeholder="Quantity" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy photo URL</span>
                                    </label>
                                    <input type="text" name='photo' defaultValue={loadData?.image} placeholder="Photo URL" className="input input-bordered" />
                                </div>

                                <div className="form-control md:col-span-2">
                                    <label className="label">
                                        <span className="label-text">Toy Descriptions</span>
                                    </label>
                                    <textarea className="input input-bordered h-[12rem] pt-3" defaultValue={loadData?.description} placeholder='Enter toy descriptions' name="desc"></textarea>
                                </div>
                                <div className="form-control mt-6 col-span-2">
                                    <button className="btn btn-primary btn-block" type='submit' >Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToys;