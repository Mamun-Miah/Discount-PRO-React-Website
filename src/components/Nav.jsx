import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { AuthContextProvider } from '../AuthContex';
import { Link } from 'react-router-dom';
const Nav = () => {


    const links =
        <>
            <li><NavLink to={'/'}>Home 🏠</NavLink></li>
            <li><NavLink to={'brands'}>Brands 📦</NavLink></li>
            <li><NavLink to={'my-profile'}>My Profile 🧑</NavLink></li>
            <li><NavLink to={'About'}>About Dev </NavLink></li>
        </>
    const { user, logout } = useContext(AuthContextProvider);
    console.log(user)
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img src={logo} alt="" className='w-24' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex items-center">

                {user ? (
                    <>
                        <p className="mx-3 text-sm font-medium">Welcome: {user.displayName}</p>
                        <img
                            src={user.photoURL || "https://via.placeholder.com/40"}
                            alt="User"
                            className="w-10 h-10 rounded-full"
                        />
                        <p className="mx-3 max-sm:hidden text-sm font-medium">{user.email}</p>
                        <button onClick={logout} className="btn">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to={'/login'}>
                            <button className="btn me-2">Login</button>
                        </Link>
                        <Link to={'/register'}>
                            <button className="btn">Register</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Nav;