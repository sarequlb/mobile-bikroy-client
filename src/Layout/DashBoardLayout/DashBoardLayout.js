import React, { useContext } from 'react';
import Navbar from '../../SharedPage/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useSeller from '../../hooks/UseSeller';
import UseAdmin from '../../hooks/UseAdmin';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = UseAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col lg:mx-20">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {
                            isSeller ? <>
                                <li className='font-semibold'><Link to={'/dashboard/addProducts'}>Add A product</Link></li>
                                <li className='font-semibold'><Link to={'/dashboard/myProducts'}>My Products</Link></li>
                                <li className='font-semibold'><Link to={'/dashboard/myBuyers'}>My buyers</Link></li>
                            </> : <>
                                <li className='font-semibold'><Link to={'/dashboard/myBooking'}>My Bookings</Link></li><li><Link to={'/dashboard/wishlists'}>Wishlists</Link></li>
                            </>
                        }
                        {
                            isAdmin ? <>
                                <li className='font-semibold'><Link to={'/dashboard/allUsers'}>All Users</Link></li>
                                <li className='font-semibold'></li>
                            </> : <></>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;