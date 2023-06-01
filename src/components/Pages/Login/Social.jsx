import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Social = () => {

    const { googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, {replace: true});
                Swal.fire(
                    `Hello ${result.user.displayName}`,
                    'Welcome to Happy Playtime',
                    'success'
                  )
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <div className="grid h-16 card bg-base-300 rounded-box place-items-center">
                <button onClick={handleGoogleSignIn} title='Google Sign In' className='hover:opacity-75 duration-150' >
                    <img className='w-8' src="https://i.ibb.co/9gmy5J7/google.png" alt="" />
                </button>
            </div>
        </div>
    );
};

export default Social;