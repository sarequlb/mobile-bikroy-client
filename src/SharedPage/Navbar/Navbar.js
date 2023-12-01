import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaUser } from "react-icons/fa";

const Navbar = () => {

    const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

    const handleToggle =(e) =>{
        if(e.target.checked){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }

    useEffect(() =>{
        localStorage.setItem("theme", theme)

        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)

    },[theme])

    const NavLinks = <>
        <li className='font-semibold'><Link to={'/'}>Home</Link></li>
        <li className='font-semibold'><Link to={'/about'}>About</Link></li>
        <li className='font-semibold'><Link to={'/about'}>My Orders</Link></li>
        <li className='font-semibold'><Link to={'/about'}>My WishList</Link></li>
        <li className='font-semibold'><Link to={'/about'}>Add A product</Link></li>
        <li className='font-semibold'><Link to={'/about'}>My Products</Link></li>
        <li className='font-semibold'><Link to={'/about'}>My buyers</Link></li>
        <li className='font-semibold'><Link to={'/about'}>All Sellers</Link></li>
        <li className='font-semibold'><Link to={'/about'}>All Buyers</Link></li>
        <li className='font-semibold'><Link to={'/about'}>Reported Items</Link></li>
        <li className='font-semibold'><Link to={'/about'}>Blogs</Link></li>
    </>
    return (
        <div className='bg-blue-600 text-white'>
            <div className="navbar lg:px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-600 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <img className='w-48 lg:mx-0 mx-11' src={logo} alt=''></img>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/signIn'}> <FaUser className='inline mx-2'></FaUser>Sign in</Link>
                    <label className="cursor-pointer grid place-items-center mx-5">
                        <input checked={theme === "light" ? false : true} onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;