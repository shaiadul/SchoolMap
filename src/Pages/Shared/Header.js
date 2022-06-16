import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import loginIcon from '../../images/login.png'
import SignupIcon from '../../images/signup.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    // console.log(admin);

    // logout
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    return (
        <div>
            <div className="navbar bg-green-400 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-base-100  w-52 font-bold">

                            <li><Link to='home'>HOME</Link></li>
                            {
                                admin &&
                                <li><Link to='dashboard'>DASHBOARD</Link></li>

                            }


                        </ul>
                    </div>
                    <Link to='home'><h1 className='text-center font-sans font-extrabold lg:text-3xl lg:ml-5'><span className='text-primary'>S</span>chool<span className='text-secondary'>M</span>ap</h1></Link>
                </div>

                <div className="navbar-end my-auto ">
                    <div className='flex lg:mr-3 my-auto justify-center align-middle py-auto mr-3'>

                        <Link to='login'><span className='flex lg:mr-5 mr-3 font-serif font-bold lg:p-2 p-3 rounded-3xl lg:hover:bg-primary hover:text-white duration-500 my-auto'><img className='pr-2 w-8 h-6' src={loginIcon} alt="" /> Login</span></Link>

                        {
                            user ? <span 
                             onClick={logout} className='flex font-serif font-bold  lg:p-2 p-3 rounded-3xl lg:bg-primary hover:text-white duration-500 my-auto'><img className='pr-2 w-8 h-6' src={SignupIcon} alt="" /> LogOut</span> : <Link to='signup'><span className='flex font-serif font-bold  lg:p-2 p-3 rounded-3xl lg:hover:bg-primary hover:text-white duration-500 my-auto'><img className='pr-2 w-8 h-6' src={SignupIcon} alt="" /> SignUp</span></Link> 
                   }

                    </div>
                </div>
            </div>

            {/* solid div for extra nav section */}
            <div className=" mx-auto hidden lg:flex bg-green-100">
                <ul className="text-center mx-auto font-bold text-primary flex">

                    <li><NavLink activeClassName='active-link' to='home' className='font-serif hover:bg-primary duration-700 hover:text-white px-2 rounded '>HOME</NavLink></li>
                    {
                        admin &&
                        <li><Link to='dashboard' className='font-serif hover:bg-primary duration-700 hover:text-white px-2 rounded '>DASHBOARD</Link></li>
                    }

                </ul>
            </div>
        </div>

    );
};

export default Header;