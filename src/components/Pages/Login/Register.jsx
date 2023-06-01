import React, { useContext, useState } from 'react';
import Social from './Social';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Layout/useTitle';

const Register = () => {

    const [isError, setIsError ] = useState('');

    useTitle('Register')

    const { createUser, userNamePhoto } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const from = location.state?.from.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        createUser(email, password)
            .then(result => {
                const createUser = result.user;

                userNamePhoto(createUser, name, photo)
                .then(result=>{
                    console.log('update: ',result);
                    navigate(from, {replace: true});
                    Swal.fire(
                        `Hello ${createUser.displayName}`,
                        'Welcome to Happy Playtime',
                        'success'
                      )
                })
                .catch(err=>{
                    console.log(err);
                })


                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
                setIsError(error.message);
            })

        
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center">
                    <h1 className="md:text-5xl text-3xl text-center font-bold">Create Account!</h1>
                    <img className='w-[35rem]' src="https://i.ibb.co/jyytmWC/4957412-Mobile-login-Cristina-removebg-preview.png" alt="" />
                </div>
                <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="paste photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                        <div className="form-control mt-6 text-red-500 font-medium">
                            <p>{isError}</p>
                        </div>
                        <div className='text-center text-sm mt-5'>
                            <p>Already have an account? Please <Link to='/login' className='text-blue-700 underline' >Login</Link> </p>
                        </div>
                        <Social />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;