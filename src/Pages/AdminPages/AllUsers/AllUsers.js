import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import UseAdmin from '../../../hooks/UseAdmin';
import { AuthContext } from '../../../contexts/AuthProvider';

const AllUsers = () => {

    const {user} = useContext(AuthContext)

    const [isAdmin,isAdminLoading] = UseAdmin(user?.email)

    const { data: allUsers=[], refetch,isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUsers')
            const data = res.json()
            return data;
        }
    })
    if(isAdminLoading){
        <h1>loading.........</h1>
    }

    if(isLoading){
        <h1>loading..........</h1>
    }
    const handleMakeAdmin = (id) =>{
        fetch(`http://localhost:5000/allUsers/${id}`,{
            method:'PUT',
            headers: {

            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount < 0){
                toast.success('Make Admin Successfully')
                refetch()
            }
        })
    }
    const handleDeleteAdmin = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/allUsers/${id}`,{
            method:'DELETE',
            headers: {

            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount < 0){
                toast.success('Deleted Successfully')
                refetch()
            }
        })
    }

    console.log(allUsers)
    return (
        <div>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((allUser,i) => <tr >
                                <th>{i+1}</th>
                                <td>{allUser.name}</td>
                                <td>{allUser.email}</td>
                                <td>{allUser.accountType}</td>
                                {
                                   allUser?.role !== 'admin' ?<td><button onClick={() => handleMakeAdmin(allUser._id)} className="btn btn-xs btn-primary">Make Admin</button></td>:<p>admin</p>
                                }
                                <td><button onClick={() => handleDeleteAdmin(allUser._id)} className="btn btn-xs btn-error">Delete User</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;