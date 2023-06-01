import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Layout/useTitle';

const AddToy = () => {

    const { user } = useContext(AuthContext);

    useTitle('Add Toy')

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = user?.email;
        const toyName = form.toyName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const desc = form.desc.value;

        const toyAdd = {

            name: toyName ,
            description:desc,
            price,
            image: photo,
            rating,
            subCategory: category,
            availableQuantity: quantity,
            seller: name,
            sellerEmail: email,
        }

        console.log(toyAdd);

        fetch('https://happy-playtime-server.vercel.app/alltoys',{
            
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(toyAdd)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                form.reset();
                Swal.fire({
                    title: 'Added',
                    text: 'Added Toy successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                  
            }
        })
        .catch(err=>console.log(err))
    
    }

    return (
        <div>
            <h1 className='my-10 text-3xl text-center uppercase font-semibold' >Add Your Toy</h1>

            <div className="" >
                <div className="hero-content mx-auto">
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}>
                            <div className="md:grid md:grid-cols-2 md:p-10 p-3 gap-x-5 gap-y-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name='name' defaultValue={user?.displayName} placeholder="Enter seller name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="text" defaultValue={user?.email} readOnly name='email' placeholder="Enter seller email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name='toyName' placeholder="Enter toy name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="$ Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" name='rating' placeholder="rating" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub Category</span>
                                    </label>
                                    <select name='category' className="select select-bordered w-full" required>
                                        <option disabled selected value={`Others`} >Choose toy category</option>
                                        <option value={`Hero`} >Hero</option>
                                        <option value={`Robots`} >Robots</option>
                                        <option value={`Animals`} >Animals</option>
                                        <option value={`Super Vehicles`} >Super Vehicles</option>
                                        <option value={`Accessories`} >Accessories</option>
                                        <option value={`Others`} >Others</option>
                                    </select>
                                </div>
                                <div className="form-control md:col-span-2">
                                    <label className="label">
                                        <span className="label-text">Toy Descriptions</span>
                                    </label>
                                    <textarea className="input input-bordered h-[12rem] pt-3" placeholder='Enter toy descriptions' name="desc"></textarea>
                                </div>
                                <div className="form-control mt-6 col-span-2">
                                    <button className="btn btn-primary btn-block" type='submit' >Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;