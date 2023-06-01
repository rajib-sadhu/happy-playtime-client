import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }

    return (


        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={`/`} >Home</Link  ></li>
                        <li><Link to={`/allToys`} >All Toys</Link  ></li>
                        {
                            user?.email &&
                            <>

                                <li><Link to={`/addToy`} >Add Toys</Link  ></li>
                                <li><Link to={`/myToys`} >My Toys</Link  ></li>
                            </>
                        }
                        <li><Link to={`/about`} >About Us</Link  ></li>
                        <li><Link to={`/contact`} >Contact Us</Link  ></li>
                        <li><Link to={`/blog`} >Blog</Link  ></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className='w-12 mt-1 me-2' src='https://i.ibb.co/kcp919T/bgless-logo.png' alt="" />
                    <p>Happy Playtime</p>
                    <p></p>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={`/`} >Home</Link  ></li>
                    <li><Link to={`/allToys`} >All Toys</Link  ></li>
                    {
                        user?.email &&
                        <>

                            <li><Link to={`/addToy`} >Add Toys</Link  ></li>
                            <li><Link to={`/myToys`} >My Toys</Link  ></li>
                        </>
                    }
                    <li><Link to={`/about`} >About Us</Link  ></li>
                    <li><Link to={`/contact`} >Contact Us</Link  ></li>
                    <li><Link to={`/blog`} >Blog</Link  ></li>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    !user?.email ?
                        <Link to={`/login`} >
                            <button className='btn'>
                                Login
                            </button>
                        </Link  >
                        :
                        <div className="dropdown dropdown-end" title={user?.displayName} >
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img className='object-cover' src={user?.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="justify-between">
                                        {user?.displayName}
                                        <span className="badge">New</span>
                                    </button>
                                </li>
                                <li><button>
                                    {user?.email}
                                </button></li>
                                <li>
                                    <button onClick={handleLogout} >Logout</button>
                                </li>
                            </ul>
                        </div>
                }




            </div>
        </div>

    );
};

export default Navbar;