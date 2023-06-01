import React, { useContext, useState } from 'react';
import Social from './Social';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Layout/useTitle';

const Login = () => {

    const [isError, setIsError ] = useState('');

    useTitle('Login')

    const { signIn } = useContext(AuthContext);
    const location = useLocation();

    const navigate = useNavigate();

    const from = location.state?.from.pathname || '/';

    const handleLogin =event=>{

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
                Swal.fire(
                    `Hello ${user.displayName}`,
                    'Welcome to Happy Playtime',
                    'success'
                  )

            })
            .catch(err => {
                console.log(err)
                setIsError(err.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center">
                    <h1 className="md:text-5xl text-2xl text-center font-bold">Login now!</h1>
                    <img className='w-[35rem]' src="https://i.ibb.co/jyytmWC/4957412-Mobile-login-Cristina-removebg-preview.png" alt="" />
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-6 text-red-500 font-medium">
                            <p>{isError}</p>
                        </div>
                        <div className='text-center text-sm mt-5'>
                            <p>Don't have an account? <Link to='/register' className='text-blue-700 underline' >Register</Link> Now </p>
                        </div>
                        <Social/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;