import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import UseAdmin from '../../../hooks/UseAdmin';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../../SharedPage/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {

    const { user } = useContext(AuthContext)
    const [deletingUser, setDeletingUser] = useState(null)
    const [verifySeller, setVerifySeller] = useState(null)
    const [makeAdmin, setMakeAdmin] = useState(null)

    const [isAdmin, isAdminLoading] = UseAdmin(user?.email)

    const { data: allUsers = [], refetch, isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch('https://mobile-bikroy-server.vercel.app/allUsers')
            const data = res.json()
            return data;
        }
    })

    const closeModal = () => {
        setDeletingUser(null)
    }
    const cancelModal = () => {
        setVerifySeller(null)
    }
    const modalCancel = () => {
        setMakeAdmin(null)
    }
    if (isAdminLoading) {
        <div className='flex justify-center items-center my-40'>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (isLoading) {
        <div className='flex justify-center items-center my-40'>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    //make admin

    const handleMakeAdmin = (id) => {
        fetch(`https://mobile-bikroy-server.vercel.app/allUsers/${id}`, {
            method: 'PUT',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfully')
                    refetch()
                }
            })
    }

    //dellete user

    const handleDeleteUser = (id) => {
        console.log(id)
        fetch(`https://mobile-bikroy-server.vercel.app/allUsers/${id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Deleted Successfully')
                    refetch()
                }
            })
    }

    ///verify admin

    const handleVerifySeller = (id) => {
        console.log(id)
        fetch(`https://mobile-bikroy-server.vercel.app/allUsers/seller/${id}`, {
            method: 'PUT',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Make verified Successfully')
                    refetch()
                }
            })
    }
    return (
        <div>
            <h1 className='text-2xl my-10 font-bold text-center'>All Users</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Admin</th>
                            <th>Delete</th>
                            <th>Seller Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((allUser, i) => <tr >
                                <th>{i + 1}</th>
                                <td>{allUser.name}</td>
                                <td>{allUser.email}</td>
                                <td>{allUser.accountType}</td>
                                {
                                    allUser?.role !== 'admin' ? <td><label onClick={() => setMakeAdmin(allUser._id)} htmlFor="confirmation-modal" className="btn btn-xs btn-primary">Make Admin</label></td> : <td><p className='font-bold'>Admin</p></td>
                                }
                                <label onClick={() => setDeletingUser(allUser._id)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                {allUser?.verify !== true ?
                                    <td><label disabled={allUser?.accountType === 'Buyer'} onClick={() => setVerifySeller(allUser._id)} htmlFor="confirmation-modal" className="btn btn-xs btn-accent">Verify Seller</label></td> : <td><p className='font-bold'>verified</p></td>
                                }

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {
                deletingUser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    closeModal={closeModal}
                    successAction={handleDeleteUser}
                    modalData={deletingUser}
                    buttonName='Delete'
                >

                </ConfirmationModal>
            }
            {
                verifySeller && <ConfirmationModal
                    title={`Are you sure you want to verify?`}
                    closeModal={cancelModal}
                    successAction={handleVerifySeller}
                    modalData={verifySeller}
                    buttonName='Verify'
                >

                </ConfirmationModal>
            }
            {
                makeAdmin && <ConfirmationModal
                    title={`Are you sure you want to make admin?`}
                    closeModal={modalCancel}
                    successAction={handleMakeAdmin}
                    modalData={makeAdmin}
                    buttonName='Yes'
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;